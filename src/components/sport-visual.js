import Fitness from '../img/fitness.svg';
import Footbal from '../img/footbal.svg';
import Running from '../img/running.svg';
import Swimming from '../img/swimming.svg';
import Tennis from '../img/tennis.svg';
import Cycling from '../img/cycling.svg';
import Yoga from '../img/yoga.svg';
import Horse from '../img/horse.svg';
import Hiking from '../img/hiking.svg';
import Golf from '../img/golf.svg';
import SportCategories from './sportCategories';
import Arrow from './Arrow'

export default function SportContainer (props) {
    return (
        <div>
        <div className="sportContainer">
            <div class="slider">
                <div class="slides">
                    <div id="slide-1">
                        <div className="sportTitle">
                            <h4>Hoeveel mensen kunnen niet meer hun sport beoefenen in de coronatijd?</h4>
                            <Arrow target='#slide-2' side='Right' />
                        </div>
                        <div className="SportIntro">
                            <p><span>Sporten in 2020 is anders dat het was. Garages worden omgebouwd tot fitnessruimtes en parken worden gebruikt als groepsleszalen. Maar wat is nou echt de impact van corona?</span></p>
                        </div>
                        <div>
                            {/* <p><span>Cool tekstje hier</span></p> */}
                        </div>
                    </div>

                    <div id="slide-2">
                        <div className="sportTitle">
                            <Arrow target='#slide-1' side='Left' />
                            <h4>Buiten sporten mag met maximaal 2 personen (exclusief trainer)</h4>
                            <Arrow target='#slide-3' side='Right' />
                        </div>
                        <div className="IconContainer">
                            <SportCategories sport={Fitness} />
                            <SportCategories sport={Running} />
                            <SportCategories sport={Footbal} legend='notAllowed' />
                            <SportCategories sport={Swimming} />
                            <SportCategories sport={Tennis} />
                            <SportCategories sport={Hiking} />
                            <SportCategories sport={Yoga} />
                            <SportCategories sport={Cycling} />
                            <SportCategories sport={Golf} legend='notAllowed' />
                            <SportCategories sport={Horse} />
                        </div>
                        <div className="sportInfo">
                            <p><span className="impact">1904</span></p>
                            <p>sporters die nu niet meer kunnen sporten</p>
                        </div>
                    </div>

                    <div id="slide-3">
                        <div className="sportTitle">
                            <Arrow target='#slide-2' side='Left' />
                            <h4>In binnenruimtes sporten mag niet</h4>
                            <Arrow target='#slide-4' side='Right' />
                        </div>
                        <div className="IconContainer">
                            <SportCategories sport={Fitness} legend='notAllowed'/>
                            <SportCategories sport={Running} />
                            <SportCategories sport={Footbal} legend='notAllowed' />
                            <SportCategories sport={Swimming} />
                            <SportCategories sport={Tennis} />
                            <SportCategories sport={Hiking} />
                            <SportCategories sport={Yoga} />
                            <SportCategories sport={Cycling} />
                            <SportCategories sport={Golf} legend='notAllowed' />
                            <SportCategories sport={Horse} />
                        </div>
                        <div className="sportInfo">
                            <p><span className="impact">2497</span></p>
                            <p>sporters die nu niet meer kunnen sporten</p>
                        </div>
                    </div>

                    <div id="slide-4">
                        <div className="sportTitle">
                            <Arrow target='#slide-3' side='Left' />
                            <h4>Groepslessen buiten mogen niet</h4>
                            <Arrow target='#slide-5' side='Right' />
                        </div>
                        <div className="IconContainer">
                            <SportCategories sport={Fitness} legend='notAllowed'/>
                            <SportCategories sport={Running} />
                            <SportCategories sport={Footbal} legend='notAllowed' />
                            <SportCategories sport={Swimming} />
                            <SportCategories sport={Tennis} />
                            <SportCategories sport={Hiking} />
                            <SportCategories sport={Yoga} legend='notAllowed' />
                            <SportCategories sport={Cycling} />
                            <SportCategories sport={Golf} legend='notAllowed' />
                            <SportCategories sport={Horse} />
                        </div>
                        <div className="sportInfo">
                            <p><span className="impact">2734</span></p>
                            <p>sporters die nu niet meer kunnen sporten</p>
                        </div>
                    </div>

                    <div id="slide-5">
                        <div className="sportTitle">
                            <Arrow target='#slide-4' side='Left' />
                            <h4>Wedstrijden zijn verboden</h4>
                            <Arrow target='#slide-6' side='Right' />
                        </div>
                        <div className="IconContainer">
                            <SportCategories sport={Fitness} legend='notAllowed'/>
                            <SportCategories sport={Running} />
                            <SportCategories sport={Footbal} legend='notAllowed' />
                            <SportCategories sport={Swimming} legend='notAllowed' />
                            <SportCategories sport={Tennis} legend='notAllowed' />
                            <SportCategories sport={Hiking} />
                            <SportCategories sport={Yoga} legend='notAllowed' />
                            <SportCategories sport={Cycling} />
                            <SportCategories sport={Golf} legend='notAllowed' />
                            <SportCategories sport={Horse} />
                        </div>
                        <div className="sportInfo">
                            <p><span className="impact">3576</span></p>
                            <p>sporters die nu niet meer kunnen sporten</p>
                        </div>
                    </div>

                    <div id="slide-6">
                        <div className="sportTitle">
                            <Arrow target='#slide-5' side='Left' />
                            <h4>Hoeveel mensen zitten nu stil?</h4>
                        </div>
                        <div className="lastImpact">
                            <div>
                                <p><span className="impact">74</span></p>
                                <p>sporten zijn nu verboden</p>
                            </div>
                            <div className="impactNumbers">
                                <p><span className="impact">6138</span></p>
                                <p>Mensen die nu niet meer kunnen sporten</p>
                            </div>
                        </div>
                        <div className="sportInfo">

                        </div>
                    </div>
                </div>
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
        </div>
        );
    }
    