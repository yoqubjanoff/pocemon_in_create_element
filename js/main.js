var elListPok = document.querySelector(".pokemons-list")

for (var i of pokemons) {

    var itemsPokemon = document.createElement("li");   
    var namePokemon = document.createElement("h3");
    var numPokemon = document.createElement("span");
    var imgPokemon = document.createElement("img");
    var typePokemon = document.createElement("span");
    var timePokemon = document.createElement("time");
    itemsPokemon.classList.add("pokemon-items")
    timePokemon.classList.add("time")
    numPokemon.classList.add("number")
    imgPokemon.classList.add("img-item")

    namePokemon.textContent = i.name;
    numPokemon.textContent = i.num;
    imgPokemon.src = i.img;
    typePokemon.textContent = i.type;
    timePokemon.textContent = i.spawn_time;
    
    itemsPokemon.appendChild(namePokemon);
    itemsPokemon.appendChild(numPokemon);
    itemsPokemon.appendChild(imgPokemon);
    itemsPokemon.appendChild(typePokemon);
    itemsPokemon.appendChild(timePokemon);
    elListPok.appendChild(itemsPokemon);
}