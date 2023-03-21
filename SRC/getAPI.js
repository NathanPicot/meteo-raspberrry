
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

}

function showPosition(position) {
    getCityName(position.coords.latitude, position.coords.longitude)
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}

function getCityName(lat, lng) {


   const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&zoom=13&addressdetails=1&format=json`
   console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the response data as needed

            let city = data.address.city;
            if (city){
                console.log(city)
                document.getElementById('sec_temp').innerHTML = city
            }else{
                document.getElementById('sec_temp').innerHTML = data.address.village
            }





        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
        });

    const latitude = lat
    const longitude = lng
// Build the API endpoint URL with the latitude, longitude, and hourly parameter
    const urlMeteo = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

// Send a GET request to the API endpoint using the Fetch API
    fetch(urlMeteo)
        .then(response => response.json())
        .then(data => {
            // Process the response data as needed

            let hours = data.hourly.time;

            let temperature = data.hourly.temperature_2m;

            let date2 = Date();
            let newDate = date2.split(" ");




            for(i = 0; i<hours.length; i++){
                let time = hours[i].split('T');
                let checkDay = time[0].split('-');

                if (checkDay[2] == newDate[2]){
                    console.log('Nous somme le '+time[0]+', il est ' + time[1] +" et il fait " + temperature[i]+ "°C")
                }

            }

        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
        });





}







