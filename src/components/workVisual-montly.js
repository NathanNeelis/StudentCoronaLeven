export default function WorkVisualMonth(props) {
    return (
        <div className="month">
            <img src={props.image} alt={props.month + "data"} />
            <p>{props.month}</p>
        </div>
    );
}