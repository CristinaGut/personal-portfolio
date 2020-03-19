import { starships } from '../data/starships.js'
import { removeChildren } from '../util.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const shipView = document.querySelector('#main')

function populateNav(starships) {
    starships.forEach(starship => {
        let shipAnchor = document.createElement('a')
        shipAnchor.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        shipAnchor.addEventListener('click', event => {
            let shipName = event.target.textContent
            populateShipView(foundShip)
        })

        shipAnchor.appendChild(listItem)
        navList.appendChild(shipAnchor)

    })
    nav.appendChild(navList)
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipTitle = document.createElement('h1')
    shipTitle.textContent = Data
    shipView.appendChild(shipTitle)


   /*  let imageNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `http://starwars-visualguide.com/assets/img/characters/${imageNum}.jpg`
    shipView.appendChild(shipImage) */
}

populateNav(starships)