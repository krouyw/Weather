function clearImg(variable) {
  while (variable.firstElementChild) {
    variable.firstElementChild.remove()
  }
}

function createImg(src, element, nameClass, tru = 'try') {
  tru === 'try' ? clearImg(element) : ''
  const newImg = document.createElement('img')
  newImg.src = `/images/${src}.png`
  newImg.classList.add(`${nameClass}`)
  element.prepend(newImg)
}

export { createImg }
