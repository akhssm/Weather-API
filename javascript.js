document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'b67ecb5cc4ba42c7a7f101822230911'; /*Define a API key for accessing weather data (replace your actual API key) */
    const searchButton = document.getElementById('search-button'); /* Get a referenceto the search button element in the HTML*/

    searchButton.addEventListener('click', async () => {    /*Add event listener to the search button for handling user input*/
        const cityInput = document.getElementById('city-input');
        const city = cityInput.value;

        if (city) {  /* Check if a city name was provided by the user*/
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`); /*Send an asynchoronous HTTP request to the weather API with the user's city input*/
                const data = await response.json(); /*Parse the response as JSON data*/
                /*Get reference to HTML elements for desplaying weather information*/
                const temperatureElement = document.getElementById('temperature');
                const humidityElement = document.getElementById('humidity');
                const conditionsElement = document.getElementById('conditions');
                /*Populate the HTML elements with weather data from the API response*/
                temperatureElement.textContent = data.current.temp_c;
                humidityElement.textContent = data.current.humidity;
                conditionsElement.textContent = data.current.condition.text;
            } catch (error) { /*Handle errors by logging them to console and displaying an alert to the user*/
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again later.');
            }
        }
    });
});