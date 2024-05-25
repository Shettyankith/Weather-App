export default function SingleData({ icon, label, value, unit }) {
    return (
        <div>
            <p><i className={icon}></i> {label} </p>
            <h2>{value} {unit}</h2>
        </div>
    );
}
