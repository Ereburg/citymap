export default function tabs(tabTogglers, tabContent) {
  tabTogglers.forEach(item => {
    item.addEventListener('click', () => {
      let current_button = item.getAttribute('data-banner')

      tabContent.forEach(el => {
        let current_banner = el.getAttribute('data-banner')

        current_button == current_banner ? el.classList.add('active') : el.classList.remove('active')
      })
    })
  })
}