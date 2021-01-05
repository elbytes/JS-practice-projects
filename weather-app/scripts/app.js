//jshint esversion:8
const cityInput = document.querySelector('form');

const updateCity = async (city) =>{
    const cityData = await getCity(city); //forecast.js loads before app.js
    const weather = await getCurrent(cityData.Key); 
    return {
        cityData: cityData,
        weather: weather
    };
};

cityInput.addEventListener('submit', e =>{
    e.preventDefault();
    //get city value
    const city = cityInput.city.value.trim();
    cityInput.reset();

    //update the ui with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });
