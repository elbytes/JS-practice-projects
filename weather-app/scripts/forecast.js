//jshint esversion:8
const key = 'bNRjpYXo7CgUDUvuFAYtT1leiklKikzz';
//get city 
const getCity = async(city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

//get current weather
const getCurrent = async(locationKey)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};


const city = getCity('statecollege').then(data => {
    return getCurrent(data.Key);
}).then(data => {
    console.log(data);
})
.catch(err => console.log(err.message));

getCurrent(335315);