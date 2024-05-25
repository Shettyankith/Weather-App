import Top from "./Top"
import Bottom from "./Bottom"
import "./Left.css"

export default function Left({data}){
    return(
        <div className="left">
            <Top data={data}/>
            <Bottom data={data}/>
        </div>
    )
}