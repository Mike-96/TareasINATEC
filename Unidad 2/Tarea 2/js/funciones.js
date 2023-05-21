
// Funcion ocultar o mostrar menu lateral
$('.menu-bar').on('click', function(){
    $('.contenido').toggleClass('abrir')
})

//funcion mostrar saludo
let mensaje = document.getElementById('mensaje');
let buttomSaludar = document.getElementById('buttom-saludar');

function mostrarMensaje() {
    mensaje.style.display = 'block';
}

buttomSaludar.addEventListener('click', mostrarMensaje);

//funcion ocultar saludo
let buttomClear = document.getElementById('clear');

function ocultarMensaje() {
    mensaje.style.display = 'none';
}

buttomClear.addEventListener('click', ocultarMensaje);

//funcion mostrar formulario y tabla 
let btnFormulario = document.getElementById('btnFormulario');
let formulario = document.getElementById('formulario');
let tablaDatos = document.getElementById('array');
let saludar = document.getElementById('saludar');

function mostrarFormulario(){
    formulario.style.display = 'block';
    tablaDatos.style.display = 'block';
    btnFormulario.style.backgroundColor = '#FFADC7';
    btnInicio.style.backgroundColor = '#FBF7F8';
    ocultarElementosInicio();
}

function ocultarElementosInicio() {
    mensaje.style.display = 'none';
    saludar.style.display = 'none';
}

btnFormulario.addEventListener('click', mostrarFormulario);

//funcion volver al inico
let btnInicio = document.getElementById('btnInicio');

function OcultarFormulario(){
    formulario.style.display = 'none';
    tablaDatos.style.display = 'none';
    btnInicio.style.backgroundColor = '#FFADC7';
    btnFormulario.style.backgroundColor = '#FBF7F8';
    mostrarElementosInicio();
}

function mostrarElementosInicio() {
    saludar.style.display = 'block';
}

btnInicio.addEventListener('click', OcultarFormulario);

//Agregar datos a la tabla

let btnGuardar = document.getElementById('buttom-guardar');


function agregarProducto(){
    //capturamos el valor de inputs
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    
    //validamos que si los campos estan vacios no puede guardar
    if (nombre == "" ||apellido == "" ||correo == "" ) {

        alert("Revise los campos Vacios")
        
    } else {
        
        //capturamos la tabla
        let tablaDOM = document.getElementById("tablaArray");
        //detectamos la logitud de la tabla
        let numFila = tablaDOM.rows.length;
        //agregamos el contenido
        tablaDOM.insertRow(numFila).innerHTML = "<td>" + nombre + "</td><td>" + apellido + "</td><td>" + correo + "</td><td><button onclick='eliminarProducto(this)'>Eliminar</button></td>";
    }
}

btnGuardar.addEventListener('click', agregarProducto);

//Eliminar Fila de la tabla
function eliminarProducto(celda){
    //traemos el nodo padre de la celda, en este caso la fila
    let row = celda.parentNode.parentNode;
    //eliminamos la fila
    row.parentNode.removeChild(row);

}

//limpiamos los inputs
$(document).ready(function() {
    $(btnGuardar).click(function() {
      $('input[type="text"]').val('');
    });
  });
