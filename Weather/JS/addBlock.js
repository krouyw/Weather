import { createImg } from './createImg.js'
import { changeImg } from './switch_img.js'
import { CONSTANT } from './constant.js'

let flag = 0
function addBlock(
  days,
  time,
  temp,
  weathers,
  feeltemp,
  imges,
  parentElem = CONSTANT.WEATHER_BLOCK_FORECAST
) {
  flag++

  if (flag > 40) {
    while (parentElem.firstElementChild) {
      parentElem.removeChild(parentElem.firstElementChild)
    }
    flag = 1
  }

  if (flag === 40) {
    parentElem.removeChild(parentElem.firstElementChild)
  }

  const newDiv = document.createElement('div')
  newDiv.classList.add('blockes')

  const firstChildDiv = document.createElement('div')
  firstChildDiv.classList.add('underFirstBlock')

  const secondChildDiv = document.createElement('div')
  secondChildDiv.classList.add('underSecondBlock')

  const thirdChildDiv = document.createElement('div')
  thirdChildDiv.classList.add('underThirdBlock')

  const day = document.createElement('h1')
  day.classList.add('underDay')
  day.textContent = `${days}`

  const hours = document.createElement('h1')
  hours.classList.add('underDay')
  hours.textContent = `${time}`

  const temperature = document.createElement('h1')
  temperature.classList.add('undertext')
  temperature.textContent = `Temperature: ${temp}°`

  const weather = document.createElement('h1')
  weather.classList.add('undertext')
  weather.textContent = `${weathers}`

  const feelsTemp = document.createElement('h1')
  feelsTemp.classList.add('undertext')
  feelsTemp.textContent = `Feels like: ${feeltemp}°`

  const imgDiv = document.createElement('div')
  imgDiv.classList.add('img_Weahter_Block')

  changeImg(imges, createImg, imgDiv, 'imgWeather', 'false')

  firstChildDiv.prepend(day)
  firstChildDiv.append(hours)

  secondChildDiv.prepend(temperature)
  secondChildDiv.append(weather)

  thirdChildDiv.prepend(feelsTemp)
  thirdChildDiv.append(imgDiv)

  newDiv.prepend(firstChildDiv)
  newDiv.append(secondChildDiv)
  newDiv.append(thirdChildDiv)

  parentElem.append(newDiv)
}

export { addBlock }
