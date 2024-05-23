const apiKey = "db7920605624b95ddce109b57faf662f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInput = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')

async function checkWeather(city)
{
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`
    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

}

searchButton.addEventListener('click', ()=>
{
    checkWeather(searchInput.value)
 })
checkWeather()


