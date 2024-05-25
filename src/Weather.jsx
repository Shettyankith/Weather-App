import Search from "./Search"
import DataBox from "./DataBox"
import { useState } from "react"
import "./Weather.css"

export default function Weather(){
    let [weather,setweather]=useState({
        city:"Udupi",
        feelsLike: 33.22,
        grnd_level: 1002,
        humidity: 78,
        pressure: 1004,
        sea_level: 1004,
        temp: 28.58,
        tempMax: 28.58,
        tempMin: 28.58,
        weather: "light rain",
        wind_speed: 6.26,
        sunrise:"6:30:23 AM",
        sunset:"7:11:45 PM",
        date: new Date().toLocaleDateString(),
    })

    let updateWeather=(data)=>{
        setweather(data);
    }

    return(
        <div className="weather">
            <Search updateWeather={updateWeather}/>
            <DataBox data={weather}/>
        </div>
    )
}