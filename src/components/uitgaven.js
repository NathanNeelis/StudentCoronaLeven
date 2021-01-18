import Message from './message';
import MessageImage from './messageImage'
import Vogel from '../img/vogel.jpg';
import Switch from '../img/switch.png';
import PSFive from '../img/vogel.jpg';
import Thomos from '../img/thomos.jpg';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'

export default function Uitgaven (props) {
    return (
    <section id="uitgaven" className="Topic">
        <article className="datavisUitgaven">
            <div className="TopicInfo">
                <h2>Van sportgear tot pizza pepperoni. Dit is hoe jullie je hebben laten verleiden.</h2>
                <p></p>
            </div>
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <MessageImage src={AvatarDenise} name={Denise} message={messageOne} side='messageRight' image={Switch} alt="Switch image" />
                <Message src={AvatarDenise} name={Denise} message={messageTwo} side='messageLeft' />
                <MessageImage src={AvatarJustin} name={Justin} message={messageThree} side='messageRight' image={Thomos} alt="Playstation 5 image" />
                <Message src={AvatarJustin} name={Justin} message={messageFour} side='messageLeft' />
                <Message src={AvatarArthur} name={Arthur} message={messageFive} side='messageRight' />
                <MessageImage src={AvatarArthur} name={Arthur} message={messageSix} side='messageLeft' image={Thomos} alt="Thomos image" />
                <Message src={AvatarNathan} name={Nathan} message={messageSeven} side='messageRight' />
                <MessageImage src={AvatarNathan} name={Nathan} message={messageEight} side='messageLeft' image={Vogel} alt="Selfie met vogel image" />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const Denise = 'Denise';
const Justin = 'Justin';
const Nathan = 'Nathan';

const messageOne = '';
const messageTwo = 'Hebben jullie iets met Blackfriday gevonden?';
const messageThree = 'Foto ps5';
const messageFour = 'kijk deze!';
const messageFive = 'Ja ik heb niks, ik spaar voor een nieuwe brommert';
const messageSix = '';
const messageSeven = 'Ik ben één van die mensen die een nieuw huisdier gekocht heeft';
const messageEight = '';

