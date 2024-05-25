import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Top({data}){
    return(
        <div className="top">
                <h6>{data.date}</h6>
                <p>{data.weather}{data.humidity>80
                ?<ThunderstormIcon/>
                :data.temp>24
                ?<WbSunnyIcon/>
                :<SevereColdIcon/>}</p>
                
            </div>
    )
}