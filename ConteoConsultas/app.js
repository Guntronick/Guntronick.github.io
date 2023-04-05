
		// Obtener el botón contador de suma y de resta
		var botonSumar = document.getElementById("boton_contador_repro");
		var botonRestar = document.getElementById("boton_contador_repro_restar");

		// Obtener el elemento span del contador
		var contadorValorRepro = document.getElementById("contador_valor_repro");

		// Inicializar el contador
		var contadorRepro = 0;

        function copiarValorRepro() {
            var valor = document.getElementById("contador_valor_repro").innerHTML;
            navigator.clipboard.writeText(valor);
          };

        // Agregar un evento de click al botón de suma
		botonSumar.addEventListener("click", function() {
			// Sumar 1 al contador
			contadorRepro++;

			// Actualizar el texto del elemento span con el nuevo valor del contador
			contadorValorRepro.innerText = contadorRepro;
            
		});

		// Agregar un evento de click al botón de resta
		botonRestar.addEventListener("click", function() {
			// Restar 1 al contador
			contadorRepro--;

			// Actualizar el texto del elemento span con el nuevo valor del contador
			contadorValorRepro.innerText = contadorRepro;
		});

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_gene");
        var botonRestar = document.getElementById("boton_contador_gene_restar");

        // Obtener el elemento span del contador
        var contadorValorGene = document.getElementById("contador_valor_gene");

        // Inicializar el contador
        var contadorGene = 0;

        function copiarValorGene() {
            var valor = document.getElementById("contador_valor_gene").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorGene++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorGene.innerText = contadorGene;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorGene--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorGene.innerText = contadorGene;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_ayuda");
        var botonRestar = document.getElementById("boton_contador_ayuda_restar");

        // Obtener el elemento span del contador
        var contadorValorAyuda = document.getElementById("contador_valor_ayuda");

        // Inicializar el contador
        var contadorAyuda = 0;

        function copiarValorAyuda() {
            var valor = document.getElementById("contador_valor_ayuda").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorAyuda++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorAyuda.innerText = contadorAyuda;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorAyuda--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorAyuda.innerText = contadorAyuda;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_rpnow");
        var botonRestar = document.getElementById("boton_contador_rpnow_restar");

        // Obtener el elemento span del contador
        var contadorValorRPnow = document.getElementById("contador_valor_rpnow");

        // Inicializar el contador
        var contadorRPnow = 0;

        function copiarValorRPnow() {
            var valor = document.getElementById("contador_valor_rpnow").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorRPnow++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorRPnow.innerText = contadorRPnow;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorRPnow--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorRPnow.innerText = contadorRPnow;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_baja");
        var botonRestar = document.getElementById("boton_contador_baja_restar");

        // Obtener el elemento span del contador
        var contadorValorBaja = document.getElementById("contador_valor_baja");

        // Inicializar el contador
        var contadorBaja = 0;

        function copiarValorBaja() {
            var valor = document.getElementById("contador_valor_baja").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorBaja++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorBaja.innerText = contadorBaja;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorBaja--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorBaja.innerText = contadorBaja;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_reins");
        var botonRestar = document.getElementById("boton_contador_reins_restar");

        // Obtener el elemento span del contador
        var contadorValorReins = document.getElementById("contador_valor_reins");

        // Inicializar el contador
        var contadorReins = 0;

        function copiarValorReins() {
            var valor = document.getElementById("contador_valor_reins").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorReins++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorReins.innerText = contadorReins;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorReins--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorReins.innerText = contadorReins;
        });
        
        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_status");
        var botonRestar = document.getElementById("boton_contador_status_restar");

        // Obtener el elemento span del contador
        var contadorValorStatus = document.getElementById("contador_valor_status");

        // Inicializar el contador
        var contadorStatus = 0;

        function copiarValorStatus() {
            var valor = document.getElementById("contador_valor_status").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorStatus++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorStatus.innerText = contadorStatus;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorStatus--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorStatus.innerText = contadorStatus;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_formato");
        var botonRestar = document.getElementById("boton_contador_formato_restar");

        // Obtener el elemento span del contador
        var contadorValorFormato = document.getElementById("contador_valor_formato");

        // Inicializar el contador
        var contadorFormato = 0;

        function copiarValorFormato() {
            var valor = document.getElementById("contador_valor_formato").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorFormato++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorFormato.innerText = contadorFormato;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorFormato--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorFormato.innerText = contadorFormato;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_cursado");
        var botonRestar = document.getElementById("boton_contador_cursado_restar");

        // Obtener el elemento span del contador
        var contadorValorCursado = document.getElementById("contador_valor_cursado");

        // Inicializar el contador
        var contadorCursado = 0;

        function copiarValorCursado() {
            var valor = document.getElementById("contador_valor_cursado").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorCursado++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorCursado.innerText = contadorCursado;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorCursado--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorCursado.innerText = contadorCursado;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_acti");
        var botonRestar = document.getElementById("boton_contador_acti_restar");

        // Obtener el elemento span del contador
        var contadorValorActi = document.getElementById("contador_valor_acti");

        // Inicializar el contador
        var contadorActi = 0;

        function copiarValorActi() {
            var valor = document.getElementById("contador_valor_acti").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorActi++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorActi.innerText = contadorActi;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorActi--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorActi.innerText = contadorActi;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_opor");
        var botonRestar = document.getElementById("boton_contador_opor_restar");

        // Obtener el elemento span del contador
        var contadorValorOpor = document.getElementById("contador_valor_opor");

        // Inicializar el contador
        var contadorOpor = 0;

        function copiarValorOpor() {
            var valor = document.getElementById("contador_valor_opor").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorOpor++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorOpor.innerText = contadorOpor;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorOpor--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorOpor.innerText = contadorOpor;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_discon");
        var botonRestar = document.getElementById("boton_contador_discon_restar");

        // Obtener el elemento span del contador
        var contadorValorDiscon = document.getElementById("contador_valor_discon");

        // Inicializar el contador
        var contadorDiscon = 0;

        function copiarValorDiscon() {
            var valor = document.getElementById("contador_valor_discon").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorDiscon++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorDiscon.innerText = contadorDiscon;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorDiscon--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorDiscon.innerText = contadorDiscon;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_conten");
        var botonRestar = document.getElementById("boton_contador_conten_restar");

        // Obtener el elemento span del contador
        var contadorValorConten = document.getElementById("contador_valor_conten");

        // Inicializar el contador
        var contadorConten = 0;

        function copiarValorConten() {
            var valor = document.getElementById("contador_valor_conten").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorConten++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorConten.innerText = contadorConten;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorConten--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorConten.innerText = contadorConten;
        });

        // Obtener el botón contador de suma y de resta
        var botonSumar = document.getElementById("boton_contador_malconfe");
        var botonRestar = document.getElementById("boton_contador_malconfe_restar");

        // Obtener el elemento span del contador
        var contadorValorMalConfe = document.getElementById("contador_valor_malconfe");

        // Inicializar el contador
        var contadorMalConfe = 0;

        function copiarValorMalConfe() {
            var valor = document.getElementById("contador_valor_malconfe").innerHTML;
            navigator.clipboard.writeText(valor);
          }

        // Agregar un evento de click al botón de suma
        botonSumar.addEventListener("click", function() {
            // Sumar 1 al contador
            contadorMalConfe++;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorMalConfe.innerText = contadorMalConfe;
        });

        // Agregar un evento de click al botón de resta
        botonRestar.addEventListener("click", function() {
            // Restar 1 al contador
            contadorMalConfe--;

            // Actualizar el texto del elemento span con el nuevo valor del contador
            contadorValorMalConfe.innerText = contadorMalConfe;
        });
