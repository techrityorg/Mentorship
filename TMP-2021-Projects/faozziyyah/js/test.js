fetch('https://api.openweathermap.org/data/2.5/weather?q=Abuja&units=metric&appid=5ee5730275c2be88687659f263c66764')
  .then(function(response) {
    // Successful response :)
    console.log(response.json());
  })
  .catch(function(err) {
    // Error :(
  }); 