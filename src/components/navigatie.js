export default function Navigation (props) {
    return (
    <article className="navigation">     
        <nav>
            <ul>
                <a href="#Start">
                    <li className={props.introduction ? 'active' : 'notactive'}> <span>Introduction</span></li>
                </a>
                <a href="#sportSection">
                    <li className={props.sport ? 'active' : 'notactive'}><span>Sport & beweging</span></li>
                </a> 
                <a href="#OV">
                    <li className={props.publicTransport ? 'active' : 'notactive'}><span>Openbaar vervoer</span></li>
                </a> 
            </ul>
        </nav>
    </article>
    );
}