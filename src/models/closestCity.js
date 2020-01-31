export default function closestCity(obj, param1, param2, parent) {
  let cityName = obj.closestCity(param1.value, param2.value)
  parent.append(cityName)
}