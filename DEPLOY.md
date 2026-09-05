# Publicar el sitio con código ofuscado (GitHub Pages + Actions)

Este repo ahora tiene un paso de build que genera una versión minificada y
ofuscada del sitio en `dist/` — eso es lo único que se publica. El código
fuente (`index.html`, `css/style.css`) sigue legible en el repo para que
podamos seguir editándolo con normalidad.

**Importante — límites reales de esto:** nada de esto hace el código
"invisible". Cualquier navegador tiene que descargar y ejecutar el HTML/CSS/JS
para mostrar la página, así que siempre va a poder verse por `Ver código
fuente`, la pestaña Network de DevTools, etc. Lo que sí logra este pipeline es
que lo que se vea sea una versión minificada y con nombres de variables/
funciones ilegibles (ofuscada), no el código prolijo con el que trabajamos acá
— sube bastante el costo de copiarlo/entenderlo, pero no lo hace imposible.

No se agregaron bloqueos de clic derecho ni de atajos de teclado (Ctrl+U,
F12, etc.): son triviales de saltear, no funcionan igual en todos los
navegadores, y terminan molestando a gente legítima — por ejemplo un
reclutador que quiera copiar tu email o teléfono del CV. El CV en PDF
(`CV/`) y los íconos de marcas de terceros en `img/tech/` quedan sin ningún
tipo de protección a propósito: el CV está pensado para descargarse, y los
íconos son logos públicos de otras empresas, no hay nada propio que proteger
ahí.

## 1. Probar el build en tu máquina (opcional pero recomendado)

Necesitás [Node.js](https://nodejs.org/) instalado (cualquier versión 18+).

```bash
npm install
npm run build      # genera dist/
npm run preview    # sirve dist/ en http://localhost:3000 para revisar
```

Abrí `http://localhost:3000`, navegá el sitio, y probá "Ver código fuente"
(`Ctrl+U` / `Cmd+Option+U`) para confirmar que el HTML/JS se ve minificado y
ofuscado en vez del código legible.

## 2. Conectar esta carpeta al repo de GitHub

Esta carpeta local todavía no es un repositorio git. Si `luisafricano.github.io`
ya existe en tu cuenta de GitHub:

```bash
cd /Users/intertronick/Downloads/luisafricano.github.io-main
git init
git remote add origin https://github.com/<tu-usuario>/luisafricano.github.io.git
git add .
git commit -m "Agrega pipeline de build con ofuscación para GitHub Pages"
git branch -M main
git push -u origin main --force
```

⚠️ El `--force` en el primer push pisa lo que haya en `main` del repo remoto
con el contenido de esta carpeta. Si el repo remoto tiene historial o cambios
que querés conservar, avisame antes de pushear así lo vemos juntos en vez de
perder algo.

Si el repo remoto **no existe todavía**, crealo primero en GitHub (vacío, sin
README/licencia) y después corré los mismos comandos de arriba sin el
`--force` (ya que no habría nada que pisar).

## 3. Cambiar el origen de GitHub Pages a "GitHub Actions"

Por defecto, GitHub Pages en un repo `usuario.github.io` sirve directamente
los archivos de la rama `main`. Para que en cambio se publique el resultado
del build (`dist/`, ofuscado), hay que cambiar la fuente:

1. Andá al repo en GitHub → **Settings** → **Pages** (menú lateral).
2. En **Build and deployment → Source**, cambiá de "Deploy from a branch" a
   **"GitHub Actions"**.
3. No hace falta elegir ningún workflow de la lista — ya está el archivo
   `.github/workflows/deploy.yml` en el repo, GitHub lo va a detectar solo.

## 4. Verificar que el deploy automático funciona

1. Hacé cualquier push a `main` (o simplemente esperá a que termine el push
   del paso 2).
2. Andá a la pestaña **Actions** del repo y confirmá que el workflow
   "Deploy a GitHub Pages" corrió en verde (dos jobs: `build` y `deploy`).
3. Entrá a la URL pública del sitio (`https://<tu-usuario>.github.io/`) y
   hacé "Ver código fuente" — deberías ver el HTML minificado y los
   `<script>` con nombres de variables ilegibles, no el código original.

## 5. Cómo seguir trabajando de acá en adelante

No cambia nada en el día a día: seguimos editando `index.html` y
`css/style.css` directamente, igual que ahora. Cada vez que hagas push a
`main`, GitHub Actions corre `npm run build` solo y publica automáticamente
la versión ofuscada — no hace falta correr nada a mano ni acordarse de
generar `dist/` vos mismo.
