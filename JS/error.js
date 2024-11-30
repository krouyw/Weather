const ERROR = {
  FAILED_TO_FETCH: 'Не удалось выполнить запрос, проверьте адрес запроса',
  CITY_NOT_FOUND: 'Такого города не существует',
  FAILED_FOUND: 'Введите город',
  API_KEY_PROBLEM: 'Проверьте АПИ-ключ',
  TOO_MANY_REQUESTS: 'Вы превысили лимит запросов (60 в минуту)',
  PLEASE_CONTACT_DEVELOPERS: 'Свяжитесь с разработчиками',
}

function errorHandle(error, elem) {
  switch (error) {
    case 400:
      alert(ERROR.FAILED_FOUND)
      elem.value = ''
      break
    case 401:
      alert(ERROR.FAILED_TO_FETCH)
      elem.value = ''
      break
    case 404:
      alert(ERROR.CITY_NOT_FOUND)
      elem.value = ''
      break
    case 429:
      alert(ERROR.TOO_MANY_REQUESTS)
      break
    case error.status >= 500:
      alert(ERROR.PLEASE_CONTACT_DEVELOPERS)
      break
  }
}

export { errorHandle }
