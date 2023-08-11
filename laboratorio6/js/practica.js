//Este es el desarollo del laboratorio 6, en donde trabajaré JavaScript

var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
};
var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
};
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
}; 

//Arreglo que contiene pingüinos
const listaPinguinos=[{
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
},
{
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
},
{
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }   
}
]

//Ciclo for para imprimir el nombre de cada pinguino a consola
for(let i=0; i<listaPinguinos.length; i++){
    console.log(`El nombre del pinguino es ${listaPinguinos[i].name}`)
};
console.log('-------------------------------------')
//Variable que captura dato y sirve para imprimir longitud de la matriz
let tam=(listaPinguinos.length)
console.log(`El tamaño de la matriz es de: ${tam}`)
console.log('-------------------------------------')
//Agrega una propiedad nueva a cada pinguino
for (let i = 0; i < listaPinguinos.length; i++) {
    var ramdom= listaPinguinos[i].numberOfFeet = Math.floor(Math.random() * 5 ) + 1;
}
console.log(`Número aleatorio de pies: ${ramdom}`)
console.log('-------------------------------------')
//Imprimir mensaje en base si puede volar o no
for (let i = 0; i < listaPinguinos.length; i++) {
    if(listaPinguinos[i].canFly){
        const message1 = `${listaPinguinos[i].name} puede volar!`
        console.log(message1);
    }
}
console.log('-------------------------------------')
//Array que imprime a los pinguinos que tengan más de dos pies
const mesaage2= listaPinguinos.filter(x=>x.numberOfFeet>2)
console.log(mesaage2);
console.log('-------------------------------------')
//Agregar propiedad de "FavoriteFoods" como una matriz de tres cadenas
for (let i = 0; i < listaPinguinos.length; i++) {
    listaPinguinos[0].favoriteFoods = ['Sandía', 'Papaya', 'Banano'];
    listaPinguinos[1].favoriteFoods = ['Pescado', 'Chuleta', 'Pollo'];
    listaPinguinos[2].favoriteFoods = ['Arroz', 'Frijoles', 'Granola'];
}
console.log('-------------------------------------')
//Acceder a la segunda comida favorita del pegüino e imprimirla
listaPinguinos.map((penguin, index)=>
    {
        console.log('La comida favorita de ',penguin.name,'es: ',penguin.favoriteFoods[1]);
    }
)
console.log('-------------------------------------')
//Modificar el último valor de la lista "FavoriteFoods" por "Piñas"
listaPinguinos.map((penguin, index)=>
    {
        penguin.favoriteFoods[2]="Piña"
    }
)
console.log(listaPinguinos); //este arreglo no va a devolver nada, sin embargo sí se está aplicando el cambio
console.log('-------------------------------------')
//Acceder a la propiedad de "FavoriteFoods" e imprimir cada una de ellas
for (let i = 0; i < listaPinguinos.length; i++) {
    const foodsMens = `La lista de comidas favoritas de ${listaPinguinos[i].name} es: ${listaPinguinos[i].favoriteFoods}`
    console.log(foodsMens);
}