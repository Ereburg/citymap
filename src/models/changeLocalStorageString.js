export default function changeLocalStorageString(addNewStr, key) {
  let getDefault = localStorage.getItem(key)
  let appex = addNewStr
  let updateDefault = getDefault + appex
  let resultString = localStorage.setItem(key, updateDefault)
  return resultString
}