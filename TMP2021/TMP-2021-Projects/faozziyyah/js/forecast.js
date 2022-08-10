
const key = '379dae2565c41addb6136328383b5ed0';

const getCity = async (city) => {

  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${key}&units=metric`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;

} 

const cityForm = document.querySelector('form');
const details = document.getElementById('details');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const description = document.getElementById('description');
const air = document.getElementById('air');
const conditions = document.getElementById('conditions');
const weatherIcon = document.querySelector('.icon img');

const updateUI = (data) => {

  console.log(data);
  const weather = data.cityName;
  
  const {icon} = weather.weather[0];
  const {name} = weather;
  let locationIcon = document.getElementById('weatherIcon');
  
  locationIcon.src = "https://openweathermap.org/img/wn/" + icon +".png";

  //let card = document.getElementById('card');
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  
  details.innerHTML = `
  <h1><span>${weather.main.temp}</span>
  <span class="deg">&deg;C</span>
  </h1>
  <h3 class="h-1">${weather.weather[0].main}</h3>
  <h5 class="h-2">${name}</h5>
  `;

  sunrise.innerHTML = `
    <span><h6 class="h-4">Sunrise</h6>
        <p class="p-1">${new Date(parseInt (weather.sys.sunrise, 10) * 1000).toGMTString()}</p>
    </span>
`;

sunset.innerHTML = `
    <span><h6 class="h-4">Sunset</h6>
    <p class="p-1">${new Date(parseInt (weather.sys.sunset, 10) * 1000).toGMTString()}</p>
    </span>
`;

wind.innerHTML = `
<h6 class="h-5">Wind status</h6>  
<p class="p-2">${weather.wind.speed}</p> <span>mph</span>
`;

humidity.innerHTML = `
    <h6 class="h-5">Humidity</h6>  
     <p class="p-2">${weather.main.humidity}</p> <span>%</span>
`;

visibility.innerHTML = `
    <h6 class="h-5">Description</h6>  
    <p class="p-2">${weather.weather[0].description}</p><span>Currently</span>
`;

description.innerHTML = ` 
    <p class="p-2">${weather.weather[0].description}</p>
`;

air.innerHTML = `
    <h6 class="h-5">Air Pressure</h6>  
    <p class="p-2">${weather.main.pressure}</p> <span>mb</span>
`;

 //remove the display none if present
 if (conditions.classList.contains('d-none')) {
     conditions.classList.remove('d-none');
}

};

const updateCity = async (city ) => {
  const cityName = await getCity(city);
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