import { getLocalStorage, setLocalStorage } from './localStorage.js'
import { CONSTANT } from './constant.js'
import { createImg } from './createImg.js'
import { render } from './render.js'
import { search } from './search.js'

let cityNowStorage
let optionsNowStorage
let active

function addTown() {
  const town = CONSTANT.CITY_NAME.textContent
  const townSet = new Set(getLocalStorage('town'))
  townSet.add(town)

  const arrayTown = Array.from(townSet)
  setLocalStorage('town', arrayTown)

  const json = getLocalStorage('weather')
  render(deleteTown, lookTown, json)

  CONSTANT.BUTTTON_HEART_ALL.forEach((item) => {
    createImg('use-heart', item, 'imges')
    setTimeout(() => createImg('heart', item, 'imges'), 300)
  })
}

function deleteTown(event, name) {
  name =
    event.target.parentNode.parentNode.querySelector(
      '.locationTown'
    ).textContent

  const townSet = new Set(getLocalStorage('town'))
  townSet.delete(name)

  const arrayTown = Array.from(townSet)
  setLocalStorage('town', arrayTown)

  const json = getLocalStorage('weather')
  render(deleteTown, lookTown, json)
}

function lookTown(event) {
  const nameCity =
    event.target.parentNode.querySelector('.locationTown').textContent
  search(null, 'false', nameCity, optionsNowStorage, cityNowStorage, active)
}

export { addTown, deleteTown, lookTown }
