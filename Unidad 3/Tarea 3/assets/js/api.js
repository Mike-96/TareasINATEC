const pokemonContainer = document.querySelector(".pokemons");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let offset = 1;
let limit = 15;

//funcion regresar a los pokemons anterirores
previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 16;
    removeChildNodes(pokemonContainer);
    getPokemons(offset, limit);
  }
});

//funcion mostrar mas pokemons
next.addEventListener("click", () => {
  offset += 16;
  removeChildNodes(pokemonContainer);
  getPokemons(offset, limit);
});

// conectamos con la api
function getPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

//mandamos a traer x cantidad de pokemons en orden
function getPokemons(offset, limit) {
  const pokemonIds = Array.from(
    { length: limit },
    (_, index) => offset + index
  );
  pokemonIds.forEach((id) => {
    getPokemon(id);
  });
}

//llenamos el contenedor de pokemons
function createPokemon(pokemon) {
  //pokemons
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  //numero de pokemon
  const number = document.createElement("p");
  number.classList.add("number");
  number.textContent = `#${pokemon.id.toString().padStart(4, 0)}`;

  //nombre del pokemon
  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(number);
  card.appendChild(name);

  //imagen del pokemon
  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  card.appendChild(spriteContainer);

  //habilidades
  const cardHabilities = document.createElement("div");
  cardHabilities.classList.add("pokemon-block-habilities");
  // Verificar si el tipo es un solo tipo o una matriz de tipos
  //nombre de las habilidades
  if (Array.isArray(pokemon.types)) {
    const types = pokemon.types.map((type) => type.type.name).join(", ");
    cardHabilities.textContent = types;
  } else {
    cardHabilities.textContent = pokemon.types.type.name;
  }
  // valor de las habilidades
  cardHabilities.appendChild(progressBars(pokemon.stats));

  card.appendChild(cardHabilities);

  //icono carrito de compra
  // Crear un elemento div que contendrá el icono del carrito de compra
  const cardButton = document.createElement("div");
  cardButton.classList.add("button-container");

  // Crear un elemento de imagen para el icono del carrito de compra
  const addCart = document.createElement("img");
  addCart.classList.add("add-cart");
  addCart.setAttribute("src", "./assets/icons/carrito.png");

  // Agregar el evento de clic al botón del carrito de compra
  cardButton.addEventListener("click", addToCart);

  // Añadir la imagen del carrito de compra al elemento cardButton
  cardButton.appendChild(addCart);

  // Añadir el elemento cardButton al elemento card que representa al Pokémon
  card.appendChild(cardButton);

  //mandando los datos al contenedor
  pokemonContainer.appendChild(card);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    // Contenedor de cada estadística
    const statContainer = document.createElement("div");
    statContainer.classList.add("stat-container");

    // Nombre de la estadística
    const statName = document.createElement("div");
    statName.classList.add("nameStat");
    statName.textContent = "* " + stat.stat.name;

    // Contenedor que almacena la barra de progreso
    const progress = document.createElement("div");
    progress.classList.add("progress");

    // Barra de progreso de la estadística
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.textContent = stat.base_stat + "%";

    // Asignar colores y bordes a la barra de progreso
    const statValue = parseInt(stat.base_stat);
    progressBar.style.backgroundColor = "rgb(90, 189, 94)";
    progressBar.style.width = statValue + "%";
    progressBar.style.borderRadius = "3px";

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);
    statsContainer.appendChild(statContainer);
  }

  // Calcular el promedio de las estadísticas
  const totalStats = stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const averageStat = totalStats / stats.length;

  // Mostrar el promedio de las estadísticas
  const Price = document.createElement("p");
  Price.classList.add("price-pokemon");
  Price.textContent = `Price: ${Math.round(averageStat)}$`;
  Price.style.marginTop = "10px";
  statsContainer.appendChild(Price);

  return statsContainer;
}

//removemos los pokemons para la paginacion
//se realiza un bucle que checke, mientras el contenedor(parent) tenga un elemento vamos a quitar ese elemento

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//mandamos a llamar funcion que nos traera los pokemons
getPokemons(offset, limit);
