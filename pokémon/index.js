
let pokeContainer = document.querySelector('.pokeContainer')

function getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            pokeContainer.textContent = pokemon.name;
            console.log(pokemon.results)
            populatePokeCards(pokemon.results)
        })
    })
}

getPokeData('https://pokeapi.co/api/v2/pokemon')
// https://pokeapi.co/api/v2/pokemon/1/

function populatePokeCards(pokeArray) {
    pokeArray.forEach((pokemon) => {

        let pokeCard = document.createElement('div')
        pokeCard.className = 'card'
        let pokeContent = document.createElement('div')
        pokeContent.className = 'content'
        let pokeFront = document.createElement('div')
        pokeFront.className = 'front'
        pokeFront.textContent = "front"
        let pokeBack = document.createElement('div')
        pokeBack.className = 'back'
        pokeBack.textContent = "back.."

        pokeContent.appendChild(pokeFront)
        pokeContent.appendChild(pokeBack)
        pokeCard.appendChild(pokeContent)
        pokeContainer.appendChild(pokeCard)
    })
}



/* div class="card">
  <div class="content">
    <div class="front">
      Front
    </div>
    <div class="back"></div> */