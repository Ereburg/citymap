export default function concatToNewString(add_city, add_state, add_la, add_lg) {
  let cityValue = add_city.value,
    stateValue = add_state.value,
    latitudeValue = add_la.value,
    longitudeValue = add_lg.value,
    newStringConcat = `${cityValue}, ${stateValue}, ${latitudeValue}, ${longitudeValue};`
  return newStringConcat
}