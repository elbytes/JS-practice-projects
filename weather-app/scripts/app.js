//jshint esversion:8
const cityInput = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUi = (data)=>{
    const cityDetails = data.cityData;
    const cityWeather = data.weather;

    details.innerHTML = `<div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">
        ${cityDetails.EnglishName}
    </h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${cityWeather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
    </div>
</div>`;
};

const updateCity = async (city) =>{
    const cityData = await getCity(city); //forecast.js loads before app.js
    const weather = await getCurrent(cityData.Key); 
    //using object shorthand notaion:
    return {cityData, weather};
};

cityInput.addEventListener('submit', e =>{
    e.preventDefault();
    //get city value
    const city = cityInput.city.value.trim();
    cityInput.reset();

    //update the ui with new city
    updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err));
    });
