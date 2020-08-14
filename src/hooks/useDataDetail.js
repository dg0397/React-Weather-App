export default function useDataDetail(key,value,unit = "C"){
   if(key === 'sunrise' || key === 'sunset' || key === "dt"){

        const date = new Date(value*1000);
        const formatValue = `${date.getHours()} : ${date.getMinutes()}`
        return { key,value : formatValue };

   }else if( key === 'feels_like' || key === 'temp_max' || key === 'temp_min'){

        let formatTemp = '';
        if(unit === "C"){
            formatTemp = value ? `${value}°C` : "";
        } else{
            formatTemp = value ? `${((value * 9/5) + 32).toFixed(2)}°F` : "";
        }
        return {key, value : formatTemp};

   }else if(key === 'humidity'){

        let formatHumidity = `${value} %`;
        return {key,value : formatHumidity};

   }else if( key === 'visibility'){

        let formatVisibility = `${value/1000} mi`
        return {key,value :  formatVisibility};

   }else if( key === 'deg'){
        let formatDeg = `${value}°`;
        return {key,value : formatDeg}
   }else if( key === 'speed'){
        return {key,value}
   }else{
        return { key,value }
   }
}