export default function getLocation(callback,setState,setStatus){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( (location)=> {
            const {coords} = location;
            const {latitude,longitude} = coords;
            callback(latitude,longitude,setState,setStatus)
        })
    }else{
        return "Geolocation is not supported by this browser."
    }
}
