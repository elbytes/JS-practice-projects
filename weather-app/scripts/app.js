//jshint esversion:8
const cityInput = document.querySelector('form');
cityInput.addEventListener('submit', e =>{
    e.preventDefault();
    //get city value
    const city = cityInput.city.value.trim();
    cityInput.reset();

    
});