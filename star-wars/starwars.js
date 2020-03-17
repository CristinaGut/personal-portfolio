import { films } from '../data/films.js'
import { people } from '../data/people.js'

console.log('Hi! My first JavaScript code.') 

console.log(document.querySelector('.greeting'))

let greetingDiv = document.querySelector('.greeting')

greetingDiv.textContent ="StarWars Cast"

let castList = document.createElement("li")

let counter = 1

people.forEach(person => {
    let nameItem = document.createElement("li")
    nameItem.textContent = person.name
    castList.appendChild(nameItem)
    let personImg = document.createElement("img")
    personImg.src = `http://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    greetingDiv.appendChild(personImg)
    counter++
})

greetingDiv.appendChild(castList)