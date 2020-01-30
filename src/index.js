import 'normalize.css'
import CityMap from '@models/CityMap'
import latestAdded from '@models/latestAdded'
import last_updated from '@models/last_updated'
import furthest_points from '@models/furthest_points'
import './babel'
import './styles/scss.scss'


document.addEventListener("DOMContentLoaded", () => {

  let str = '"Nashville, TN", 36.17, -86.78; "New York, NY", 40.71, -74.00; "Atlanta, GA", 33.75, -84.39; "Denver, CO", 39.74, -104.98; "Seattle, WA", 47.61, -122.33; "Los Angeles, CA", 34.05, -118.24; "Memphis, TN", 35.15, -90.05;'

  // str = str + '"Москва, МО", 66.17, 86.78; "Минск, Минск", 60.71, 84.00;'

  console.log(str)

  const a = new CityMap({
    string: str,
  })

  console.log(a.string)

  // console.log(a.northernmost)
  // console.log(a.southernmost)
  // console.log(a.westernmost)
  // console.log(a.easternmost)

  // console.log(a.closestCity(35.05, -104.39));
  // console.log(a.closestCity(35.05, -84.39));
  // console.log(a.closestCity(-85.05, -134.39));

  console.log(a.states)
  console.log(a.cities_array)

  console.log(a.citiesInState('TN'))
  console.log(a.citiesInState('CA'))


  let cities_array = a.cities_array
  let states_array = a.states_array
  let latitude_array = a.latitude_array
  let longitude_array = a.longitude_array
  const latest_added = document.querySelector('.section-table__body--latest')
  const sectionListTable = document.querySelector('.section-table__body--list')

  for (let i = (cities_array.length - 4); i < cities_array.length; i++) {
    latestAdded(cities_array[i], states_array[i], latitude_array[i], longitude_array[i], latest_added)
  }

  for (let i = 0; i < cities_array.length; i++) {
    latestAdded(cities_array[i], states_array[i], latitude_array[i], longitude_array[i], sectionListTable)
  }


  const updated_date = document.querySelector('.info__text--updated-date')
  last_updated(updated_date)

  const furthest_points_list = document.querySelector('.section-points__list')
  const furthest_points_arr = [a.northernmost, a.easternmost, a.southernmost, a.westernmost]

  for (let i = 0; i < furthest_points_arr.length; i++) {
    furthest_points(furthest_points_arr[i], furthest_points_list)
  }

  const bannerButtons = document.querySelectorAll('.btn--toggler')
  const bannerContent = document.querySelectorAll('.banner')

  bannerButtons.forEach(item => {
    item.addEventListener('click', () => {
      let current_button = item.getAttribute('data-banner')

      bannerContent.forEach(el => {
        let current_banner = el.getAttribute('data-banner')
       
        current_button == current_banner ? el.classList.add('active') : el.classList.remove('active')
      })
    })
  })
})