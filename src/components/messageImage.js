export default function Message (props) {
    return (
    <div className="singleMessage">
        <div className="AvatarWrap">
            <img src={props.src} alt="avatar" className="avatar" />
           <h4>{props.name}</h4> 
        </div> 
        <p>{props.message}</p>
        <img src={props.image} alt={props.alt} className="MessageImage" />
        <div className={props.side}></div>
    </div>
    );
}
