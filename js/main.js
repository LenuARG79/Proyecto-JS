let inicioJuego = new Date ();

const formulario = document.getElementById (`formulario`);
const infoJugador = document.getElementById (`infoJugador`);
let nombreJugador;
let edad; 
let vitalidad = 100;
let respuestaCorrecta = 0;

formulario.addEventListener(`submit`, (e) => {e.preventDefault ();
    nombreJugador = document.getElementById (`nombre`).value.toUpperCase();
    edad = parseInt(document.getElementById (`edad`).value);
    localStorage.setItem (`nombreJugador`, nombreJugador);
    localStorage.setItem (`edad`, edad);
    do {  
         if (edad < 18) {
             validarEdad.innerHTML = `Me estas mintiendo, intentalo de nuevo`;
             document.getElementById (`edad`).value = " ";
             document.getElementById (`edad`).focus ();
             edad = parseInt (document.getElementById (`edad`).value);
         } 
     } while (edad < 18);
    if (edad >= 18) { 
        if (validarEdad.innerHTML.includes (`Me estas mintiendo, intentalo de nuevo`)) {
            validarEdad.innerHTML = " ";
        infoJugador.innerHTML = `${nombreJugador} tu fuiste seleccionado/a... Tomaras el lugar del Dr. Gordon quien ya no está entre nosotros.`
    }};

const datosJugador = document.getElementById (`datosJugador`);
const datoNombreJugador = document.getElementById (`datoNombreJugador`);
const datoEdadJugador = document.getElementById (`datoEdadJugador`);
const datoEdadNoValido = document.getElementById (`datoEdadNoValida`);
const datoVitalidadJugador = document.getElementById (`datoVitalidadJugador`);

datoNombreJugador.innerHTML = localStorage.getItem(`nombreJugador`);
datoEdadJugador.innerHTML = localStorage.getItem(`edad`);
    if (edad < 18) {
       datoEdadNoValido.innerHTML = `Edad no válida`;
}
datoVitalidadJugador.innerHTML = vitalidad;
});

/*{alert (`Cuentas con tu energia al ${vitalidad}% pero cada vez que pierdas en los desafios se reduciras un 25% hasta llegar a tu fin. 
        
Podras ver tu vitalidad cada vez que termines un desafio.`)
}*/
/*
function desafiosSuperados() {
    respuestaCorrecta += 1;
}

class Jugador {
    constructor (nombreJugador, edad, vitalidad) { 
    this.nombreJugador = nombreJugador;
    this.edad = edad;
    this.vitalidad = vitalidad;
} 
}

let jugadores = [
    ({nombreJugador: "LUCA", edad: 28, vitalidad: 50}),
    ({nombreJugador: "CIRO", edad: 27, vitalidad: 25}),
    ({nombreJugador: "EMMA", edad: 40, vitalidad: 25}),
    ({nombreJugador: "JIME", edad: 35, vitalidad: 0}),
];

function nuevoJugador (nombreJugador, edad, vitalidad) {
    let jugador = new Jugador (nombreJugador, edad, vitalidad);
    jugadores.push (jugador);
}

nuevoJugador (nombreJugador, edad, vitalidad);

console.log (`Tu nombre es ${nombreJugador}`);
console.log (`Tu edad es ${edad}`);
console.log (`Tu vitalidad actual es ${vitalidad}`);
console.log (`número de jugadores: ${jugadores.length}`);
console.log (`Último jugador ingresado: ${jugadores[jugadores.length - 1].nombreJugador}`);

let jugadorABuscar = prompt(`Antes de seguir... ingresa el nombre del jugador que deseas saber como terminó:

Las opciones de busqueda son: Luca, Ciro, Emma y Jime`).toUpperCase ();
    
let jugadorBuscado = jugadores.find(j => j.nombreJugador === jugadorABuscar);
    alert (`Jugador encontrado:
Nombre: ${jugadorBuscado.nombreJugador};
Edad: ${jugadorBuscado.edad};
Vitalidad: ${jugadorBuscado.vitalidad + "%"};
Muerte por falta de tiempo para escapar.`);
    
let opcion = prompt (`Estas son todas las trampas que tendras que superar si queres salir con vida o algo de ella. Ingresa el número "1" para avanzar:

    1. Trampa en el laberinto de espinas.
    -  Trampa de la cera y la vela.
    -  Trampa para osos invertida.
    -  Trampa del cuarto de baño.

    Para SALIR solo apretá ENTER`).toUpperCase();

        switch (opcion) {
            case "1":
                alert (`Aqui te va el desafío. Para pasar a la proxima trampa deberas acertar`);
                let ingresoPrimerDesafio = parseInt (prompt (`Tres números tengo, tres.
Si no acertas que número soy, 
corriendo por ti voy.`));
                if (ingresoPrimerDesafio === 333) {
                alert (`Tu vitalidad sigue siendo del ${vitalidad}%.
Continua con el siguiente desafio`);
                jugadores.push ({nombreJugador, edad, vitalidad}); 
                jugadores.vitalidad = vitalidad;
                console.log ("Tu vitaliodad es: " + jugadores.vitalidad + "%");
                desafiosSuperados ();    
                alert (`Desafios superados: ${respuestaCorrecta}`);
                } else if (ingresoPrimerDesafio != 333) {
                    vitalidad = vitalidad - 25;
                    alert (`Tu vitalidad se redujo al ${vitalidad}%. 
Continua con el siguiente desafio`);
                jugadores.push ({nombreJugador, edad, vitalidad});
                jugadores.vitalidad = vitalidad;
                console.log (`Desafios superados: ${respuestaCorrecta}`);
                console.log ("Tu vitaliodad es: " + jugadores.vitalidad + "%");
                }
                //break;
            case "2":
                alert (`¿Estas listo/a para eludir esta trampa?`);
                let ingresoSegundoDesafio = parseInt (prompt (`Comienzo con uno,
prosigo con uno,
pero termino con uno,
¿me conoce alguno?`));
                if (ingresoSegundoDesafio === 111) {
                alert (`Tu vitalidad sigue siendo del ${vitalidad}%.
Continua con el siguiente desafio, estas de racha`);
                jugadores.push ({nombreJugador, edad, vitalidad}); 
                jugadores.vitalidad = vitalidad;
                console.log ("Tu vitalidad es: " + jugadores.vitalidad + "%");
                desafiosSuperados ();
                alert (`Desafios superados: ${respuestaCorrecta}`);
                } else if (ingresoSegundoDesafio !== 111) {
                vitalidad = vitalidad - 25;
                alert (`Tu vitalidad se redujo al ${vitalidad}%. 
Continua con el siguiente desafio, te deseo mas suerte de la que tienes`);
                jugadores.push ({nombreJugador, edad, vitalidad});
                jugadores.vitalidad = vitalidad;
                console.log (`Desafios superados: ${respuestaCorrecta}`);
                console.log ("Tu vitalidad es: " + jugadores.vitalidad + "%");     
                }
                //break;
            case "3":
                alert (`Ahora que sigue.. estas muy cerca de quedar en libertad pero...
pero antes tenes que responder este acertijo`);
                let ingresoTercerDesafio = parseInt (prompt (`¿Qué cosa será aquella
que mirada del derecho
y mirada del revés
siempre un número es?`));
                if (ingresoTercerDesafio === 69) {
    alert (`Tu vitalidad sigue siendo del ${vitalidad}%.
Segui avanzando en los desafio, ya queda nada`);
                jugadores.push ({nombreJugador, edad, vitalidad}); 
                jugadores.vitalidad = vitalidad;
                console.log ("Tu vitalidad es: " + jugadores.vitalidad + "%");
                desafiosSuperados ();
                alert (`Desafios superados: ${respuestaCorrecta}`);
                } else if (ingresoSegundoDesafio !== 69) {
                vitalidad = vitalidad - 25;
                alert (`Tu vitalidad se redujo al ${vitalidad}%. 
Continua con el siguiente desafio`);
                jugadores.push ({nombreJugador, edad, vitalidad});
                jugadores.vitalidad = vitalidad;
                console.log (`Desafios superados: ${respuestaCorrecta}`);
                console.log ("Tu vitalidad es: " + jugadores.vitalidad + "%");
                }               
                //break;
            case "4":
                alert (`Terminar con vida o lo que te queda de ella solo depende de ti...`);
                let ingresoCuartoDesafio = parseInt (prompt (`Yo no quiero que os canseis
y por eso recomiendo que atencion presteis
para suprimir un perro 
y así un numero obtendreis.`))
                if (ingresoCuartoDesafio === 6) {
                alert (`Tu vitalidad sigue siendo del ${vitalidad}%.`);
                jugadores.push ({nombreJugador, edad, vitalidad}); 
                jugadores.vitalidad = vitalidad;
                console.log ("Tu vitalidad es: " + jugadores.vitalidad + "%");  
                desafiosSuperados ();
                alert (`Desafios superados: ${respuestaCorrecta}`);
                } else if (ingresoSegundoDesafio !== 6) {
                vitalidad = vitalidad - 25;
                alert (`Tu vitalidad se redujo al ${vitalidad}%.`);
                jugadores.push ({nombreJugador, edad, vitalidad});
                jugadores.vitalidad = vitalidad;
                console.log (`Desafios superados: ${respuestaCorrecta}`);
                console.log ("Tu vitalidad es: " + jugadores.vitalidad + "%"); 
                }
                if (vitalidad >= 25 && vitalidad <= 100) {
                    alert (`Has superado las trampas, esto no termina aca.
Aun no te di la llave para salir.
Nos vemos en la próxima Pre-Entrega`);
                } else if (vitalidad === 0) {
                    alert (`Lo siento... de todos modos seras reemplazo`)
                }   
                break;            
            default:
                alert ("Abandoste... tu juego a terminado...")
    let fin = prompt ("Ingresa el codigo de 3 letras que acaba de llegar a tu mobil para salir.").toUpperCase();            
        do {
            alert ("Pensabas que ibas a salir asi nomas, NO. Fuste seleccionado por alguna razón.");            
            fin = prompt ("Intentalo de nuevo").toUpperCase ();
    }   while (fin !== "SAW");
        if (fin == "SAW") { 
        alert ("HASTA LA PROXIMA PRE-ENTREGA");
    }
    break;
    }
    let finJuego = new Date;
    let tiempoDeJuego = finJuego - inicioJuego;
    alert (`Tu juego a durado: ${tiempoDeJuego} milisegundos`);*/