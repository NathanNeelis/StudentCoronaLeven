
export default function SportCategories (props) {
    return (
        <div className="sportCategories"> 
            <img src={props.sport} alt='Sport icon' className={props.legend} />
            <p>{props.data}</p>
        </div>
    );
}