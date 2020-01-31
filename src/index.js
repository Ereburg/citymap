import 'normalize.css'
import CityMap from '@models/CityMap'
import setLocalStorageString from '@models/setLocalStorageString'
import getLocalStorageKey from '@models/getLocalStorageKey'
import changeLocalStorageString from '@models/changeLocalStorageString'
import updateDate from '@models/updateDate'
import setWhenLastUpdated from '@models/setWhenLastUpdated'
import concatToNewString from '@models/concatToNewString'
import tabs from '@models/tabs'
import printTable from '@models/printTable'
import clearInputValue from '@models/clearInputValue'
import furthestCities from '@models/furthestCities'
import closestCity from '@models/closestCity'
import searchByStates from '@models/searchByStates'
import './babel'
import './styles/scss.scss'


document.addEventListener("DOMContentLoaded", () => {

  // * Входная строка согласно условию задачи
  let defaultString = '"Nashville, TN", 36.17, -86.78; "New York, NY", 40.71, -74.00; "Atlanta, GA", 33.75, -84.39; "Denver, CO", 39.74, -104.98; "Seattle, WA", 47.61, -122.33; "Los Angeles, CA", 34.05, -118.24; "Memphis, TN", 35.15, -90.05;'
  let lastUpdate = 'February 1, 2020 at 00:31'

  // * Ключи, где хранятся данные
  const LOCAL_STORAGE_STRING_KEY = 'String'
  const LOCAL_STORAGE_UPDATE_KEY = 'Updated'

  let IS_STRING_EXISTS = localStorage.getItem(LOCAL_STORAGE_STRING_KEY)
  let IS_UPDATE_EXISTS = localStorage.getItem(LOCAL_STORAGE_UPDATE_KEY)

  IS_STRING_EXISTS ? true : setLocalStorageString(defaultString, LOCAL_STORAGE_STRING_KEY)
  IS_UPDATE_EXISTS ? true : setLocalStorageString(lastUpdate, LOCAL_STORAGE_UPDATE_KEY)

  // * Последнее обновление списка городов
  const lastUpdateElement = document.querySelector('.info__text--updated-date')
  lastUpdateElement.textContent = localStorage.getItem(LOCAL_STORAGE_UPDATE_KEY)

  // * Инициализируем Объект
  let cityMapObject
  // * Список самых географически крайних городов
  const furthestPointsList = document.querySelector('.section__list--points')
  // * Сюда выводим таблицы с городами
  const sectionLatestTable = document.querySelector('.section-table__body--latest')
  const sectionListTable = document.querySelector('.section-table__body--list')
  // * Сюда выводим список всех штатов
  const statesList = document.querySelector('.section__list--states')
  // * Инициализация всех Вкладок
  const bannerButtons = document.querySelectorAll('.btn--toggler')
  const bannerContent = document.querySelectorAll('.banner')
  // * Вкладка Поиска по штатам
  const searchByStatestInput = document.getElementById('search-states')
  const searchByStatestForm = document.querySelector('.section-form--search')
  const searchByStatestList = document.querySelector('.section__list--search-list')
  // * Вкладка Поиска по широте и долготе
  const chechInputLatitude = document.getElementById('check-latitude')
  const chechInputLongitude = document.getElementById('check-longitude')
  const searchByCheckForm = document.querySelector('.section-form--check')
  const searchByCheckList = document.querySelector('.section__list--check-list')
  // * Вкладка Добавления новых элементов
  const addNewCityInput = document.getElementById('add-city')
  const addNewStateInput = document.getElementById('add-state')
  const addNewLatitudeInput = document.getElementById('add-latitude')
  const addNewLongitudeInput = document.getElementById('add-longitude')
  const addNewStringForm = document.querySelector('.section-form--add')


  // * Присваиваем значение объекту и рендерим все функции, которые нужно обновлять при внесении новых значений
  function renderObject(_defStr) {
    cityMapObject = new CityMap({
      string: _defStr,
    })

    furthestCities(cityMapObject, furthestPointsList)
    printTable(cityMapObject, sectionLatestTable, true)
    printTable(cityMapObject, sectionListTable)
    furthestCities(cityMapObject, statesList, true)
  }

  renderObject(getLocalStorageKey(LOCAL_STORAGE_STRING_KEY)) // Отображаем всю информацию при загрузке страницы пользователем

  tabs(bannerButtons, bannerContent) // Инициализация Вкладок

  // Вкладка Поиска по штатам
  searchByStatestForm.addEventListener('submit', e => {
    e.preventDefault()

    searchByStates(searchByStatestInput, searchByStatestList, cityMapObject) // поиск по штатам
    clearInputValue(searchByStatestForm) // очищаем данные полей ввода
  })

  // Вкладка Поиска по широте и долготе
  searchByCheckForm.addEventListener('submit', e => {
    e.preventDefault()

    closestCity(cityMapObject, chechInputLatitude, chechInputLongitude, searchByCheckList) // поиск ближайшего города
    clearInputValue(searchByCheckForm) // очищаем данные полей ввода
  })

  // Вкладка Добавления новых элементов
  addNewStringForm.addEventListener('submit', e => {
    e.preventDefault()

    let newString = concatToNewString(addNewCityInput, addNewStateInput, addNewLatitudeInput, addNewLongitudeInput) // собираем в новую строку

    changeLocalStorageString(newString, LOCAL_STORAGE_STRING_KEY) // меняем нашу переменную в локальном хранилище
    setWhenLastUpdated(LOCAL_STORAGE_UPDATE_KEY, updateDate())    // обновляем дату последних изменений
    renderObject(getLocalStorageKey(LOCAL_STORAGE_STRING_KEY)) // обновляем данные объекта и меняем содержимое страницы
    alert('Successfully added!') // выводим сообщение об успешно внесенных данных
    clearInputValue(addNewStringForm) // очищаем данные полей ввода
  })

})