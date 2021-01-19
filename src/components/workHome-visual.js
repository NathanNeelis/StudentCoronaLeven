import Wordcloud from '../img/wordcloud.svg';
import Map from '../img/mapNetherlands.svg';
import BarchartJongens from '../img/barchart-jongens.svg'
import BarchartMeisjes from '../img/barchart-meisjes.svg'

export default function HomeWorkVisual(props) {
    return (
        <div className="HWcontainer">
            <div className="HWWrap">
                <div className="firstVisual">{/* First row*/}
                    <div className="wordcloud">{/* wordcloud */}
                        <img src={Wordcloud} alt="wordcloud" />
                    </div>
                    
                    <div className="mapNL">{/* map Netherlands */}
                        <img src={Map} alt="Map nederland" />
                    </div>
                </div>
                <div className="secondVisual">{/* second row*/}
                    <p>Welke bijbaantjes hebben studenten dan wel?</p>
                    <div className="barchartContainer">
                        <div className="barchart">{/* barchart jongens */}
                            <img src={BarchartJongens} alt="barchart jongens" />
                        </div>
                        <div className="barchart">{/* barchart meisjes */}
                        <img src={BarchartMeisjes} alt="barchart meisjes" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}