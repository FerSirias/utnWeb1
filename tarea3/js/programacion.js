document.addEventListener("DOMContentLoaded", function () {
    var customAlert = document.getElementById("customAlert");
    var cerrarAlertBtn = document.getElementById("cerrarAlert");

    cerrarAlertBtn.addEventListener("click", function () {
        customAlert.style.display = "none";
    });

    customAlert.style.display = "block";
});

//EJERCICIO 1
// Crear el array de meses
var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  // Mostrar los doce nombres de meses utilizando console.log()
  for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
  }
  console.log("----------------------------")
//EJERCICIO 2
var valores = [true, 5, false, "hola", "adios", 2];

// 1. Determinar cuál de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];
if (texto1.length > texto2.length) {
  console.log("'" + texto1 + "' es mayor que '" + texto2 + "'");
} else if (texto2.length > texto1.length) {
  console.log("'" + texto2 + "' es mayor que '" + texto1 + "'");
} else {
  console.log("Los dos textos tienen la misma longitud.");
}
console.log("----------------------------")

// 2. Utilizando exclusivamente los dos valores booleanos del array,
// determinar los operadores necesarios para obtener un resultado true y otro resultado false
var valorBooleano1 = valores[0];
var valorBooleano2 = valores[2];
var resultadoTrue = valorBooleano1 || valorBooleano2;
var resultadoFalse = valorBooleano1 && valorBooleano2;
console.log("Resultado True:", resultadoTrue);
console.log("Resultado False:", resultadoFalse);
console.log("----------------------------")

// 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var numero1 = valores[1];
var numero2 = valores[5];
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("----------------------------")

//Ejercicio 3
//Determinar si un número es mayor que el otro
//Validar si el número es positivo, es decir, mayor a cero.
var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2){
    console.log(`"${numero1}" No es mayor que "${numero2}"`);
};

if (numero2 > 0){
    console.log(`"${numero2}" Es positivo`);
};

if (numero1 < 0 || numero1 !== 0){
    console.log(`"${numero1}" es negativo o distinto de cero`);
}

if (++numero1 <= numero2){
    console.log(`Incrementar en 1 unidad el valor de "${--numero1}" No lo hace mayor o igual que "${numero2}"`);
};
console.log("----------------------------")

//Ejercicio 4
//sacar el factorial de un número de manera recursiva
function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursivo(n - 1);
    }
  }

console.log("El número es: " + factorialRecursivo(5));

//EJERCICIO 5
//Ejercicio para calcular si un número es par o impar
function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        return " par";
    } if(numero % 2 == 1) {
        return " impar";
    } else{
        return "ta en blanco"
    }
}

// Obtener referencia al botón y al campo de entrada
var calcularBtn = document.getElementById("calcularBtn");
var numeroInput = document.getElementById("numeroInput");
var resultadoElement = document.getElementById("resultado");

// Agregar un evento al botón para calcular y mostrar paridad
calcularBtn.addEventListener("click", function () {
    var numeroIngresado = parseInt(numeroInput.value, 10);
    var resultado = determinarParOImpar(numeroIngresado);
    resultadoElement.textContent = `El número ingresado es${resultado}`;
});

//Función para Indicar si la cadena de texto contiene mayusculas, minusculas o ambas?
function mayusc(chain){
    if (chain.toUpperCase() === chain) {
        alert("La palabra enviada es: "+ text + "\nEsta cadena de texto está formada solo por mayúsculas.");
    } else if (chain.toLowerCase() === chain) {
        alert("La palabra enviada es: "+ text + "\nEsta cadena de texto está formada solo por minúsculas.");
    } else if (chain.toLowerCase() !== chain.toUpperCase()) {
        alert("La palabra enviada es: "+ text + "\nEsta cadena de texto está formada por una mezcla de mayúsculas y minúsculas.");
    } 
}

//(mayusc("ferXOO"));
var text = prompt("Por favor, ingresa una palabra:");
mayusc(text);

