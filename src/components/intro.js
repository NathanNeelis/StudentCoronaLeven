import Nathan from '../img/nathan.svg'
import Denise from '../img/denise.svg'
import Arthur from '../img/arthur.svg'
import Justin from '../img/justin.svg'
import Persona from './persona'

export default function Intro (props) {
    return (
    <section className="introduction">
        <div>
            <h1 className="title">
            Het leven van een student in corona
            </h1>
            <p className="intro">
            Een groot deel van jongvolwassen konden in januari niet meer naar sportverenigingen en sportscholen. Hier vielen ook veel studenten tussen die nu thuis of in een park in de buurt moesten sporten. De meest populaire sport die niet meer beoefend kon worden was voetbal, gevolgd door trainen in de sportschool.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="11.25" viewBox="0 0 64.017 22.598" className="bounce">
                <path id="Path_345" data-name="Path 345" d="M842-601.769l30.77,17.549,30.77-17.549" transform="translate(-840.761 603.941)" fill="none" stroke="#707070" stroke-width="5"/>
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


// <img src={Nathan} alt='Persona Nathan' className='personaNathan' />