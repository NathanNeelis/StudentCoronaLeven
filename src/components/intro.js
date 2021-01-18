import Nathan from '../img/nathan.svg'
import Denise from '../img/denise.svg'
import Arthur from '../img/arthur.svg'
import Justin from '../img/justin.svg'
import Persona from './persona'

export default function Intro (props) {
    return (
    <section id="Start" className="introduction">
        <div className='second-background'></div>
        <div className="leftCorona">
            <svg xmlns="http://www.w3.org/2000/svg" className="SvGbackground-left" width="20vw" viewBox="0 0 668 550">
                <path id="Path_468_1_" class="st0" d="M37.1,550c-2.5-5.3-5.2-11.7-8.5-17.8c-76.4-141.5,18.9-99.9,68.5-210.7s56.4-5.3,155.2-200.7
                c22.7-45,18.9-149.8,82.8-113.1s57.9,68.1,80.6,113.1c98.8,195.4,105.6,89.9,155.2,200.7c49.6,110.8,144.9,69.2,68.5,210.7
                c-3.3,6.1-6,12.5-8.5,17.8"/>
            </svg>
        </div>
        <div className="rightCorona">
            <svg xmlns="http://www.w3.org/2000/svg" className="SvGbackground-right" height="100vh" viewBox="0 0 856.3 1080">
            <path class="st0" d="M3349.2,27.3c-11.3-18.5-14.7-86.3-70.6-65.6s-276.3,2.8-276.3,2.8h0c0,0-220.4,17.9-276.3-2.8
            c-55.9-20.7-59.3,47.1-70.6,65.6c-67,109.5-162.3,357.3,18.3,432.1c180.5,74.8,204.2,136.7,204.2,260.8
            c0,58.2,8.5,330.8,124.5,330.8s124.5-272.6,124.5-330.8c0-124,23.6-186,204.2-260.8C3511.4,384.7,3416.2,136.8,3349.2,27.3z"/>
            <path class="st0" d="M771.3,65.6c-11.2-18.3-35.8-41.1-70-65C509,0,655.3,0,428.8,0c-0.4,0-0.9,0-1.3,0C201,0,347.4,0,155,0.6
            c-34.2,23.9-58.8,46.7-70,65C18.6,174.1-75.8,419.7,103.1,493.8s202.3,135.5,202.3,258.4c0,57.5,16.7,204.7,122.1,326.3
            c0,1,0,1.5,0,1.5c0.2-0.3,0.4-0.5,0.7-0.8c0.2,0.3,0.4,0.5,0.7,0.8c0,0,0-0.5,0-1.5c105.4-121.6,122.1-268.8,122.1-326.3
            c0-122.9,23.4-184.3,202.3-258.4C932.1,419.7,837.7,174.1,771.3,65.6z"/>
            </svg>
        </div>
            <div className="ti0">
                <h1 className="title">
                Corona in je studententijd
                </h1>
                <p className="intro">
                2020 was een bizar jaar met veel bijzondere omstandigheden. Mensen moesten thuis werken, de horeca ging dicht en er waren weinig mogelijkheden voor sport, sociaal contact en gezelligheid. Studenten zaten dagen thuis voor hun lessen, stage en huiswerk. Hieronder leest u wat wij van de verschillende gebeurtenissen vonden, ook wel : Het leven van een student in corona.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="11.25" viewBox="0 0 64.017 22.598" className="bounce">
                    <path id="Path_345" data-name="Path 345" d="M842-601.769l30.77,17.549,30.77-17.549" transform="translate(-840.761 603.941)" fill="none" stroke="#ffffff" stroke-width="5"/>
                </svg>

            </div>
            <div>
                <article className="persona">
                    <h2>Wie zijn wij?</h2>
                    <div>
                        <Persona image={Arthur} name="Arthur" altText='Persona Arthur' />
                        <Persona image={Denise} name="Denise" altText='Persona Denise' />
                        <Persona image={Justin} name="Justin" altText='Persona Justin' />
                        <Persona image={Nathan} name="Nathan" altText='Persona Nathan' />
                    </div>
                </article>
            </div>

    </section>
    );
}