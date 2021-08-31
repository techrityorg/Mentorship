//const key = '379dae2565c41addb6136328383b5ed0';

/*const getCity = async (city) => {

    const base = 'https://api.openweathermap.org/data/2.5/find';
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

} 

const getWeather = async (id, city ='') => {

    const base = 'https://api.openweathermap.org/data/2.5/find';
    let query = `?q=${id}&appid=${key}`;

    if (city = '') {
        query = `?q=${city}&appid=${key}`;
    }

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];


} */

const key = '379dae2565c41addb6136328383b5ed0';

  const getCity = async (city) => {

    const base = 'https://api.openweathermap.org/data/2.5/find';
    const query = `?q=${city}&appid=${key}&units=metric`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data.list[0];

} 

const cityForm = document.querySelector('form');
  const card = document.querySelector('img.card');
  const details = document.getElementById('details');
  const sunrise = document.getElementById('sunrise');
  const wind = document.getElementById('wind');
  const humidity = document.getElementById('humidity');
  const visibility = document.getElementById('visibility');
  const air = document.getElementById('air');
  const conditions = document.getElementById('conditions');
  const icon = document.querySelector('.icon img');

  const updateUI = (data) => {

    console.log(data);
    const weather = data.cityName;
    
   // const weather = data.weather;
    
    details.innerHTML = `
    <h1><span>${weather.main.temp}</span>
    <span class="deg">&deg;C</span>
    </h1>
    <h3 class="h-1">${weather.weather[0].main}</h3>
    <h5 class="h-2">${weather.name}</h5>
    <h6 class="h-3">${weather.timezone}</h6>
    `;

    sunrise.innerHTML = `
      <span><h6 class="h-4">Sunrise</h6>
          <p class="p-1">${weather.sys.sunrise}</p>
      </span>
  `;

  sunrise.innerHTML = `
      <span><h6 class="h-4">Sunset</h6>
          <p class="p-1">${weather.sys.sunset}</p>
      </span>
  `;

  wind.innerHTML = `
  <h6 class="h-5">Wind status</h6>  
  <p class="p-2">${weather.wind.speed}</p> <span>mph</span>
  `;

  humidity.innerHTML = `
      <h6 class="h-5">Humidity</h6>  
       <p class="p-2">${weather.main.humidity}</p> <span>&par;</span>
  `;

  visibility.innerHTML = `
      <h6 class="h-5">Visibility</h6>  
      <p class="p-2">${weather.visibility}</p> <span>miles</span>
  `;

  air.innerHTML = `
      <h6 class="h-5">Air Pressure</h6>  
      <p class="p-2">${weather.main.pressure}</p> <span>mb</span>
  `;

  //update day or night images
  /*const iconSrc = `img/icons/${weather.weather[0].icon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeImage = null;
  if (weather.weather[0].icon) {
        timeImage = 'img/day.svg';
  } else {
    timeImage = 'img/night.svg';
  }
  card.setAttribute('src', timeImage);*/

   //remove the display none if present
   if (conditions.classList.contains('d-none')) {
       conditions.classList.remove('d-none');
  }

  };

  const updateCity = async (city ) => {
    const cityName = await getCity(city);
    console.log(cityName);
    return { cityName};
  };

  cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  });