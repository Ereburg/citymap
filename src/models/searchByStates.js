export default function searchByStates(input, list, obj) {
  let inputValue = input.value
  let array = obj.citiesInState(inputValue)

  const cleansing = () => {
    while (list.firstChild) {
      list.firstChild.remove()
    }
  }

  cleansing()

  array.forEach(item => {
    let LI = document.createElement('li')
    LI.append(item)
    list.append(LI)
  })
}