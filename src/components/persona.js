export default function Persona (props) {
    return (
    <div className={'container' + props.name}>
        <img src={props.image} alt={props.altName} className={'persona' + props.name} />
        <h3>{props.name}</h3>
    </div>
    );
}
