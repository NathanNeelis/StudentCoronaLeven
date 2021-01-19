import WorkVisualMonth from './workVisual-montly'
import Januari from '../img/januari.svg'
import Februari from '../img/februari.svg'
import Maart from '../img/maart.svg'
import April from '../img/april.svg'
import Mei from '../img/mei.svg'
import Juni from '../img/juni.svg'
import Juli from '../img/juli.svg'
import Augustus from '../img/augustus.svg'
import September from '../img/september.svg'
import Oktober from '../img/oktober.svg'
import November from '../img/november.svg'
import WorkIcon from '../img/work-icon.svg'

export default function WorkVisual(props) {
    return (
        <div className="Workcontainer">
            <div class="workLegend">
            <img src={WorkIcon} alt="icon represents" /> 
            <p>= 1000 werklozen jongeren</p>
            </div>
            
            <div className="workDatavisContainer">
               <WorkVisualMonth image={Januari} month='januari' />
               <WorkVisualMonth image={Februari} month='februari' />
               <WorkVisualMonth image={Maart} month='maart' />
               <WorkVisualMonth image={April} month='april' />
               <WorkVisualMonth image={Mei} month='mei' />
               <WorkVisualMonth image={Juni} month='juni' />
               <WorkVisualMonth image={Juli} month='juli' />
               <WorkVisualMonth image={Augustus} month='augustus' />
               <WorkVisualMonth image={September} month='september' />
               <WorkVisualMonth image={Oktober} month='oktober' />
               <WorkVisualMonth image={November} month='november' />
            </div>
        </div>

    );
}