function validar() {
    const nombre= document.getElementById('name').value;
    const edad= document.getElementById("age").value; 
    const indice = document.getElementById("opciones").selectedIndex;
    const email = document.getElementById("email").value;
    var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;
    const newDate = new Date(ano, mes, dia); 
    const Id = document.getElementById("id").value; 
    var seleccionado = false; 

    // var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
    const cel = document.getElementById("phone").value; 
    const elemento = document.getElementById("suscripcion");
    const options = document.getElementsByName("opcion"); 
    for(var i=0; i<options.length; i++) {
        if(options[i].checked) {
            seleccionado = true;
            break;
        }
    } 

    if (!nombre || nombre.length == 0 || /^\s+$/.test(nombre)) {
    
        alert('[ERROR] El campo "Nombre" está nulo');
        document.getElementById('name').focus;
        return false;
    }
    else if (isNaN(edad) ) {
    
        alert('[ERROR] El campo debe tener un valor numérico');
        return false;
    }
    else if (indice == null || indice == 0 ) {
    
        alert('[ERROR] En este combobox se debe seleccinar una opción');
        return false;
    }
    else if ( !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    
        alert('[ERROR] En este campo se debe ingresar un correo electrónico en formato correcto');
        return false;
    }
    //else if ( !isNaN(newDate)) {
    
     //   alert('[ERROR] El formato del campo "Fecha" es incorrecto, intenta de nuevo...');
     //   return false;
    //}
    else if ( !( /^[A-Z]\d{8}$/.test(Id)) ) {
    
        alert('[ERROR] El formato del campo "Identificación" es incorrecto, intenta de nuevo...');
        return false;
    }
    else if ( !(/^\d{9}$/.test(cel))) {
    
        alert('[ERROR] El formato del campo "Teléfono" es incorrecto, intenta de nuevo, sin espacios, guiones...');
        return false;
    }
    else if (!elemento.checked) {
    
        alert('[ERROR] Debes marcar de manera obligatoria el campo de "Estoy de acuerdo con enviar mi información"');
        return false;
    }
    else if (!seleccionado) {
    
        alert('[ERROR] Debes seleccionar un genero...');
        return false;
    }
    return true;
} 
   


/*var global=0;

function accion(){
    alert('Sus datos se guardaron correctamente');
}
//Esta función está recibiendo parámetros
function enviarMensaje(message, number){
    //const valorInput= document.getElementById('valor').value; //se agrega en los que se desee obtener el valor
    //alert(`El primer mensaje es: ${message} y el segundo mensaje es: ${number}`);
    //alert(valorInput);
    const valor= document.getElementById('5').value; 
    alert(valor);
    //variable global inicializada y agarra valor de la función
    global=valor;
    alert(partirMensaje());
    //hace que en el input se escriba el valor 20
    document.getElementById('valor').value=20; 
    
}
function cambiarColor(){
   const valor= document.getElementById('titulo');
   console.log(valor)
   titulo.style.color='black';
   titulo.style.background="blue";
   alert(global);

}

//submetodo que captura valor de otra función
function partirMensaje(){
    return "Mensaje partido"
}

//objeto
const perro = [{
    //defino atrubutos y separo por coma
    id: 123,
    nombre: "Ares",
    raza: "French Poddle",
    peso: 5

}] */