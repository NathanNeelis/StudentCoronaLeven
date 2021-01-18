export default function Navigation (props) {
    return (
    <article className="navigation">     
        <nav>
            <ul>
                <a href="#Start">
                    <li className={props.introduction ? 'active' : 'notactive'}> <span>Introduction</span></li>
                </a>
                <a href="#SocialContact">
                    <li className={props.contact ? 'active' : 'notactive'}><span>Sociaal contact</span></li>
                </a> 
                <a href="#sportSection">
                    <li className={props.sport ? 'active' : 'notactive'}><span>Sport & beweging</span></li>
                </a> 
                <a href="#OV">
                    <li className={props.publicTransport ? 'active' : 'notactive'}><span>Openbaar vervoer</span></li>
                </a> 
                <a href="#vacation">
                    <li className={props.vacation ? 'active' : 'notactive'}><span>Vakantie</span></li>
                </a> 
                <a href="#work">
                    <li className={props.work ? 'active' : 'notactive'}><span>Werk & Inkomen</span></li>
                </a> 
                <a href="#workHome">
                    <li className={props.workhome ? 'active' : 'notactive'}><span>Thuis werken</span></li>
                </a> 
                <a href="#ondernemers">
                    <li className={props.ondernemers ? 'active' : 'notactive'}><span>Ondernemers</span></li>
                </a> 
                <a href="#uitgaven">
                    <li className={props.uitgaven ? 'active' : 'notactive'}><span>Uitgaven</span></li>
                </a> 
            </ul>
        </nav>
    </article>
    );
}