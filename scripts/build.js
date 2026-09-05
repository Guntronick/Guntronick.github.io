// Genera dist/: HTML minificado con los <script> inline ofuscados, CSS minificado
// y los assets estáticos copiados tal cual. dist/ es lo único que se publica en
// GitHub Pages — el código fuente (index.html, css/style.css) sigue legible en el repo.
'use strict';

const path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const JavaScriptObfuscator = require('javascript-obfuscator');
const CleanCSS = require('clean-css');
const { minify: minifyHtml } = require('html-minifier-terser');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const STATIC_ENTRIES = ['img', 'CV', 'css/fonts'];

async function main() {
  await fs.remove(DIST);
  await fs.ensureDir(DIST);

  const html = await fs.readFile(path.join(ROOT, 'index.html'), 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });

  $('script').each((_, el) => {
    const node = $(el);
    if (node.attr('src')) return; // scripts de CDN de terceros: se dejan intactos
    const code = node.html();
    if (!code || !code.trim()) return;
    const obfuscated = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.3,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.75,
      identifierNamesGenerator: 'hexadecimal',
      renameGlobals: false,
      selfDefending: true,
    }).getObfuscatedCode();
    node.text(obfuscated);
  });

  const cssSrcPath = path.join(ROOT, 'css', 'style.css');
  const css = await fs.readFile(cssSrcPath, 'utf8');
  const cssOut = new CleanCSS({ level: 2 }).minify(css);
  if (cssOut.errors.length) {
    throw new Error('Error minificando css/style.css: ' + cssOut.errors.join('\n'));
  }
  await fs.ensureDir(path.join(DIST, 'css'));
  await fs.writeFile(path.join(DIST, 'css', 'style.css'), cssOut.styles, 'utf8');

  const finalHtml = await minifyHtml($.html(), {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    minifyCSS: true,
    minifyJS: false, // el JS inline ya se ofuscó arriba
    collapseBooleanAttributes: true,
    removeScriptTypeAttributes: false,
    removeEmptyAttributes: false,
  });
  await fs.writeFile(path.join(DIST, 'index.html'), finalHtml, 'utf8');

  for (const entry of STATIC_ENTRIES) {
    const src = path.join(ROOT, entry);
    if (await fs.pathExists(src)) {
      await fs.copy(src, path.join(DIST, entry));
    }
  }

  console.log('Build listo en dist/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
