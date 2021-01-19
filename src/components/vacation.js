import Message from './message';
import MessageImage from './messageImage'
import MTB from '../img/mtb.jpg';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'
import VacationVisual from './vacation-visual'


export default function Vacation (props) {
    return (
    <section id="vacation" className="Topic">
        <article className="datavisVacation">
            <div className="TopicInfo">
                <h2>Jezelf helemaal ontdekken in Thailand? Of toch maar weer een tripje van je bed naar de bank.</h2>
                <p></p>
            </div>
            <VacationVisual />
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message src={AvatarDenise} name={Denise} message={messageOne} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageTwo} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageThree} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageFour} side='messageLeft' />
                <Message src={AvatarJustin} name={Justin} message={messageFive} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageSix} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageSeven} side='messageRight' />
                <Message src={AvatarNathan} name={Nathan} message={messageEight} side='messageLeft' />
                <Message src={AvatarJustin} name={Justin} message={messageNine} side='messageRight' />
                <Message src={AvatarDenise} name={Denise} message={messageTen} side='messageLeft' />
                <MessageImage src={AvatarArthur} name={Arthur} message={messageEleven} side='messageRight' image={MTB} alt="Mountainbike image"/>
                <Message src={AvatarArthur} name={Arthur} message={messageTwelve} side='messageLeft' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
// const messageArthur = '2020 was het jaar dat ik sinds een tijdje meerdere vakanties had gepland. Ik zou naar Lissabon gaan (Sziget) & het Festival Down The Rabbit Hole. Ik had er superveel zin in maar heb het uit voorzorgsmaatregelen zelf maar gecanceld 😞.';

const Denise = 'Denise';
// const messageDenise = 'Ik was bezig met een onwijs vette studiereis organiseren. Die heeft de dikke stempel cancelled gekregen. Weer jammer dit.';

const Justin = 'Justin';
// const messageJustin = 'Ik ben eigenlijk al heel lang niet op vakantie geweest in de zomer maar ik vermaak me altijd wel prima. Ik ben alsnog gewoon vaak met vrienden wat gaan drinken maar de corona maatregelen waren toen wel iets minder streng. Soms was ik wel met een iets te grote groep maarja je wilt toch iets leuks doen in de zomervakantie.';

const Nathan = 'Nathan';
// const messageNathan = 'Vanaf het begin van de Coronacrisis is het onduidelijk geweest of ik op vakantie kon. Dit gaf onzekerheid, want o, wat was ik toe aan vakantie na zo’n heftig jaar school. Tot op het laatste moment was het niet zeker of de grenzen open zouden gaan. Dit heeft al mijn voorpret bedorven.';

const messageOne = 'Ee wanneer gaan ze die grenzen dicht gooien dan?';
const messageTwo = 'Geen idee hoop t niet heb dit jaar 2 vakanties geboekt, denk je slim in januari te boeken gaan misschien de grenzen dicht… 😅';
const messageThree = 'Ik boek nooit iets. Pak de auto en ga naar welk land op dat moment nog open is!';
const messageFour = 'Ga ook maar snel mijn motorrijbewijs halen, lekker touren 🏍';
const messageFive = 'Ik ga maar zoals iedere zomer bij het park hier zitten';
const messageSix = 'Beetje zuipen 😅';
const messageSeven = 'Ik was dus al het hele jaar bezig met die studiereis organiseren. Al zo ver, alles cancelled.';
const messageEight = 'Mooi kut dus. Zuipen klinkt als het beste idee tot nu toe.';
const messageNine = 'Wanneer gaan we zuipen dan?!';
const messageTen = '💃🏼🍻';
const messageEleven = '<foto Arthur met biertje>';
const messageTwelve = ' Ik wil wel weer zo’n avond.';



