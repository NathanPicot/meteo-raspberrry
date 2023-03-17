// Define the latitude and longitude values
const latitude = 52.52;
const longitude = 13.41;

/*
function getCityName(lat, lng) {
    const map = L.map('map').setView([lat, lng], 13);
    const OSMUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(OSMUrl, { attribution: '© OpenStreetMap contributors' }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map);
    const geocoder = L.Control.Geocoder.nominatim();

    geocoder.reverse([lat, lng], map.options.crs.scale(map.getZoom()), results => {
        const cityName = results[0].name;
        console.log(cityName);
    });
}

getCityName(latitude, longitude); // Example usage: pass the latitude and longitude as arguments
*/


// Build the API endpoint URL with the latitude, longitude, and hourly parameter
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

// Send a GET request to the API endpoint using the Fetch API
fetch(url)
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


