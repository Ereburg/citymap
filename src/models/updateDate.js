export default function updateDate() {
  let result
  let current_date = new Date
  let year = current_date.getFullYear()
  let month = current_date.getMonth()
  let date = current_date.getDate()
  let hours = current_date.getHours()
  let minutes = current_date.getMinutes()

  const months_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  month = months_arr[month]
  minutes < 10 ? minutes = `0${minutes}` : minutes
  result = `${month} ${date}, ${year} ${hours}:${minutes}`
  return result
}