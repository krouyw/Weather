import { CONSTANT } from './constant.js'
import { formatedTimes } from './formateTime.js'
import { changeImg } from './switch_img.js'
import { createImg } from './createImg.js'
import { addBlock } from './addBlock.js'
import { getLocalStorage, setLocalStorage } from './localStorage.js'

function temperature(temp) {
  if (temp >= 0) {
    deleteImg()
    return createImg(
      'hot',
      CONSTANT.TEMP_IMG,
      'imgSunrise_sunset-temp',
      'false'
    )
  } else {
    deleteImg()
    return createImg(
      'cold',
      CONSTANT.TEMP_IMG,
      'imgSunrise_sunset-temp',
      'false'
    )
  }
}

function deleteImg(parent = CONSTANT.TEMP_IMG) {
  const img = parent.querySelector('.imgSunrise_sunset-temp')
  parent.removeChild(img)
}

function detalisNow(
  city,
  temp,
  feelsTemp,
  weather,
  sunrise,
  sunset,
  elem,
  img
) {
  CONSTANT.CITY_NAME_TWO.textContent = city
  CONSTANT.TEMP.textContent = `Temperature: ${Math.round(temp)}°`
  CONSTANT.FEELS_TEMP.textContent = `Feels like: ${Math.round(feelsTemp)}°`
  CONSTANT.WEATHER.textContent = `Weather: ${weather}`
  CONSTANT.SUNRISE.textContent = `Sunrise: ${formatedTimes(sunrise)}`
  CONSTANT.SUNSET.textContent = `Sunset: ${formatedTimes(sunset)}`
  changeImg(img, createImg, CONSTANT.DIV_IMAGES_TWO, 'imgSunrise_sunset')
  temperature(Math.round(temp))

  elem = { city, temp, feelsTemp, weather, sunrise, sunset, img }
  setLocalStorage('options', elem)
}

function cityNow(temp, nameCity, img, elem) {
  CONSTANT.CITY_NAME.textContent = nameCity
  CONSTANT.TEMPERATURE.textContent = `${Math.round(temp)}°`
  changeImg(img, createImg, CONSTANT.DIV_IMAGES, 'cloud')

  elem = { temp, nameCity, img }
  setLocalStorage('cityNow', elem)
}

function forecastNow(city, day, time, temp, feelsTemp, weather, img) {
  CONSTANT.CITY_NAME_THREE.textContent = city
  addBlock(day, time, temp, weather, feelsTemp, img)
}

function activeTown(elem, town) {
  elem = { town }
  setLocalStorage('active', elem)
}

export { detalisNow, cityNow, forecastNow, activeTown }
