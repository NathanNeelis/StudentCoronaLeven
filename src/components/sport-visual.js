import Fitness from '../img/sport1.svg';
import Footbal from '../img/sport2.svg';
import Running from '../img/sport3.svg';
import Swimming from '../img/sport4.svg';
import Boxing from '../img/sport5.svg';
import Tennis from '../img/sport6.svg';
import Cycling from '../img/sport7.svg';
import Yoga from '../img/sport8.svg';
import SportCategories from './sportCategories';

export default function SportContainer (props) {
    return (
        <div>
            <div className="sportContainer">
                <SportCategories sport={Fitness} data='35%' legend='notAllowed' />
                <SportCategories sport={Footbal} data='13%' legend='notAllowed' />
                <SportCategories sport={Running} data='10%' />
                <SportCategories sport={Swimming} data='4,4%' legend='notAllowed' />
                <SportCategories sport={Boxing} data='3,4%' legend='notAllowed' />
                <SportCategories sport={Tennis} data='2,7%' />
                <SportCategories sport={Cycling} data='2,3%' />
                <SportCategories sport={Yoga} data='1,9%' />
            </div>
                
            <div className="legend">
                <div className="legend-Container">
                    <div className="legend-NotAllowed"></div>
                    <p>Verboden</p>
                </div>
                <div className="legend-Container">
                    <div className="legend-Allowed"></div>
                    <p>Toegestaan</p>
                </div>
            </div>
        </div>
        );
    }
    