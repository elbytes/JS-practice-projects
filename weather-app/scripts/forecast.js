//jshint esversion:8
class Forecast{
    constructor(){
        this.key = 'bNRjpYXo7CgUDUvuFAYtT1leiklKikzz';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.city = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityData = await this.getCity(city); //forecast.js loads before app.js
        const weather = await this.getCurrent(cityData.Key); 
        //using object shorthand notaion:
        return {cityData, weather};
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI+ query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}

