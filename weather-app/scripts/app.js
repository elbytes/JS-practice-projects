//jshint esversion:8
const cityInput = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUi = (data)=>{
    //using destructuring:
    const {cityData, weather} = data;

    details.innerHTML = `<div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">
        ${cityData.EnglishName}
    </h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
    </div>
</div>`;

//update day/night
let dayNight = weather.IsDayTime ? ('icons/day.svg') : 'icons/night.svg';

time.setAttribute('src', dayNight);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
//update icon
const weatherIcon = `icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', weatherIcon);
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