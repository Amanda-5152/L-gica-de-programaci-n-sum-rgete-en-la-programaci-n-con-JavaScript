//programa en el cual realizamos un programa en el que el usuario debe adivinar el numero secreto
alert("Bienvenido al juego del número secreto");

let numeroUsuario = 0;
//let numeroSecreto = Math.floor(Math.random()*10)+1;
let intento = 1;
//let palabraIntento = "intento";
let maximosIntentos = 3;
let numeroMinimo = 10;
let numeroMaximo = 20;
//Math.floor(Math.random() * (max - min + 1) + min);
let numeroSecreto = Math.floor(Math.random() * ( numeroMaximo - numeroMinimo + 1) + numeroMinimo);
//console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt(`Escribe un número entre ${numeroMinimo} y ${numeroMaximo}, tienes ${maximosIntentos} intentos para adivinar el número secreto: `));

    /*lo que se hace con el siguiente codigo es imprimir en la consola del navegador
    el numero secreto y el numero ingresado por el usuario, esto con el fin de 
    asegurarnos que el programa funciona correctamente*/
    console.log("Numero secreto: ", numeroSecreto);
    console.log("Numero ingresado por el usuario: ", numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades, Acertaste!, ganaste en ${intento} ${intento == 1 ? "Intento" : "Intentos"}, el número secreto es: ${numeroSecreto}.`);
    }   else{

            if (numeroUsuario > numeroSecreto){
                alert("El número secreto es menor");
            }else{
                    alert("El número secreto es mayor");
                }
            intento ++;
            //palabraIntento = "intentos" 
                if (intento > maximosIntentos){
                    alert(`Llegaste al numero máximo de ${maximosIntentos} intentos.`);
                    break;
                }
       // alert(`Lo siento, el número correcto es: ${numeroSecreto}, y has ingresado el ${numeroUsuario}`);
    }
}
