export default function addListItem(value, parent) {
  let LI = document.createElement('li')
  let P = document.createElement('p')
  LI.classList.add('section-list__item')
  P.textContent = value
  LI.append(P)
  parent.append(LI)
}