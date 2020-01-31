import printTableBody from '@models/printTableBody'

export default function printTable(obj, parent, isLatest = false) {
  let cities_array = obj.cities_array
  let states_array = obj.states_array
  let latitude_array = obj.latitude_array
  let longitude_array = obj.longitude_array
  let i

  for (isLatest ? i = (cities_array.length - 4) : i = 0; i < cities_array.length; i++) {
    printTableBody(cities_array[i], states_array[i], latitude_array[i], longitude_array[i], parent)
  }
}