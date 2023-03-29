import { changetabs } from './changeTabs.js'
import { CONSTANT } from './constant.js'
import { render } from './render.js'
import { search } from './search.js'
import { addTown, deleteTown, lookTown } from './add_delete_look.js'
import { detalisNow, cityNow, forecastNow, activeTown } from './nowTown.js'
import { getStorage } from './getLocal.js'
import { getLocalStorage, setLocalStorage } from './localStorage.js'

let cityNowStorage = getStorage('cityNow')
let optionsNowStorage = getStorage('options')
let active = getStorage('active', 'false')

if (!getLocalStorage('town')) {
  setLocalStorage('town', [])
}

CONSTANT.BUTTTON_SEARCH.addEventListener(
  'click',
  search,
  null,
  'false',
  optionsNowStorage,
  cityNowStorage,
  active
)

CONSTANT.BUTTTON_HEART_ALL.forEach((item) => {
  item.addEventListener('click', addTown)
})

changetabs()

const json = getLocalStorage('weather')
render(deleteTown, lookTown, json)

cityNow(
  cityNowStorage.temp,
  cityNowStorage.nameCity,
  cityNowStorage.img,
  cityNowStorage
)

detalisNow(
  optionsNowStorage.city,
  optionsNowStorage.temp,
  optionsNowStorage.feelsTemp,
  optionsNowStorage.weather,
  optionsNowStorage.sunrise,
  optionsNowStorage.sunset,
  optionsNowStorage,
  optionsNowStorage.img
)

activeTown(active, active.town)
