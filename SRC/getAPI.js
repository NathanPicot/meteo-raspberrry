function getLocation() {
    // Get the current location of the user
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
async function showPosition(position) {
    // Get the city name from the coordinates
    getCityName(position.coords.latitude, position.coords.longitude)
}
function getCityName(lat, lng) {
    // Create a URL to get the city name from the coordinates
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&zoom=13&addressdetails=1&format=json`
    console.log(url)
    // Fetch the data from the URL
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let city = data.address.city;
            // Check if the city is available
            if (city){
                document.getElementById('sec_city').innerHTML = "<div>" + city + "</div>"
            } else if (data.address.village){
                // If not, check if the village is available
                document.getElementById('sec_city').innerHTML = "<div>" + data.address.village + "</div>"
            } else{
                // If not, check if the town is available
                document.getElementById('sec_city').innerHTML="<div>" + data.address.town + "</div>"
            }
        })
        .catch(error => {
            console.error(error);
        });
    // Get the latitude and longitude
    const latitude = lat
    const longitude = lng
    // Create a URL to get the weather data from the coordinates
    const urlMeteo = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,showers,snowfall,snow_depth,cloudcover,weathercode`;
    console.log(urlMeteo)
    // Fetch the data from the URL
    fetch(urlMeteo)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let hours = data.hourly.time;
            let temperature = data.hourly.temperature_2m;
            let date2 = Date();
            let newDate = date2.split(" ");
            let localHours = newDate[4];
            let newLocalHours = localHours.split(":");
            let sky = data.hourly.weathercode;
            // Loop through the hours
            for(i = 0; i<hours.length; i++){
                let time = hours[i].split('T');
                let checkDay = time[0].split('-');
                let meteoHours = time[1].split(':')
                let skyStatus = ""
                // Check if the day is the same
                if (checkDay[2] == newDate[2]){
                    console.log('Nous somme le '+time[0]+', il est ' + time[1] +" et il fait " + temperature[i]+ "°C")
                    // Check if the hour is the same
                    if (newLocalHours[0] == meteoHours[0] ){
                        document.getElementById('sec_temp').innerHTML = "<br><div>" + temperature[i] + "°C" + "</div>" ;
                        // Switch statement to get the weather status
                        switch (sky[i]) {
                            case 0:
                                skyStatus = "Ciel dégagé"
                                document.body.style.backgroundImage = 'url("gif/gif_soleil.gif")'
                                break;
                            case 1:
                                skyStatus = "Principalement dégagé"
                                document.body.style.backgroundImage = 'url("gif/gif_soleil.gif")'
                                break;
                            case 2:
                                skyStatus = "Partiellement nuageux"
                                document.body.style.backgroundImage = 'url("gif/gif_nuage.gif")'
                                break;
                            case 3:
                                skyStatus = "Nuageux"
                                document.body.style.backgroundImage = 'url("gif/gif_nuage.gif")'
                                break;
                            case 45:
                                skyStatus = "Brouillard"
                                document.body.style.backgroundImage = 'url("gif/gif_nuage.gif")'
                                break;
                            case 45:
                                skyStatus = "Brouillard givrant"
                                document.body.style.backgroundImage = 'url("gif/gif_nuage.gif")'
                                break;
                            case 51:
                                skyStatus = "Bruine legere"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 53:
                                skyStatus = "Bruine modéré"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 55:
                                skyStatus = "Bruine dense"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 56:
                                skyStatus = "Bruine givrante legere"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 57:
                                skyStatus = "Bruine givrante forte"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 61:
                                skyStatus = "Pluie legere"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 63:
                                skyStatus = "Pluie modérée"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 65:
                                skyStatus = "Forte pluie"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 66:
                                skyStatus = "Faible pluie verglaçante "
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 67:
                                skyStatus = "Forte pluie verglaçante"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 71:
                                skyStatus = "Neige faiblement"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 73:
                                skyStatus = "Neige modérément"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 75:
                                skyStatus = "Neige intense"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 77:
                                skyStatus = "Neige"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 80:
                                skyStatus = "Pluie legere"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 81:
                                skyStatus = "Pluie modéré"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 82:
                                skyStatus = "Pluie forte"
                                document.body.style.backgroundImage = 'url("gif/gif_pluie.gif")'
                                break;
                            case 85:
                                skyStatus = "Neige legere"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 86:
                                skyStatus = "Neige Forte"
                                document.body.style.backgroundImage = 'url("gif/gif_neige.gif")'
                                break;
                            case 95:
                                skyStatus = "Orageux"
                                document.body.style.backgroundImage = 'url("gif/gif_orage.gif")'
                                break;
                            case 96:
                                skyStatus = "Leger orage avec eclair"
                                document.body.style.backgroundImage = 'url("gif/gif_orage.gif")'
                                break;
                            case 99:
                                skyStatus = "Gros orage avec eclair"
                                document.body.style.backgroundImage = 'url("gif/gif_orage.gif")'
                                break;
                        }
                        document.getElementById('sec_temp').innerHTML += "<br><div> "+ skyStatus +"</div>"
                    }
                }
            }
        })
        .catch(error => {
            console.error(error);
        });
    // Call the getLocation function
    getLocation();
}