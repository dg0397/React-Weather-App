export default function getWeatherAPI(latitude,longitude,setState,setStatus){
    setStatus(true)
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
        .then(data => data.json())
        .then(location => {
            const {coord,name,sys,weather,main,visibility,wind,dt} = location;

            const {main:mainDescription,icon} = weather[0];
            const {sunrise,sunset,country} = sys;
            const {temp,feels_like,humidity,temp_max,temp_min} = main;
            const {deg,speed} = wind;
            const {lon,lat} = coord;

            const detailData = {sunrise,sunset,feels_like,humidity,temp_max,temp_min,visibility,deg,speed,lon,lat,dt}
            const weatherData = {coord,name,country,mainDescription,temp,icon,detailData};
            console.log(location)
            setState(weatherData)
            setStatus(false);
        })
}