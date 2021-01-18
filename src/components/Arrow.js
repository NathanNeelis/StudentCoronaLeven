

export default function Arrow (props) {    
    return (
        <div>
            <a href={props.target}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="11.25" viewBox="0 0 64.017 22.598" className={'SliderArrow' + props.side} >
                    <path id="Path_345" data-name="Path 345" d="M842-601.769l30.77,17.549,30.77-17.549" transform="translate(-840.761 603.941)" fill="none" stroke="#ffffff" stroke-width="5"/>
                </svg>
            </a>
        </div>
);
}
