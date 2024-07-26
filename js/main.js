function bienvenida() {
    miNombre = prompt ("Ingresa tu nombre").toUpperCase ()
    alert (`Bienvenido " ${miNombre}" al juego del miedo...
           
          Para continuar oprimí ACEPTAR`); 
do {   edad = parseInt (prompt (`Ingesa su EDAD.

Solo números`)); 
    if (isNaN(edad)){
        alert ("Debes ingresar un número")
    }        
}while (isNaN (edad));
} 

bienvenida ();

if (edad >"17" && edad <"51") {
    alert ("Ingresaste al juego");
let opcion = prompt (`Ingresa la letra de la opción deseada:
A. Trampa en el laberinto de espinas.
B. Trampa de la cera y la vela.
C. Trampa para osos invertida.
D. Trampa del cuarto de baño.

Para SALIR solo apretá ENTER`).toUpperCase();

    switch (opcion) {
        case "A":
            alert ("No quieras llamar su atención, ya la tienes.")
            break;
        case "B":
            alert ("¿Estas seguro/a de faltar a tu trabajo?")
            break;
        case "C":
            alert ("Afuera de los vicios..")
            break;
        case "D":
            alert ("¿Qué estas dispuesto/a a perder?")
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
} if (edad < "18") {
    alert ("Todavia no llegó tu hora.");
} if (edad > "50") {
    alert ("Ya pasó tu hora, te estamos cuando de un bobaso.");
}