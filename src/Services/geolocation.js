export default function getLocation(callback,setState){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( (location)=> {
            const {coords} = location;
            const {latitude,longitude} = coords;
            //console.log(coords)
            //console.log(setState)
            callback(latitude,longitude,setState)
        })
    }else{
        return "Geolocation is not supported by this browser."
    }
}
