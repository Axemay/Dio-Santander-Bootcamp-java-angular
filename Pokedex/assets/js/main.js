const pokemonList = document.getElementById('pokemon-list');
const loadMoreButton = document.getElementById('loadMore');
const limit = 10;
let offset = 0;
const maxRecords = 150;

function createElementList(pokemon){
    
     return `
     
     <li class="pokemon-list-item ${pokemon.type}">
     <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}            
            </ol>
            <img class="pokemon-list-item-image" src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    <div class="xp-abilities">   
        <p class="xp-text">XP</p>
        <p class="xp-text">${pokemon.experience}</p>

        <ol class="abilities">
            ${pokemon.abilities.map((type) => `<span class="material-symbols-outlined">
            swords
            </span><li class="type ${pokemon.ability}">${type}</li>`).join('')}            
        </ol>
    </div>
    
    
    </li>`
    
}

function loadPokemonItens(offset, limit){
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    // A função map substitui um for criando uma nova lista. 
        const newPokemonList = pokemons.map((pokemon) => createElementList(pokemon)).join('');
        pokemonList.innerHTML += newPokemonList;

    })
}
loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    
    offset += limit
    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords){
        const newlimit = maxRecords - offset;
        loadPokemonItens(offset, newlimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }

})

