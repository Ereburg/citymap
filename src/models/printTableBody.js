export default function printTableBody(add_city, add_atates, add_latitude, add_longitude, add_parent) {
  let ROW = document.createElement('tr')
  let TD_CITY = document.createElement('td')
  let TD_STATE = document.createElement('td')
  let TD_LATITUDE = document.createElement('td')
  let TD_LONGITUDE = document.createElement('td')

  ROW.classList.add('section-latest__table-row')
  TD_CITY.textContent = `${add_city}`
  TD_STATE.textContent = `${add_atates}`
  TD_LATITUDE.textContent = `${add_latitude}`
  TD_LONGITUDE.textContent = `${add_longitude}`

  ROW.append(TD_CITY)
  ROW.append(TD_STATE)
  ROW.append(TD_LATITUDE)
  ROW.append(TD_LONGITUDE)

  add_parent.append(ROW)
}