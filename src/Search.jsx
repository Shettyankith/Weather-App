import "./Search.css";
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Search({ updateWeather }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ce07aaee72a99607eacd0b80052b5f60";

    const getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let weather = await response.json();
            let sunriseDate = weather.sys.sunrise;
            let sunsetDate = weather.sys.sunset;

            
            const formattedSunrise = formatTime(new Date(sunriseDate * 1000));
            const formattedSunset = formatTime(new Date(sunsetDate * 1000));

            let data = {
                city: city,
                temp: weather.main.temp,
                tempMin: weather.main.temp_min,
                tempMax: weather.main.temp_max,
                humidity: weather.main.humidity,
                pressure: weather.main.pressure,
                feelsLike: weather.main.feels_like,
                grnd_level: weather.main.grnd_level,
                sea_level: weather.main.sea_level,
                weather: weather.weather[0].description,
                wind_speed: weather.wind.speed,
                sunrise: formattedSunrise.time,
                sunset: formattedSunset.time,
                date: formattedSunrise.date
            };
            return data;
        } catch (e) {
            throw e;
        }
    };

    let update = (event) => {
        setCity(event.target.value);
    };

    let onsubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let weatherData = await getWeather();
            updateWeather(weatherData);
        } catch (e) {
            setError(true);
        }
    };

    const formatTime = (date) => {
        const padZero = (num) => (num < 10 ? '0' + num : num);

        const day = padZero(date.getDate());
        const month = padZero(date.getMonth() + 1); 
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = padZero(date.getMinutes());
        const seconds = padZero(date.getSeconds());

        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 

        const timeStr = `${padZero(hours)}:${minutes}:${seconds} ${ampm}`;
        const dateStr = `${day}/${month}/${year}`;

        return {
            date: dateStr,
            time: timeStr
        };
    };

    return (
        <div className='searchbox'>
            <h2 className='title'>Weather App</h2>
            <form onSubmit={onsubmit}>
                <input id="city" className='search' placeholder='Search by city' value={city} onChange={update} required /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
