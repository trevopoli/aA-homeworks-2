import React from 'react';
import config from './config';

class Weather extends React.Component {
    componentDidMount(){
        navigator.geolocation.getCurrentPosition( (geoPos) => {
            let latitude = geoPos.coords.latitude;
            let longitude = geoPos.coords.longitude;
            this.setState({latitude, longitude});
            }   
        );
    }

    constructor(props){
        super(props);

        this.state = {
            latitude: undefined,
            longitude: undefined,
            city: undefined,
            temp: undefined,
            sky: undefined
        }
    }

    render() {
        let lat = this.state.latitude;
        let lon = this.state.longitude;

        if (lat && lon && this.state.city === undefined) {
            var weatherReq = new XMLHttpRequest();
            weatherReq.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.WEATHER_API_KEY}&units=imperial`, true);
            weatherReq.responseType = "json";
            const _this = this;
            weatherReq.onload = function () {
                if (this.status >=200 && this.status < 400) {
                    _this.setState({city: this.response.name, temp: this.response.main.temp, sky: this.response.weather[0].description});
                } else {
                    console.log("err");
                }
            };
            weatherReq.onerror = function () {
                console.log("conn error");
            };
            weatherReq.send();
        } 

        let city = this.state.city;
        let sky = this.state.sky;
        let temp = this.state.temp;
        
        if (city && sky && temp) {
            return (
                <div className="weather">It is {temp}&#176;F with {sky} in {city}.</div>
            );
        } else {
            return (
                <div className="weather">could not retrieve location or weather</div>
            );
        }
    }
}

export default Weather;