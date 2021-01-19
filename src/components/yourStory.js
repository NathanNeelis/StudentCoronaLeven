import BookIcon from '../img/background-icon3.svg'
import Dagboek from '../documents/hetcoronadagboek.pdf'

export default function Intro (props) {
    return (
    <section id="yourstory" className="book">
        <a href='#Start'>
        <div className="toTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="11.25" viewBox="0 0 64.017 22.598">
                    <path id="Path_345" data-name="Path 345" d="M842-601.769l30.77,17.549,30.77-17.549" transform="translate(-840.761 603.941)" fill="none" stroke="#ffffff" stroke-width="5"/>
            </svg>
           <p>Terug naar boven</p>
       </div></a>
       <div className="endContainer">
        <div className="BookBGOne">
            <h4>En nu jouw verhaal…</h4>
            <p>Bestel het Corona Dagboek en leg jouw 2020 verhaal vast. </p>
                <div>
                    <img src={BookIcon} alt="Corona Icon" />
                </div>
                <a href={Dagboek} target="blank" className="BookButton">Ontdek het Corona Dagboek</a>
        </div>
       </div>
    </section>
    );
}