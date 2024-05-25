import "./DataBox.css"
import rain from "./assets/rain.jpg"
import cold from "./assets/cold.jpg"
import hot from "./assets/hot.jpg"
import Left from "./Left"
import Right from './Right';

export default function DataBox({data}){
    const backgroundImage=data.humidity>60?`url(${rain})`:data.temp>24?`url(${hot})`:`url(${cold})`;
    const sea_level=(data.sea_level===undefined)?765:data.sea_level;
    return(
        <div className="container" style={{backgroundImage}}>
            <Left data={data}/>
            <Right data={data}/>
        </div>
    )
}