const ApiKey = "de03381d772757ef6493fd66ba85f1c0";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${ApiUrl}q=${city}&appid=${ApiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector('.weather').style.display = 'block';
}

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
