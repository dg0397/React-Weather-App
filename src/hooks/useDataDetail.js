export default function useDataDetail(key, value, unit = "C") {
     if (key === 'sunrise' || key === 'sunset' || key === "dt") {

          const date = new Date(value * 1000);
          const hours = date.getHours();
          const mins = date.getMinutes();

          const resultHours = hours >= 10 ?
               `${hours}` :
               (hours > 0 && hours < 10) ?
                    `0${hours}` :
                    `00`;
          const resultMins = mins >= 10 ?
               `${mins}` :
               (mins > 0 && mins < 10) ?
                    `0${mins}` :
                    `00`;

          const formatValue = `${resultHours} : ${resultMins}`
          return { key, value: formatValue };


     } else if (key === 'feels_like' || key === 'temp_max' || key === 'temp_min') {

          let formatTemp = '';
          if (unit === "C") {
               formatTemp = value ? `${value}°C` : "";
          } else {
               formatTemp = value ? `${((value * 9 / 5) + 32).toFixed(2)}°F` : "";
          }
          return { key, value: formatTemp };

     } else if (key === 'humidity') {

          let formatHumidity = `${value} %`;
          return { key, value: formatHumidity };

     } else if (key === 'visibility') {

          let formatVisibility = `${value / 1000} mi`
          return { key, value: formatVisibility };

     } else if (key === 'deg') {
          let formatDeg = `${value}°`;
          return { key : "wind_deg", value: formatDeg }
     } else if (key === 'speed') {
          return { key : "wind_speed", value }
     } else {
          return { key, value }
     }
}