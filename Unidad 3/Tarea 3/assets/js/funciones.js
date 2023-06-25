const navButton = document.querySelector(".nav_button"); // Seleciona el botón de navegación con la clase "nav_button" y lo guarda en la variable "navButton"
const navMenu = document.querySelector(".nav_container"); // Selecciona el contenedor de navegación con la clase "nav_container" y lo guarda en la variable "navMenu"

const contact = document.querySelector(".Bcontact"); // Selecciona el elemento de contacto con la clase "Bcontact" y lo guarda en la variable "contact"
const product = document.querySelector(".Bproduct"); // Selecciona el elemento de producto con la clase "Bproduct" y lo guarda en la variable "product"
const about = document.querySelector(".Babout"); // Selecciona el elemento de información con la clase "Babout" y lo guarda en la variable "about"

// Añade un evento de clic al botón de navegación
navButton.addEventListener("click", () => {
  const navLogo = document.querySelector(".nav_logo"); // Selecciona el logotipo de navegación con la clase "nav_logo" y lo guarda en la variable "navLogo"

  navMenu.classList.toggle("nav_container--active"); // Alterna la clase "nav_container--active" en el contenedor de navegación

  // Verifica si el contenedor de navegación tiene la clase "nav_container--active"
  if (navMenu.classList.contains("nav_container--active")) {
    navLogo.setAttribute("src", "./assets/img/logo.png"); // Establece la ruta de la imagen del logotipo cuando el menú está activo
    navButton.setAttribute("src", "./assets/icons/close.png"); // Establece la ruta del ícono de cierre cuando el menú está activo
  } else {
    navLogo.setAttribute("src", "./assets/img/logo.png"); // Establece la ruta de la imagen del logotipo cuando el menú no está activo
    navButton.setAttribute("src", "./assets/icons/menu.png"); // Establece la ruta del ícono de menú cuando el menú no está activo
  }
});

contact.addEventListener("click", () => {
  // Lógica similar al evento de clic del botón de navegación, pero aplicada al elemento de contacto
  const navLogo = document.querySelector(".nav_logo");

  navMenu.classList.toggle("nav_container--active");

  if (navMenu.classList.contains("nav_container--active")) {
    navLogo.setAttribute("src", "./assets/img/logo.png");
    navButton.setAttribute("src", "./assets/icons/close.png");
  } else {
    navLogo.setAttribute("src", "./assets/img/logo.png");
    navButton.setAttribute("src", "./assets/icons/menu.png");
  }
});

product.addEventListener("click", () => {
  // Lógica similar al evento de clic del botón de navegación, pero aplicada al elemento de producto
  const navLogo = document.querySelector(".nav_logo");

  navMenu.classList.toggle("nav_container--active");

  if (navMenu.classList.contains("nav_container--active")) {
    navLogo.setAttribute("src", "./assets/img/logo.png");
    navButton.setAttribute("src", "./assets/icons/close.png");
  } else {
    navLogo.setAttribute("src", "./assets/img/logo.png");
    navButton.setAttribute("src", "./assets/icons/menu.png");
  }
});

about.addEventListener("click", () => {
  // Lógica similar al evento de clic del botón de navegación, pero aplicada al elemento de información
  const navLogo = document.querySelector(".nav_logo");

  navMenu.classList.toggle("nav_container--active");

  if (navMenu.classList.contains("nav_container--active")) {
    navLogo.setAttribute("src", "./assets/img/logo.png");
    navButton.setAttribute("src", "./assets/icons/close.png");
  } else {
    navLogo.setAttribute("src", "./assets/img/logo.png");
    navButton.setAttribute("src", "./assets/icons/menu.png");
  }
});

// ***************************************** //

// Objeto para almacenar los Pokémon agregados y su cantidad
let pokemonData = {};

// Función para obtener la cantidad total de Pokémon en el carrito
function calcularTotalPokemons() {
  let totalPokemons = 0;

  for (let pokemonId in pokemonData) {
    totalPokemons += pokemonData[pokemonId].quantity;
  }

  return totalPokemons;
}

// Función para agregar un Pokémon al carrito
function addToCart(event) {
  // Obtener la tarjeta del Pokémon más cercana al botón de "Agregar al carrito" que se ha clicado
  const pokemonCard = event.target.closest(".pokemon-block");

  // Obtener el ID y el nombre del Pokémon desde la tarjeta
  const pokemonId = pokemonCard.querySelector(".number").textContent.slice(1);
  const pokemonName = pokemonCard.querySelector(".name").textContent;

  // Obtener el elemento del precio del Pokémon desde la tarjeta
  const pokemonPriceElement = pokemonCard.querySelector(".price-pokemon");

  // Obtener el precio del Pokémon
  const pokemonPrice = pokemonPriceElement
    ? parseFloat(pokemonPriceElement.textContent.slice(7))
    : 0;

  // Verificar si el Pokémon ya ha sido agregado anteriormente
  if (pokemonData.hasOwnProperty(pokemonId)) {
    // El Pokémon ya está en la tabla, incrementar la cantidad y el precio total
    pokemonData[pokemonId].quantity++;
    pokemonData[pokemonId].totalPrice += pokemonPrice;
  } else {
    // El Pokémon es nuevo, añadirlo al objeto pokemonData
    pokemonData[pokemonId] = {
      name: pokemonName,
      quantity: 1,
      unitPrice: pokemonPrice, // Agregamos la propiedad unitPrice
      totalPrice: pokemonPrice,
    };
  }

  // Añadir el Pokémon a la tabla
  // Capturar la tabla y su cuerpo
  let tablaDOM = document.getElementById("tablaProducto");
  let tablaRef = tablaDOM.getElementsByTagName("tbody")[0];

  // Buscar si el Pokémon ya está en la tabla
  let filaExistente = Array.from(tablaRef.rows).find(
    (fila) => fila.cells[0].innerText === pokemonId
  );

  if (filaExistente) {
    // El Pokémon ya está en la tabla, actualizar los datos
    let cantidad = pokemonData[pokemonId].quantity;
    let precioTotal = pokemonData[pokemonId].totalPrice;
    filaExistente.cells[1].innerText = `${pokemonName} (${cantidad})`;
    filaExistente.cells[2].innerText = "$ " + precioTotal.toFixed(2);
  } else {
    // El Pokémon es nuevo, crear una nueva fila en la tabla
    let nuevaFila = tablaRef.insertRow(tablaRef.rows.length);
    let celdaUno = nuevaFila.insertCell(0);
    let celdaDos = nuevaFila.insertCell(1);
    let celdaTres = nuevaFila.insertCell(2);
    let celdaCuatro = nuevaFila.insertCell(3);

    celdaUno.innerText = pokemonId;
    celdaDos.innerText = `${pokemonName} (1)`;
    celdaTres.innerText = "$ " + pokemonPrice.toFixed(2);
    celdaCuatro.innerHTML = `<span class="delete-icon"><i class="fa fa-window-close" aria-hidden="true"></i></span>`;
    celdaCuatro.onclick = function (event) {
      if (event.target.closest(".delete-icon")) {
        eliminarProducto(this); // Pasamos la celda actual como argumento a la función eliminarProducto
      }
    };
  }

  // Actualizar el precio total
  totalElement.textContent = "$ " + calcularPrecioTotal().toFixed(2);
  actualizarCantidadPokemon();
}

// Función para actualizar la cantidad de Pokémon en el carrito
function actualizarCantidadPokemon() {
  const totalPokemons = calcularTotalPokemons();
  const cantidadPokemonElement = document.getElementById("cantidadPokemon");
  cantidadPokemonElement.textContent = totalPokemons.toString();
}

// Obtén la referencia al elemento <div> donde se mostrará la cantidad de Pokémon
const cantidadPokemonElement = document.getElementById("cantidadPokemon");

// Llama a la función para mostrar la cantidad inicial de Pokémon al cargar la página
actualizarCantidadPokemon();

function eliminarProducto(celda) {
  let fila = celda.parentNode; // Obtenemos directamente la fila (parentNode de la celda)
  let pokemonId = fila.cells[0].innerText;

  // Restar la cantidad y el precio total del Pokémon eliminado
  let cantidadEliminada = pokemonData[pokemonId].quantity;
  let precioEliminado = parseFloat(fila.cells[2].innerText.slice(2));

  pokemonData[pokemonId].quantity -= cantidadEliminada;
  pokemonData[pokemonId].totalPrice -= precioEliminado;

  // Verificar si la cantidad es cero, en ese caso eliminar el Pokémon de pokemonData
  if (pokemonData[pokemonId].quantity === 0) {
    delete pokemonData[pokemonId];
  }

  fila.parentNode.removeChild(fila); // Eliminamos la fila actual

  // Actualizar el precio total
  totalElement.textContent = "$ " + calcularPrecioTotal().toFixed(2);
  actualizarCantidadPokemon();
}

const totalElement = document.getElementById("total");
totalElement.innerText = "$ 0.00";

function calcularPrecioTotal() {
  let total = 0;

  // Recorrer el objeto pokemonData y sumar los precios de cada Pokémon
  for (let pokemonId in pokemonData) {
    total += pokemonData[pokemonId].totalPrice;
  }

  return total;
}

const btnComprar = document.getElementById("botonComprar");

btnComprar.onclick = function () {
  limpiarTabla();
};

function limpiarTabla() {
  const tablaRef = document
    .getElementById("tablaProducto")
    .getElementsByTagName("tbody")[0];
  if (tablaRef.children.length === 0) {
    // No hay productos
    alert("No hay productos");
  } else {
    // Limpiar el tbody
    while (tablaRef.firstChild) {
      tablaRef.removeChild(tablaRef.firstChild);
    }
    totalElement.innerText = "$ 0.00";
    cantidadPokemonElement.innerText = "0"; //reiniciar contador de la bolsa
    pokemonData = {}; // Reiniciar el objeto pokemonData vaciándolo completamente
    alert("Gracias por su compra");
  }
  // Ocultar el carrito
  cart.style.display = "none";
}

const carrito = document.querySelector(".carrito");
const cart = document.getElementById("cart");

carrito.addEventListener("click", function () {
  const computedStyle = window.getComputedStyle(cart);
  if (cart.style.display === "none" || computedStyle.display === "none") {
    cart.style.display = "block"; // Mostrar el carrito
  } else {
    cart.style.display = "none"; // Ocultar el carrito
  }
});
