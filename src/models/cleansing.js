export default function cleansing(_param) {
  while (_param.firstChild) {
    _param.firstChild.remove()
  }
}