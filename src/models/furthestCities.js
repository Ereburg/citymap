import addListItem from '@models/addListItem'
import cleansing from '@models/cleansing'

export default function furthestCities(obj, parent, isStates = false) {
  let arr

  isStates ? arr = obj.all_states_array : arr = [obj.northernmost, obj.easternmost, obj.southernmost, obj.westernmost] 

  parent ? cleansing(parent) : false

  for (let i = 0; i < arr.length; i++) {
    addListItem(arr[i], parent)
  }
}