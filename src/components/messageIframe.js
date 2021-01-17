export default function VideoMessage (props) {
    return (
    <div className="singleMessage">
        <div className="AvatarWrap">
            <img src={props.src} alt="avatar" className="avatar" />
           <h4>{props.name}</h4> 
        </div> 
        {/* <p>{props.message}</p> */}
        <iframe src={props.url} frameBorder="0" alt='hello' className='gif' title={props.title} />
    </div>
    );
}
