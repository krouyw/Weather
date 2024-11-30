const changeImg = (img, functions, element, nameClass, yes = 'try') => {
  switch (img) {
    case '01d':
      functions('01d', element, nameClass, yes)
      break
    case '02d':
      functions('02d', element, nameClass, yes)
      break
    case '03d':
      functions('03d', element, nameClass, yes)
      break
    case '04d':
      functions('04d', element, nameClass, yes)
      break
    case '09d':
      functions('09d', element, nameClass, yes)
      break
    case '10d':
      functions('10d', element, nameClass, yes)
      break
    case '11d':
      functions('11d', element, nameClass, yes)
      break
    case '13d':
      functions('13d', element, nameClass, yes)
      break
    case '50d':
      functions('50d', element, nameClass, yes)
      break
    case '01n':
      functions('01d', element, nameClass, yes)
      break
    case '02n':
      functions('02d', element, nameClass, yes)
      break
    case '03n':
      functions('03d', element, nameClass, yes)
      break
    case '04n':
      functions('04d', element, nameClass, yes)
      break
    case '09n':
      functions('09d', element, nameClass, yes)
      break
    case '10n':
      functions('10d', element, nameClass, yes)
      break
    case '11n':
      functions('11d', element, nameClass, yes)
      break
    case '13n':
      functions('13d', element, nameClass, yes)
      break
    case '50n':
      functions('50d', element, nameClass, yes)
      break
    default:
      functions('01d', element, nameClass, yes)
  }
}

export { changeImg }
