let nombreJugador;
let edadJugador;
let vitalidad = 100;

class Juego {
    constructor() {
        this.vitalidad = `${vitalidad}`;
        this.mochila = [];
        this.mensajeFinal = "¡Volviste a tener suerte! Nos vemos en el final";      
}
    realizarAccion(accion) {
        switch (accion) {
            case "laberinto":
                this.laberinto();
                break;

            case "ceraVela":
                this.ceraVela();
                break;

            case "OsosInvertida":
                this.OsosInvertida();
                break;

            case "banio":
                this.banio();
                break;
                         
            default: 
                swal ("Acción no reconocida");
                break;
        }
       /* let resultado = accion === "laberinto" ? this.laberinto() :
                      accion === "ceraVela" ? this.ceraVela() :
                      accion === "OsosInvertida" ? this.OsosInvertida () :
                      accion === "banio" ? this.banio () :
                      null;*/
        if (this.mochila.length === 4) {
            swal(this.mensajeFinal());
        }              
        /*return resultado;*/
}
    crearDesafio (id, texto,respuestaCorrecta, recompenza) {
        const desafioDiv = document.getElementById (id);
        desafioDiv.innerText = `Desafio: ${texto}`;

        const label = document.createElement (`label`);
        label.innerText = `Ingresa la respuesta`;

        const input = document.createElement (`input`);
        input.setAttribute (`type`, `number`);

        label.appendChild (input);
        desafioDiv.appendChild (label);

        input.addEventListener(`change`,() => {
        const respuesta = parseInt (input.value);
        this.validarRespuesta (respuesta, respuestaCorrecta, recompenza, desafioDiv);
    });
    }   

    validarRespuesta (respuesta, respuestaCorrecta, recompenza, contenedor) {
        let mensaje = " ";

        if (respuesta === respuestaCorrecta) {
            this.mochila.push(recompenza);
            mensaje = `Superaste el desafío y has conseguedo una ${recompenza}. ${this.checkvitalidad()}`;
            this.actualizarMochila ();
            contenedor.innerText = " ";
        } else {
            const lostvitalidad = 25;
            this.vitalidad -= lostvitalidad;
            mensaje = `No pudiste y has perdido un ${lostVitalidad}% de tu vitalidad. ${this.checkvitalidad()}. Inténtalo de nuevo para conseguir el objeto perdido en esta sala.`; 
        }

        contenedor.innerText = mensaje;
    } 
    
    actualizarMochila () {
        const mochilaMostrar = this.mochila.length > 0 ?
        this.mochila.map(item => `<li>${item}</li>`).join('') : 
        "Tu mochila está vacía.";
        document.getElementById("mochila").innerHTML = `<h3>Mochila:</h3><ul>${mochilaMostrar}</ul>`;
    }

    laberinto() {
        this.crearDesafio (`trampaUno`, 
        `¡Tres números tengo, tres!. 
        Si no acertas que número soy, 
        corriendo por ti voy.`, 333, `llave`);
    } 
        /*const labelTrampaUno = document.createElement(`label`);
        labelTrampaUno.setAttribute (`id`, `labelTrampaUno`);
        labelTrampaUno.textContent = `Ingresá la respuesta`;

        const inputTrampaUno = document.createElement('input');
        inputTrampaUno.setAttribute('type', 'number');
        inputTrampaUno.setAttribute('id', 'inputTrampaUno');

        labelTrampaUno.appendChild(inputTrampaUno);
        document.body.appendChild(labelTrampaUno);

        inputTrampaUno.addEventListener('change', () => {
        const trampaUno = parseInt(inputTrampaUno.value);
        let mensajeTrampaUno = " ";

        if (trampaUno === 333) {
        const llave = "llave";
    
        this.mochila.push(llave);
        mensajeTrampaUno = `Superaste el desafío y has conseguedo una ${llave}. ${this.checkvitalidad()}`;
        if (this.mochila.length === 4) {
            alert(this.mensajeFinal);
        }

        const mochilaMostrar = juego.mochila.length > 0 ? 
        juego.mochila.map(item => `<li>${item}</li>`).join('') : 
        "Tu mochila está vacia.";
        document.getElementById("mochila").innerHTML = `<h3>mochila:</h3><ul>${mochilaMostrar}</ul>`;
        } else {
        const lostvitalidad = 25;
        this.vitalidad -= lostvitalidad;
        mensajeTrampaUno = `No pudiste has perdido en un ${lostvitalidad}% tu vitalidad. 
        Intentalo de nuevo para conseguir el objeto perdido en esta sala.;
        ${this.checkvitalidad()}.`;
        }
        document.getElementById(`mensajeTrampaUno`).innerText = mensajeTrampaUno;
    })
    };*/
    
    ceraVela() {
        this.crearDesafio (`trampaDos`,
        `Comienzo con uno,
        prosigo con uno,
        pero termino con uno,
        ¿me conoce alguno?`, 111, `navaja`);
    }        
        /*const labelTrampaDos = document.createElement(`label`);
            labelTrampaDos.setAttribute (`id`, `labelTrampaDos`);
            labelTrampaDos.textContent = `Ingresá la respuesta`;
    
            const inputTrampaDos = document.createElement('input');
            inputTrampaDos.setAttribute('type', 'number');
            inputTrampaDos.setAttribute('id', 'inputTrampaDos');
    
            labelTrampaDos.appendChild(inputTrampaDos);
            document.body.appendChild(labelTrampaDos);
    
            inputTrampaDos.addEventListener('change', () => {
            const trampaDos = parseInt(inputTrampaDos.value);
            let mensajeTrampaDos = " ";
    
            if (trampaDos === 111) {
            const navaja = "navaja";
        
            this.mochila.push(navaja);
            mensajeTrampaDos = `Superaste el desafío y has conseguedo una ${navaja}. ${this.checkvitalidad()}`;
            if (this.mochila.length === 4) {
                alert(this.mensajeFinal);
            }

            const mochilaMostrar = juego.mochila.length > 0 ? 
            juego.mochila.map(item => `<li>${item}</li>`).join('') : 
            "Tu mochila está vacia.";
            document.getElementById("mochila").innerHTML = `<h3>mochila:</h3><ul>${mochilaMostrar}</ul>`;
            } else {
            const lostvitalidad = 25;
            this.vitalidad -= lostvitalidad;
            mensajeTrampaDos = `No pudiste has perdido en un ${lostvitalidad}% tu vitalidad. ${this.checkvitalidad()}. 
            Intentalo de nuevo para conseguir el objeto perdido en esta sala.;
            ${this.checkvitalidad()}.`;
            }
            document.getElementById(`mensajeTrampaDos`).innerText = mensajeTrampaDos;
        })
        };*/
    
        OsosInvertida() {
            this.crearDesafio (`trampaTres`,
        `¿Qué cosa será aquella
        que mirada del derecho
        y mirada del revés
        siempre un número es?`, 69, `cuerda`);
    }
        /*    const labelTrampaTres = document.createElement(`label`);
            labelTrampaTres.setAttribute (`id`, `labelTrampaTres`);
            labelTrampaTres.textContent = `Ingresá la respuesta`;
    
            const inputTrampaTres = document.createElement('input');
            inputTrampaTres.setAttribute('type', 'number');
            inputTrampaTres.setAttribute('id', 'inputTrampaTres');
    
            labelTrampaTres.appendChild(inputTrampaTres);
            document.body.appendChild(labelTrampaTres);
    
            inputTrampaTres.addEventListener('change', () => {
            const trampaTres = parseInt(inputTrampaTres.value);
            let mensajeTrampaTres = " ";
    
            if (trampaTres === 69) {
            const cuerda = "cuerda";
        
            this.mochila.push(cuerda);
            mensajeTrampaTres = `Superaste el desafío y has conseguedo una ${cuerda}. ${this.checkvitalidad()}`;
            if (this.mochila.length === 4) {
                alert(this.mensajeFinal);
            }

            const mochilaMostrar = juego.mochila.length > 0 ? 
            juego.mochila.map(item => `<li>${item}</li>`).join('') : 
            "Tu mochila está vacia.";
            document.getElementById("mochila").innerHTML = `<h3>mochila:</h3><ul>${mochilaMostrar}</ul>`;
            } else {
            const lostvitalidad = 25;
            this.vitalidad -= lostvitalidad;
            mensajeTrampaTres = `No pudiste has perdido en un ${lostvitalidad}% tu vitalidad. ${this.checkvitalidad()}. 
            Intentalo de nuevo para conseguir el objeto perdido en esta sala.;
            ${this.checkvitalidad()}.`;
            }
            document.getElementById(`mensajeTrampaTres`).innerText = mensajeTrampaTres;
        })
        };*/    
        
        banio() {
            this.crearDesafio (`trampaCuatro`,
        `Yo no quiero que os canseis
        y por eso recomiendo que atencion presteis
        para suprimir un perro 
        y así un numero obtendreis.`, 6, `lapicera`)
    }
         /*const labelTrampaCuatro = document.createElement(`label`);
            labelTrampaCuatro.setAttribute (`id`, `labelTrampaCuatro`);
            labelTrampaCuatro.textContent = `Ingresá la respuesta`;
    
            const inputTrampaCuatro = document.createElement('input');
            inputTrampaCuatro.setAttribute('type', 'number');
            inputTrampaCuatro.setAttribute('id', 'inputTrampaCuatro');
    
            labelTrampaCuatro.appendChild(inputTrampaCuatro);
            document.body.appendChild(labelTrampaCuatro);
    
            inputTrampaCuatro.addEventListener('change', () => {
            const trampaCuatro = parseInt(inputTrampaCuatro.value);
            let mensajeTrampaCuatro = " ";
    
            if (trampaCuatro === 6) {
            const lapicera = "lapicera";
        
            this.mochila.push(lapicera);
            mensajeTrampaCuatro = `Superaste el desafío y has conseguedo una ${lapicera}. ${this.checkvitalidad()}`;
            if (this.mochila.length === 4) {
                alert(this.mensajeFinal);
            }

            const mochilaMostrar = juego.mochila.length > 0 ? 
            juego.mochila.map(item => `<li>${item}</li>`).join('') : 
            "Tu mochila está vacia.";
            document.getElementById("mochila").innerHTML = `<h3>mochila:</h3><ul>${mochilaMostrar}</ul>`;
            } else {
            const lostvitalidad = 25;
            this.vitalidad -= lostvitalidad;
            mensajeTrampaCuatro = `No pudiste has perdido en un ${lostvitalidad}% tu vitalidad. ${this.checkvitalidad()}. 
            Intentalo de nuevo para conseguir el objeto perdido en esta sala.;
            ${this.checkvitalidad()}.`;
            }
            document.getElementById(`mensajeTrampaCuatro`).innerText = mensajeTrampaCuatro;
        })
        }; */ 

    checkvitalidad() {
        return this.vitalidad > 0 
            ? `Tu vitalidad es del ${this.vitalidad}%.`
            : this.juegoTerminado();
    }

    juegoTerminado() {
        return "Juego Terminado! Perdiste toda tu vitalidad.";
    }
}

const datosJugador = document.getElementById (`datosJugador`);

datosJugador.addEventListener(`submit`, (e) => {e.preventDefault ();
    nombreJugador = document.getElementById (`nombre`).value.toUpperCase();
    edadJugador = parseInt(document.getElementById (`edad`).value);
    localStorage.setItem (`nombreJugador`, nombreJugador);
    localStorage.setItem (`edadJugador`, edadJugador);
    if (edadJugador <= 17) { 
    document.getElementById ("jugadorEdadMenor").innerHTML = `Me estas mintiendo, vuelve a ingresar tu edad`;     
    document.getElementById(`edad`).value = " ";
} 
    else {
    document.getElementById ("jugadorEdadMenor"). innerHTML = " ";       
    document.getElementById("jugadorNombre").innerHTML = `Tu nombre es ${nombreJugador}`;
    document.getElementById("jugadorEdad").innerHTML = `Tu edad es ${edadJugador}`; 
    document.getElementById("jugadorVitalidad").innerHTML = `Tu vitlidad inicial es ${vitalidad}%`;
}});

const juego = new Juego();

document.getElementById("accionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const accion = document.getElementById("accionSeleccionar").value;
    const resultado = juego.realizarAccion(accion);

});
