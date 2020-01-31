export default function clearInputValue(parent) {
  let input = parent.querySelectorAll('input')
  input.forEach(item => {
    item.value = ''
  })
}