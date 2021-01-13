import Message from './message';
import Fitness from '../img/sport1.svg';
import Footbal from '../img/sport2.svg';
import Running from '../img/sport3.svg';
import Swimming from '../img/sport4.svg';
import Boxing from '../img/sport5.svg';
import Tennis from '../img/sport6.svg';
import Cycling from '../img/sport7.svg';
import Yoga from '../img/sport8.svg';
import SportCategories from './sportCategories';

export default function Sport (props) {
    return (
    <section id="sportSection" className="Topic">
        <article className="datavisSport">
            <div className="TopicInfo">
                <h2>Ruim een derde van de jongvolwassenen beoefent normaliter een sport die nu verboden is.</h2>
                <p>Team- en contactsporten en individuele binnensporten zijn het populairst bij de jongvolwassenen (18 tot 25 jaar). Deelname aan deze sporten neemt sterk af met de leeftijd. In 2019 beoefende 27 procent van de 18- tot 25-jarigen minstens één team- of contactsport, onder 65-plussers is dat 2 procent. Individuele binnensporten werden door 41 procent van de 18- tot 25-jarigen beoefend en door 21 procent van de 65-plussers.</p>
            </div>
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
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message name={Arthur} message={messageArthur} side='messageRight' />
                <Message name={Denise} message={messageDenise} side='messageLeft' />
                <Message name={Justin} message={messageJustin} side='messageRight' />
                <Message name={Nathan} message={messageNathan} side='messageLeft' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const messageArthur = 'Ik heb in 2020 alleen thuis aan zo’n apparaat opgetrokken en dips gedaan. Ik heb vroeger heel veel gesport maar heb er tegenwoordig niet meer zoveel zin in. Krijg je al snel als je een vriendin hebt. Ik ben zo’n typische vrijgezel (ik ben weer op de markt) sporter 😅';

const messageDenise = 'Ik werk al een aantal jaar in een trampoline park. Na werken dus nog lekker even in het zweet werken met elkaar.';
const Denise = 'Denise';

const Justin = 'Justin';
const messageJustin = 'Ik ben nooit echt sportief geweest, dus eigenlijk maakte mij het niet zoveel uit dat veel sportverenigingen moesten sluiten. Meestal ging ik in rond de zomer naar de sportschool met een vriend van me die het hele jaar door erg fanatiek is met krachttraining. Ik ben eigenlijk wel blij dat ik dat nu een jaartje kan overslaan. 😅';

const Nathan = 'Nathan';
const messageNathan = 'Voor de Coronacrisis was ik al te veel aangekomen. Ik was net bezig met afvallen en toen werden de sportscholen gesloten. Hier was ik op dat moment totaal niet mee eens maar moest me erbij neer leggen. 😒 Na twee weken chagrijnig te zijn van niet kunnen sporten besloot ik me te gaan focussen op buitensport.';