const input = document.querySelector('.input')
const button = document.querySelector('.button')
const weatherImage = document.querySelector('.weatherImage')
const temprature = document.querySelector('.temp')
const description = document.querySelector('.desc')
const humidity = document.querySelector('#humi')
const wind = document.querySelector('#wind')
const ApiKey = '26ff3b7c13e010ed3571187f16d88366'
const ApiPath = 'https://api.openweathermap.org/data/2.5/weather?q='
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function CheckWeather(city){
  const url = `${ApiPath}${city}&appid=${ApiKey}` 
  const weather_data = await fetch(`${url}`)
  .then(res => res.json()).catch(res => console.log(err))

temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
description.innerHTML = `${weather_data.weather[0].description}`
humidity.innerHTML = `${weather_data.main.humidity}%`
wind.innerHTML = `${weather_data.wind.speed}Km/H`

switch(weather_data.weather[0].main){
  case 'Clouds':
    weatherImage.src = "cloud.png"
   break;
   case 'Clear':
    weatherImage.src = "clear.png"
   break;
   case 'Rain':
    weatherImage.src = "rain.png"
   break;
   case 'Mist':
    weatherImage.src = "mist.png"
   break;
   case 'Snow':
    weatherImage.src = "snow.png"
   break;
   
}
}
button.addEventListener('click',function(){
  CheckWeather(input.value)  
  
})