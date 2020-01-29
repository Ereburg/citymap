export default class CityMap {

  constructor(options) {
    this.string = options.string
      .replace(/['"«»]/g, '') // удаляем все знаки кавычек и пробелы
      .split(';') // разделяем строку по делителю и собираем в массив
      .filter(Boolean) // фильтруем, если в конце стоит ';' , то этот элемент удаляем
      .map(item => ({  // проходимся по каждому элементу массива и преобразуем в объект
        city: item.split(',')[0].trim(),  // первому элементу присваиваем ключ и значение первого элемента массива (была строка, ее разбиваем)
        state: item.split(',')[1].trim(), // по аналогии
        latitude: +item.split(',')[2],
        longitude: +item.split(',')[3],
        distance: 0
      }))
  }

  get northernmost() {
    let NAME = this.string.reduce( // фактически - избавляемся от элементов, которые не удовлетворяют условию
      (previous, current) => // итерируем каждый элемент
        previous.latitude > current.latitude ?  // условие, если предыдущий элемент больше текущего
          previous : current // то оставляем предыдущий, если нет, присваиваем максимальное значение - текущему
    ).city || 'Undefined by the moment' // выводим ключ Город текущего элемента

    return `The northernmost city is ${NAME}.`
  }

  get southernmost() {
    let NAME = this.string.reduce(
      (previous, current) =>
        previous.latitude < current.latitude ?
          previous : current
    ).city || 'Undefined by the moment'

    return `The southernmost city is ${NAME}.`
  }

  get easternmost() {
    let NAME = this.string.reduce(
      (previous, current) =>
        previous.longitude > current.longitude ?
          previous : current
    ).city || 'Undefined by the moment'

    return `The easternmost city is ${NAME}.`
  }

  get westernmost() {
    let NAME = this.string.reduce(
      (previous, current) =>
        previous.longitude < current.longitude ?
          previous : current
    ).city || 'Undefined by the moment'

    return `The westernmost city is ${NAME}.`
  }

  get states() {
    let states_arr = [] // инициализируем пустой массив
    this.string.forEach(item => states_arr.push(item.state)) // записываем в него все штаты 
    states_arr = [...new Set(states_arr)].join(' ') // убираем дубликаты и склеиваем в строку
    return states_arr
  }

  get cities_array() {
    let array = [] // инициализируем пустой массив
    this.string.forEach(item => array.push(item.city)) // записываем в него все штаты
    return array
  }

  get states_array() {
    let array = [] // инициализируем пустой массив
    this.string.forEach(item => array.push(item.state)) // записываем в него все штаты 
    return array
  }

  get latitude_array() {
    let array = [] // инициализируем пустой массив
    this.string.forEach(item => array.push(item.latitude)) // записываем в него все штаты 
    return array
  }

  get longitude_array() {
    let array = [] // инициализируем пустой массив
    this.string.forEach(item => array.push(item.longitude)) // записываем в него все штаты 
    return array
  }

  citiesInState(state_name) {
    let state_cities = [] // инициализируем пустой массив
    this.string.filter(item => (item.state === state_name) ? state_cities.push(item.city) : false) // если текущий элемент имеет совпадение с ключом по штату, то передаем его город в массив
    return state_cities
  }

  closestCity(la, lg) {
    this.string
      .forEach(el => {
        let el_la = el.latitude
        let el_lg = el.longitude
        let la_dist, lg_dist

        (el_la >= 0 && la < 0) ?
          la_dist = (Math.round(Math.abs(el_la + Math.abs(la)) * 100) / 100) :
          la_dist = (Math.round(Math.abs(el_la - la) * 100) / 100);

        (el_lg >= 0 && lg < 0) ?
          lg_dist = (Math.round(Math.abs(el_lg + Math.abs(lg)) * 100) / 100) :
          lg_dist = (Math.round(Math.abs(el_lg - lg) * 100) / 100)

        el.distance = (Math.round((la_dist + lg_dist) * 100) / 100)
      })

    let closest_city = this.string
      .reduce(
        (previous, current) =>
          previous.distance < current.distance ?
            previous : current
      ).city

    return `The most closest city to entered coordinates is ${closest_city}`
  }
}
