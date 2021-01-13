import ReactPlayer from "react-player";

export default function VideoMessage (props) {
    return (
    <div className="singleMessage">
        <h4>{props.name}</h4>   
        {/* <p>{props.message}</p> */}
        <ReactPlayer url={props.url} width='100%' height='24vh' controls={true} />
        <div className={props.side}></div>
    </div>
    );
}
