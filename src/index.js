import 'normalize.css'
import CityMap from '@models/CityMap'
import latestAdded from '@models/latestAdded'
import last_updated from '@models/last_updated'
import addListItem from '@models/addListItem'
import './babel'
import './styles/scss.scss'


document.addEventListener("DOMContentLoaded", () => {

  let str = '"Nashville, TN", 36.17, -86.78; "New York, NY", 40.71, -74.00; "Atlanta, GA", 33.75, -84.39; "Denver, CO", 39.74, -104.98; "Seattle, WA", 47.61, -122.33; "Los Angeles, CA", 34.05, -118.24; "Memphis, TN", 35.15, -90.05;'

  // str = str + '"Москва, МО", 66.17, 86.78; "Минск, Минск", 60.71, 84.00;'

  const a = new CityMap({
    string: str,
  })

  // console.log(a.closestCity(35.05, -104.39));
  // console.log(a.closestCity(35.05, -84.39));
  // console.log(a.closestCity(-85.05, -134.39));


  // Таблицы с городами
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


  // Последнее обновление списка городов
  const updated_date = document.querySelector('.info__text--updated-date')
  last_updated(updated_date)

  // Список самых географически крайних городов
  const furthest_points_list = document.querySelector('.section__list--points')
  const furthest_points_arr = [a.northernmost, a.easternmost, a.southernmost, a.westernmost]

  for (let i = 0; i < furthest_points_arr.length; i++) {
    addListItem(furthest_points_arr[i], furthest_points_list)
  }

  // Список всех штатов
  const states_list = document.querySelector('.section__list--states')
  const states_arr = a.all_states_array

  for (let i = 0; i < states_arr.length; i++) {
    addListItem(states_arr[i], states_list)
  }

  // Вкладки
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

  // Вкладка Поиска
  const searchByStatestInput = document.getElementById('search-states')
  const searchByStatestForm = document.querySelector('.search-form')
  const searchByStatestList = document.querySelector('.section__list--search-list')

  function searchByStates(input, list) {
    let inputValue = input.value
    let сitiesArray = a.citiesInState(inputValue)

    const cleansing = () => {
      while (list.firstChild) {
        list.firstChild.remove()
      }
    }

    cleansing()

    сitiesArray.forEach(item => {
      let LI = document.createElement('li')
      LI.append(item)
      list.append(LI)
    })
  }

  searchByStatestForm.addEventListener('submit', e => {
    e.preventDefault()
    searchByStates(searchByStatestInput, searchByStatestList)
  })

})