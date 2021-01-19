import Arrow from './Arrow'
import ViolinChart from '../img/violinchart.svg'
import BarChartOne from '../img/barchartVacation1.svg'
import BarChartTwo from '../img/barchartVacation2.svg'
import React, { useState } from 'react';

export default function VacationVisual (props) {
    const [barchartImage, setBarChartImage] = useState(false)
    
    function imageToggleTrue(){
        setBarChartImage(true)
    }

    function imageToggleFalse(){
        setBarChartImage(false)
    }

    return (
        <div>
        <div className="sportContainer">
            <div class="slider">
                <div class="slides">
                    
                    <div id="slideVacation-1">
                        <div className="sportTitle">
                            <div>
                                <h4>Aantal Nederlanders op vakantie</h4>
                                <p>x1.000.000</p>
                            </div>
                            <Arrow target='#slideVacation-2' side='Right' />
                        </div>
                        <div className="VacationIntro">
                            <img src={ViolinChart} alt="violinchart" />
                        </div>
                        <div>
                            {/* <p><span>Cool tekstje hier</span></p> */}
                        </div>
                    </div>

                    <div id="slideVacation-2">
                        <div className="sportTitle">
                        <Arrow target='#slideVacation-1' side='Left' />
                            <div>
                                <h4>Aantal Nederlanders op vakantie</h4>
                                <p>x1.000.000</p>
                            </div>
                            {/* <Arrow target='#slideVacation-3' side='Right' /> */}
                        </div>
                        <div className="VacationDatavis">
                            <div className="buttonContainer">
                                <button onClick={imageToggleFalse} className={barchartImage ? 'jaarButton' : 'jaarButtonActive' }>2019</button>
                                <button onClick={imageToggleTrue} className={barchartImage ? 'jaarButtonActive' : 'jaarButton'}>2020</button>
                            </div>
                            <img src={barchartImage ? BarChartTwo : BarChartOne } alt="barchart" />
                        </div>
                        <div>
                            
                        </div>
                    </div>

                </div>
            </div>
        

            </div>
        </div>
        );
    }
    