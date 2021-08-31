# Techrity Mentorship Final Project - Weather app

This is a solution to the [Final Project on Techrity Fullstack Mentorship](https://techrity.org/mentorship).. 

## Table of contents

- [Overview](#overview)
  - [Title of the project](#title)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
   - [Name of Mentor](#mentor)
   -[Mentor Slack Contact](#slack-contact)
   -[Review of the #TMP2021 Program](#review)
   -[Mentee Name](#name)
   -[Mentee Professional Headshot](#headshot)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Title
Weather App

### The challenge

Users should be able to:

- See the size of the web app adjust based on their device's screen size
- Obtain weather information of any location
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](img/screenshot.PNG)

### Links

- Solution URL: [github repo URL](https://your-solution-url.com)
- Live Site URL: [live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- Open weather map API

### What I learned

```html
<aside class="weather-search bg-img" id="card">
            
            <h1 id="sh">Hello! <br>  Enter your weather location</h1>
            <form class="change-location">
                <input type="text" class="form-control" placeholder="Enter city name" name="city">
            </form>
            <img src="" class="card">
            <section class="weather-conditions d-none" id="conditions">
                <div class="icon">
                    <img src="" alt="">
                </div>
                <div class="details" id="details">
                    <h1><span>Temperature</span>
                    <span class="deg">&deg;C</span>
                </h1>
                    <h3 class="h-1">Weather Condition</h3>
                    <h5 class="h-2">City Name</h5>
                    <h6 class="h-3">Date and Time</h6>
                </div>
                <div class="sunrise" id="sunrise">
                    <span><h6 class="h-4">Sunrise</h6>
                        <p class="p-1">Time for sunrise</p> </span>
                    <span><h6 class="h-4">Sunset</h6>
                        <p class="p-1">Time for Sunset</p> </span>
                </div>
            </section>
        </aside>
```
```css
ion-icon{
    -webkit-animation: animate 1s linear infinite;
    animation: animate 1s linear infinite;
    border-radius: 50%;
}

@-webkit-keyframes animate{
  0%{
    box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0.5);
  }
  100%{
    box-shadow: 0 0 0px 15px rgba(255, 255, 255, 0);
  }
}

@keyframes animate{
  0%{
    box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0.5);
  }
  100%{
    box-shadow: 0 0 0px 15px rgba(255, 255, 255, 0);
  }
}
```
```js
const updateCity = async (city ) => {
    const cityName = await getCity(city);
    console.log(cityName);
    return { cityName};
  };

  details.innerHTML = `
    <h1><span>${weather.main.temp}</span>
    <span class="deg">&deg;C</span>
    </h1>
    <h3 class="h-1">${weather.weather[0].main}</h3>
    <h5 class="h-2">${weather.name}</h5>
    <h6 class="h-3">${weather.timezone}</h6>
    `;
```

### Useful resources

- [Openweathermap API](https://openweathermap.org/current)

## Author

- Website - [Daud Faozziyyah](https://resume-cv-xi.vercel.app/)
- Linkedin - [@omowunmi daud](https://www.linkedin.com/in/faasamomowunmi-daud)
- Twitter - [@muslimahdev](https://www.twitter.com/muslimahdev)

## Acknowledgments

### Mentor
- Taofeek Olalere - [teekaytech](https://github.com/teekaytech)

### Slack-contact
- Teekaytech - [E-mail](olaleretaofeek@live.com)

### Review
- I appreciate Techrity for this opportunity. The journey was awesome and the learning resources are superb. Thank you for giving us this opportunity.

### Name
- Daud Faozziyyah 

### Headshot
![](img/headshot.jpg)