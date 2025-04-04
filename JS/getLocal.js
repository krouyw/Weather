import { getLocalStorage } from './localStorage.js'
import { search } from './search.js'

function getStorage(name, tru = 'try', town = 'Moscow') {
	if (getLocalStorage(name)) {
		return getLocalStorage(name)
	} else {
		tru === 'try' ? search(null, 'false', town) : { city: name }
	}
}

export { getStorage }
