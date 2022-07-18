/*Vamos a hacer un conversor de monedas: 
 1- Declaré dos constantes con el valor del dolar y el euro en Argentina.
 2- También usé funciones flecha para calcular el valor de la conversión. 
 3- A través de prompt habilitamos al usuario que decida que conversión realizar.
 4- Hice otro prompt para que ingrese el valor que desee. 
 5- Usé una estructura condicional switch, y entre paréntesis le pasamos la expresión a evaluar que será la variable 'seleccion' donde previamente el usuario ingresa el tipo de operación q quiere realizar. 
 6- Dentro del switch hay diferentes cases a ejecutar dependiendo la selección del usuario, en cada case se hace el cáculo de la operación, con el valor que ingresó el usuario y se muestra en pantalla con alert. 
 7- Si el valor no es ninguno de los establecidos entonces se mostrará una ventana de alerta q le dice al usuario que eliga una opción válida. 
*/

const conversorDolar = 128.41;
const conversorEuro = 128.97;
const cotizarDolar = (pesos) => pesos / conversorDolar;
const cotizarPesos = (dolar) => dolar * conversorDolar;
const cotizarPesosEuro = (pesos) => pesos / conversorEuro;
const cotizarEuro = (euro) => euro * conversorEuro;
let seleccion = prompt("Seleciona el cambio a convertir \n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n 3 - PESOS A EUROS \n 4 - EUROS A PESOS ");
let valor = prompt("Ingresá el valor");

switch (seleccion) {
  case "1":
    alert(cotizarDolar(valor));
    break;
  case "2":
    alert(cotizarPesos(valor));
    break;
  case "3":
    alert(cotizarPesosEuro(valor));
    break;
  case "4":
    alert(cotizarEuro(valor));
    break;
  default:
    alert('Elegí una opción válida');
    break;
}

alert('¡Gracias por utilizar nuestros servicios!');



