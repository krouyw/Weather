import { CONSTANT } from './constant.js'
import { getData, getTime } from './data.js'
import { detalisNow, cityNow, forecastNow, activeTown } from './nowTown.js'
import { getLocalStorage, setLocalStorage } from './localStorage.js'
import { createImg } from './createImg.js'

function clearTown() {
  while (CONSTANT.BLOCK_TOWN.firstElementChild) {
    CONSTANT.BLOCK_TOWN.removeChild(CONSTANT.BLOCK_TOWN.firstElementChild)
  }
}

function createImges(where) {
  const img = document.createElement('img')
  const newDives = document.createElement('div')
  const text = where.querySelector('.locationTown')

  img.classList.add('imgTown')
  img.src = '/images/next.png'

  text.classList.add('activeTown')

  newDives.classList.add('img_town')
  newDives.prepend(img)
  newDives.append(text)
  return where.prepend(newDives)
}

function render(deleteF, lookF, object) {
  clearTown()
  if (getLocalStorage('town')) {
    for (let i = 0; i < getLocalStorage('town').length; i++) {
      const town = getLocalStorage('town')[i]
      const newDiv = document.createElement('div')
      newDiv.classList.add('saveTown')

      const text = document.createElement('h1')
      text.classList.add('locationTown')
      text.textContent = town

      const div_delete = document.createElement('div')
      div_delete.classList.add('deleteBlock')

      const button = document.createElement('button')
      button.classList.add('delete')
      button.type = 'submit'
      button.textContent = '×'

      div_delete.append(button)
      newDiv.prepend(text)
      newDiv.append(div_delete)

      newDiv.querySelector('.deleteBlock').addEventListener('click', deleteF)
      newDiv.querySelector('.locationTown').addEventListener('click', lookF)
      CONSTANT.BLOCK_TOWN.append(newDiv)

      if (town === getLocalStorage('active').town) {
        newDiv.classList.add('actives-block-town')
        createImges(newDiv)
      } else {
        newDiv.classList.remove('actives-block-town')
      }
    }
  }

  for (let i = 0; i < object.list.length; i++)
    forecastNow(
      object.city.name,
      getData(object.list[i].dt_txt),
      getTime(object.list[i].dt_txt),
      Math.round(object.list[i].main.temp),
      Math.round(object.list[i].main.feels_like),
      object.list[i].weather[0].main,
      object.list[i].weather[0].icon
    )
}

export { render }
