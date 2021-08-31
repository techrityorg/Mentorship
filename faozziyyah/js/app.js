// 379dae2565c41addb6136328383b5ed0

/*fetch('https://api.openweathermap.org/data/2.5/weather?q=Abuja&units=metric&appid=5ee5730275c2be88687659f263c66764')
  .then(function(response) {
    // Successful response :)
    console.log(response.json());
  })
  .catch(function(err) {
    // Error :(
  }); */


  
//toggle dark mode

/*
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme",  "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  darkMode.src = "img/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  darkMode.src = "img/sun.png";
  document.body.classList.add("dark-theme");
} 

darkMode.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    darkMode.src = "img/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    darkMode.src = "img/moon.png";
    localStorage.setItem("theme",  "light");
  }
}*/

let darkIcon = document.getElementById('dark'); 
let lightIcon = document.getElementById('light');
let aside = document.getElementById('card');
let main = document.getElementById('main');
let secText = document.getElementById('fh');
let firstText = document.getElementById('sh')

lightIcon.style.display = "none";

darkIcon.onclick = function() {
  document.body.style.backgroundColor = "#171651";
  aside.style.backgroundColor = "#6358CA";
  main.style.backgroundColor = "#070640";
  secText.style.color = "#fff";
  firstText.style.color = "#fff";
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
}

lightIcon.onclick = function() {
  document.body.style.backgroundColor = "#513f85";
  aside.style.backgroundColor = "#4568dc";
  main.style.backgroundColor = "#552cc4";
  secText.style.color = "black";
  firstText.style.color = "black";
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

  