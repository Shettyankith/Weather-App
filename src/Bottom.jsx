export default function Bottom({data}){
    return (
        <div className="bottom">
        <h1>{data.temp}&deg;C</h1>
        <p>{data.city}</p>
        </div>
    )
}