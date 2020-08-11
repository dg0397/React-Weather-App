import Weather from "../Components/Weather";

export default function getWeatherAPI(latitude,longitude,setState){
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
        .then(data => data.json())
        .then(location => {
            const {coord,name, sys:{country},weather,main:{temp}} = location;
            const {main,icon} = weather[0];
            const weatherData = {coord,name,country,main,temp,icon};
            
            setState(weatherData)
        })
}