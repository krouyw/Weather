import { CONSTANT } from './constant.js'
import { errorHandle } from './error.js'
import { detalisNow, cityNow, forecastNow, activeTown } from './nowTown.js'
import { addTown, deleteTown, lookTown } from './add_delete_look.js'
import { render } from './render.js'
import { getLocalStorage, setLocalStorage } from './localStorage.js'

function search(
  event,
  yes = 'try',
  nameTown = CONSTANT.FRIRST_INPUT.value,
  elem_1,
  elem_2,
  elem_3
) {
  yes === 'try' ? event.preventDefault() : ''
  searchTown(nameTown, elem_1, elem_2, elem_3)
}

async function searchTown(nameTownes, elem_1, elem_2, elem_3) {
  const cityName = nameTownes
  const url = `${CONSTANT.SERVER_URL}?q=${cityName}&appid=${CONSTANT.API_KEY}&units=metric`
  const urlForecast = `${CONSTANT.SERVER_URL_FORECAST}?q=${cityName}&appid=${CONSTANT.API_KEY}&units=metric`

  try {
    const promise = await fetch(url)
    const response = await promise.json()

    const promiseF = await fetch(urlForecast)
    const json = await promiseF.json()

    errorHandle(promise.status, CONSTANT.FRIRST_INPUT)
    cityNow(response.main.temp, response.name, response.weather[0].icon, elem_2)

    detalisNow(
      response.name,
      response.main.temp,
      response.main.feels_like,
      response.weather[0].main,
      response.sys.sunrise,
      response.sys.sunset,
      elem_1,
      response.weather[0].icon
    )

    activeTown(elem_3, response.name)
    render(deleteTown, lookTown, json)

    setLocalStorage('weather', json)

    return (CONSTANT.FRIRST_INPUT.value = '')
  } catch (error) {
    console.log(error.message)
  }
}

export { search }
