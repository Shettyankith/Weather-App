import SingleData from './SingleData';
import "./Right.css"

export default function Right({ data }) {
    return (
        <div className="right">
            <SingleData icon="fa-solid fa-sun" label="Sunrise" value={data.sunrise} unit="" />
            <SingleData icon="fa-solid fa-mountain-sun"label="Sunset" value={data.sunset} unit="" />
            <SingleData icon="fa-solid fa-compress" label="Pressure" value={data.pressure} unit="hPa" />
            <SingleData icon="fa-solid fa-droplet" label="Humidity" value={data.humidity} unit="%" />
            <SingleData icon="fa-solid fa-wind" label="Wind Speed" value={data.wind_speed} unit="Km/h" />
            <SingleData icon="fa-solid fa-water" label="Sea Level" value={data.sea_level} unit="m" />
        </div>
    );
}
