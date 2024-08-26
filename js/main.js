let nombreJugador;
let edadJugador;
let vitalidad = 100;

document.getElementById('buscar').addEventListener('click', function() {
    const query = document.getElementById('buscador').value.toLowerCase();

    fetch('js/peliculas.json')
        .then(response => response.json())
        .then(peliculas => {
            const resultados = peliculas.filter(pelicula => 
                pelicula.title.toLowerCase().includes(query)
            );

            mostrarResultados(resultados);
        })
        .catch(error => console.error('Error al buscar películas:', error));
});

function mostrarResultados(peliculas) {
    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = '';

    if (peliculas.length > 0) {
        peliculas.forEach(pelicula => {
            const peliculaDiv = document.createElement('div');
            peliculaDiv.innerHTML = `
                <h3>${pelicula.title}</h3>
                <p><strong>Año:</strong> ${pelicula.year}</p>
                <p><strong>Sinopsis:</strong> ${pelicula.overview}</p>
            `;
            contenedor.appendChild(peliculaDiv);
        });
    } else {
        contenedor.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

class Juego {
    constructor() {
        this.vitalidad = `${vitalidad}`;
        this.mochila = [];
        this.mensajeFinal = "¡Volviste a tener suerte! Nos vemos en el próximo curso";      
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

}

    crearDesafio (id, texto,respuestaCorrecta, recompenza, icono) {
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
        this.validarRespuesta (respuesta, respuestaCorrecta, recompenza, icono, desafioDiv);
    });
    };  

    validarRespuesta (respuesta, respuestaCorrecta, recompenza, icono, contenedor) {
        let mensaje = " ";

        if (respuesta === respuestaCorrecta) {
            this.mochila.push(icono);
            mensaje = `Superaste el desafío y has conseguedo una ${recompenza}. ${this.checkvitalidad()}`;  
            this.actualizarMochila ();
            contenedor.innerHTML = " ";
        } else {
            const lostVitalidad = 25;
            this.vitalidad -= lostVitalidad;
            mensaje = `No pudiste y has perdido un ${lostVitalidad}% de tu vitalidad. ${this.checkvitalidad()}. Inténtalo de nuevo para conseguir el objeto perdido en esta sala.`; 
        }

        contenedor.innerHTML = mensaje;
    } 
    
    actualizarMochila () {
        const mochilaMostrar = this.mochila.length > 0 ?
        this.mochila.map(icono => `<li><i class="${icono}"></i></li>`).join('') : 
        "Tu mochila está vacía.";
        document.getElementById("mochila").innerHTML = `<h3>Mochila:</h3><ul>${mochilaMostrar}</ul>`;
        if (this.mochila.length === 4) {
            this.mostrarMensajeFinal();
        }              
    }

    mostrarMensajeFinal() {
        swal (this.mensajeFinal);
    }

    laberinto() {
        this.crearDesafio (`trampaUno`, 
        `¡Tres números tengo, tres!. 
        Si no acertas que número soy, 
        corriendo por ti voy.`, 333, `llave`, "fa-solid fa-key");
    }
    
    ceraVela() {
        this.crearDesafio (`trampaDos`,
        `Comienzo con uno,
        prosigo con uno,
        pero termino con uno,
        ¿me conoce alguno?`, 111, `pala`, "fa-solid fa-trowel");
    }
    
    OsosInvertida() {
            this.crearDesafio (`trampaTres`,
        `¿Qué cosa será aquella
        que mirada del derecho
        y mirada del revés
        siempre un número es?`, 69, `celular`, "fa-solid fa-mobile-retro");
    } 
        
    banio() {
            this.crearDesafio (`trampaCuatro`,
        `Yo no quiero que os canseis
        y por eso recomiendo que atencion presteis
        para suprimir un perro 
        y así un numero obtendreis.`, 6, `lapiz`, "fa-solid fa-pencil");
    }

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
