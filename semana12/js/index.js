alert('HOLA, estoy aprendiendo a utilizar JavaScript')
// fORMA DE COMENTAR UNA LÍNEA
/* Forma para comentar varias líneas */

//Variables: un espacio en memoria que tiene un valor que puede variar el nombre, id y tipo
//Dato primitivo: tipos definidos dentro del lenguaje string number boolean [] date 
//tipo objetos

/*variable global, nota: no es buena práctica estar declarando una variables globales
var nombre= "Pedro";
variable local dentro de su ámbito
let apellido= "Perez";*/

//Validacion if
if(true){
    //strings
    var nombre= "Pedro";
    let apellido= "Perez";
}

alert(nombre)
//alert(apellido)

//booleana
let bandera= true;
//numbers
let edad= 15;
let precio = 3.35;
//array
let lista= [];
//date es un objeto
let fecha= new Date().getMonth()+1;
alert(fecha)

if(5!=="5"){
    alert('SIIIII');
} 
else{
    alert('NOOO');
}

//constante: un valor que se define y no puede ser modificado
const PI=3.14;
//PI=32222; //esta da error porque no se puede cambiar una vez que ya se definió

const Persona={
    cedula: '123456789',
    nombre: 'Jorge Félix',
    apellido: 'Hernández Soto',
    altura: 1.78,
    peso: 75,
    edad: 18
}
//string template (forma de concatenar)
alert(`El nombre de la persona es ${Persona.nombre}, su apellido es ${Persona.apellido}, tiene una edad de ${Persona.edad} años, tiene una altura de ${Persona.altura} cm y su peso es ${Persona.peso} kg`);

let tiene= Persona.hasOwnProperty('edad') //durante la ejecución del código en js puede agregársele o quitarle atributos al objeto, debido a que JS en muy dinámico.
alert(tiene)

let tienePerro;
alert(tienePerro);
tienePerro= null;
//tienePerro= true;

if(tienePerro){
    alert('tiene perro'); //definida
}else{
    alert('no tiene perro'); //indefinida
}

//forma crear una lista o un array
let listaColores= ['Rojo', 'Verde', 'Azul'];
alert(listaColores[1]);
alert(listaColores.length);

/*//forma de crear un método o función
function saludar2(){
    alert(prueba);

}

function saludar(){
    var prueba=5;
}

//forma de llamar a la función
saludar2();
saludar();*/

for(let i=0; i<listaColores.length; i++){
    console.log(listaColores[i])
};

console.log('foreach')
listaColores.forEach((valor,index) => {
    
    if(index % 2==0){
        console.log(`El valor es: ${valor} y el índice es ${index}`)
    }
});

console.log('map')
listaColores.map((valor,index) => {
    console.log(`El valor es: ${valor} y el índice es ${index}`)
}).filter(x=>x==('Rojo'))

//array de objetos
const listaPersonas=[{
    id:'6666',
    nombre: 'María',
    apellido: 'Soto',
    edad: 50

},
{
    id:'7777',
    nombre: 'Sonia',
    apellido: 'Gonzales',
    edad: 15

},
{
    id:'8888',
    nombre: 'Ronald',
    apellido: 'Viquez',
    edad: 26

},
{
    id:'1111',
    nombre: 'Alex',
    apellido: 'Sirias',
    edad: 10

},
{
    id:'2222',
    nombre: 'Marcos',
    apellido: 'Monge',
    edad: 76

}
]

const listaResultados = listaPersonas.map((persona, index)=>{
    let nombreRes= `Mi nombre es ${persona.nombre} ${persona.apellido}`;
    return{
        id:index,
        cedula:persona.id,
        nombre:nombreRes,
        edad:persona.edad
    }
}).filter(x=>x.edad>18);

console.log(listaResultados);