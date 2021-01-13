export default function Message (props) {
    return (
    <div className="singleMessage">
        <h4>{props.name}</h4>   
        <p>{props.message}</p>
        <div className={props.side}></div>
    </div>
    );
}
