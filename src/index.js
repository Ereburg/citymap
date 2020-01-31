import 'normalize.css'
import CityMap from '@models/CityMap'
import changeUpdateDate from '@models/changeUpdateDate'
import printTable from '@models/printTable'
import furthestCities from '@models/furthestCities'
import tabs from '@models/tabs'
import searchByStates from '@models/searchByStates'
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

  // * Таблицы с городами
  const sectionLatestTable = document.querySelector('.section-table__body--latest')
  const sectionListTable = document.querySelector('.section-table__body--list')
  printTable(a, sectionLatestTable, true)
  printTable(a, sectionListTable)

  // * Последнее обновление списка городов
  const updated_date = document.querySelector('.info__text--updated-date')
  changeUpdateDate(updated_date)

  // * Список самых географически крайних городов
  const furthestPointsList = document.querySelector('.section__list--points')
  furthestCities(a, furthestPointsList)

  // * Список всех штатов
  const statesList = document.querySelector('.section__list--states')
  furthestCities(a, statesList, true)

  // * Инициализация всех Вкладок
  const bannerButtons = document.querySelectorAll('.btn--toggler')
  const bannerContent = document.querySelectorAll('.banner')
  tabs(bannerButtons, bannerContent)

  // * Вкладка Поиска по штатам
  const searchByStatestInput = document.getElementById('search-states')
  const searchByStatestForm = document.querySelector('.section-form--search')
  const searchByStatestList = document.querySelector('.section__list--search-list')

  searchByStatestForm.addEventListener('submit', e => {
    e.preventDefault()
    searchByStates(searchByStatestInput, searchByStatestList, a)
  })

  // * Вкладка Поиска по широте и долготе
  const chechInputLatitude = document.getElementById('check-latitude')
  const chechInputLongitude = document.getElementById('check-longitude')
  const searchByCheckForm = document.querySelector('.section-form--check')
  const searchByCheckList = document.querySelector('.section__list--check-list')

  searchByCheckForm.addEventListener('submit', e => {
    e.preventDefault()
    // searchByStates(searchByStatestInput, searchByStatestList, a)
    function closestCity(obj, param1, param2, parent) {
      let cityName = obj.closestCity(param1.value, param2.value)
      parent.append(cityName)
    }
    closestCity(a, chechInputLatitude, chechInputLongitude, searchByCheckList)
  })

})