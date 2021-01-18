import Message from './message';
import MessageImage from './messageImage';
import SportContainer from './sport-visual';
import MTB from '../img/mtb.jpg';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'

export default function Sport (props) {
    return (
    <section id="sportSection" className="Topic">
        <article className="datavisSport">
            <div className="TopicInfo">
                <h2>Hee student! Sport jij al illegaal of is jouw sport nog toegestaan?</h2>
                <p></p>
            </div>
            <SportContainer />
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message src={AvatarArthur} name={Arthur} message={messageOne} side='messageRight' />
                <Message src={AvatarDenise} name={Denise} message={messageTwo} side='messageLeft' />
                <Message src={AvatarArthur} name={Arthur} message={messageThree} side='messageRight' />
                <Message src={AvatarDenise} name={Denise} message={messageFour} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageFive} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageSix} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageSeven} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageEight} side='messageLeft' />
                <MessageImage src={AvatarNathan} name={Nathan} message={messageNine} side='messageRight' image={MTB} alt="Mountainbike image" />
                <Message src={AvatarArthur} name={Arthur} message={messageTen} side='messageLeft' />
                <Message src={AvatarArthur} name={Arthur} message={messageEleven} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageTwelve} side='messageLeft' />
                <Message src={AvatarJustin} name={Justin} message={messageThirteen} side='messageRight' />
                <Message src={AvatarNathan} name={Nathan} message={messageFourteen} side='messageLeft' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
// const messageArthur = 'Ik heb in 2020 alleen thuis aan zo’n apparaat opgetrokken en dips gedaan. Ik heb vroeger heel veel gesport maar heb er tegenwoordig niet meer zoveel zin in. Krijg je al snel als je een vriendin hebt. Ik ben zo’n typische vrijgezel (ik ben weer op de markt) sporter 😅';

// const messageDenise = 'Ik werk al een aantal jaar in een trampoline park. Na werken dus nog lekker even in het zweet werken met elkaar.';
const Denise = 'Denise';

const Justin = 'Justin';
// const messageJustin = 'Ik ben nooit echt sportief geweest, dus eigenlijk maakte mij het niet zoveel uit dat veel sportverenigingen moesten sluiten. Meestal ging ik in rond de zomer naar de sportschool met een vriend van me die het hele jaar door erg fanatiek is met krachttraining. Ik ben eigenlijk wel blij dat ik dat nu een jaartje kan overslaan. 😅';

const Nathan = 'Nathan';
// const messageNathan = 'Voor de Coronacrisis was ik al te veel aangekomen. Ik was net bezig met afvallen en toen werden de sportscholen gesloten. Hier was ik op dat moment totaal niet mee eens maar moest me erbij neer leggen. 😒 Na twee weken chagrijnig te zijn van niet kunnen sporten besloot ik me te gaan focussen op buitensport.';

const messageOne = 'Ik hoor dat de sportscholen ook dicht gaan haha, maar goed dat ik mijn abbo niet heb verlengd 😂 ';
const messageTwo = 'Ja i dunno ik ben maar rondjes gaan lopen buiten hier..';
const messageThree = 'Haha om de prachtige sloterplas.';
const messageFour = 'Ja kom ineens hele nieuwe kant van de stad tegen elke keer.';
const messageFive = 'Ik sport toch altijd buiten! geen last van 💁';
const messageSix = 'Dat scheelt.';
const messageSeven = 'Het is wel ineens veel drukker op de MTB baan! Slome amateurs die in continu in moet halen.';
const messageEight = 'MTB?';
const messageNine = '🚴🏻🚴🏻';
const messageTen = 'Aah.';
const messageEleven = 'Hopen dat de HvA snel weer open gaat dat we nog een beetje beweging hebben, wordt tering dik zo. 🙃 ';
const messageTwelve = 'Yo, ik was ff gamen 😅';
const messageThirteen = 'Waar gaat dit over?' ;
const messageFourteen = 'Sport Justin, doe je toch niet aan 🤷🏻';
