export default function furthest_points(value, parent) {
  let LI = document.createElement('li')
  let P = document.createElement('p')
  LI.classList.add('section-points__list-item')
  P.textContent = value
  LI.append(P)
  parent.append(LI)
}