const key = "72c2344e89ad047c2088625455ed3b24"
const button = document.querySelector(".search-button")
const inputValidation = document.querySelector(".city-input").value
button.addEventListener('click', clickOnSearchButton)



function showData(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = "Temperatura: " + data.main.temp + "ºC"
    document.querySelector(".weather").innerHTML = data.weather[0].description
    document.querySelector(".weather-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".umidity").innerHTML = "Umidade: " + data.main.humidity + "%"
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    if (data.name === undefined) {
        alert("Cidade não encontrada.")
    } else {
        showData(data)
    }
}

function clickOnSearchButton() {
    const city = document.querySelector(".city-input").value
    if (city) {
        searchCity(city)
    } else {
        alert("Por favor, digite o nome da cidade.")
    }
}
