import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber } from '../util.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const shipView = document.querySelector('#main')

function populateNav(starships) {
    starships.forEach(starship => {
        let shipAnchor = document.createElement('a')
        shipAnchor.href = '#'
        let listenItem = document.createElement('li')
        listenItem.textContent = starship.getLastNumber

        shipAnchor.addEventListener('click', event => {
            //store name of the list item clicked on
        let shipName = event.target.textContent
        const foundShip = starships.find(ship => ship.name === shipName )
        console.log(foundShip)
        populateShipView(foundship)
        })

        shipAnchor.appendChild(listItem)
        navList.appendChild(shipAnchor)

    })
    nav.appendChild(navList)
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let imageNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${imageNum}.jpg`
    shipView.appendChild(shipImage)
}

populateNav(starships) 