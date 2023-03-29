import { search } from './search.js'
import { getLocalStorage, setLocalStorage } from './localStorage.js'

function getStorage(name, tru = 'try', town = 'Moscow') {
  if (getLocalStorage(name)) {
    return getLocalStorage(name)
  } else {
    tru === 'try' ? search(null, 'false', town) : { city: name }
  }
}

export { getStorage }
