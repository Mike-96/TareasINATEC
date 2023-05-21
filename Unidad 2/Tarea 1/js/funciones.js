
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

//funcion mostrar formulario
let btnFormulario = document.getElementById('btnFormulario');
let formulario = document.getElementById('formulario');
let saludar = document.getElementById('saludar');

function mostrarFormulario(){
    formulario.style.display = 'block';
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
    btnInicio.style.backgroundColor = '#FFADC7';
    btnFormulario.style.backgroundColor = '#FBF7F8';
    mostrarElementosInicio();
}

function mostrarElementosInicio() {
    saludar.style.display = 'block';
}

btnInicio.addEventListener('click', OcultarFormulario);