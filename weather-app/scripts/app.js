//jshint esversion:8
const cityInput = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();
console.log(forecast);

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


cityInput.addEventListener('submit', e =>{
    e.preventDefault();
    //get city value
    const city = cityInput.city.value.trim();
    cityInput.reset();

    //update the ui with new city
    updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err));
    //set localStorage
    localStorage.setItem('city', city);
    
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateUi(data))
    .catch(err => console.log(er));
}