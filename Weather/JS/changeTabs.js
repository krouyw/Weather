import { CONSTANT } from './constant.js'

export const changetabs = () => {
  CONSTANT.ALL_BUTTON.forEach((item) => {
    item.addEventListener('click', () => {
      let colorBtn = item
      let tabId = colorBtn.getAttribute('data-tab')
      let currentTab = document.querySelector(tabId)

      CONSTANT.ALL_BUTTON.forEach((elem) => {
        elem.classList.remove('active-button')
        elem.classList.add('not-active-button')
      })

      CONSTANT.ALL_BLOCK.forEach((elem) => {
        elem.classList.remove('active-block')
        elem.classList.add('not-active-block')
      })

      colorBtn.classList.remove('not-active-button')
      colorBtn.classList.add('active-button')

      currentTab.classList.remove('not-active-block')
      currentTab.classList.add('active-block')
    })
  })
}
