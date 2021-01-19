import Message from './message';
import MessageImage from './messageImage';
import MessageVideo from './messageVideo'
import Sushi from '../img/sushi.png';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'
import BubblePlot from '../img/bubble-plot.svg'


export default function Ondernemers (props) {
    return (
    <section id="ondernemers" className="Topic">
        <article className="datavisOndernemers">
            <div className="TopicInfo">
                <h2>De centjes van papa en mama: Hoeveel geld geven zij dit jaar uit?</h2>
                <p>Gemiddelde uitgaves van huishoudens</p>
            </div>
            <div className="OndernemersContainer">
                <img src={BubblePlot} alt="Bubble plot" className="OndernemersVisual" />
            </div>
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message src={AvatarNathan} name={Nathan} message={messageOne} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageTwo} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageThree} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageFour} side='messageLeft' />
                <Message src={AvatarArthur} name={Arthur} message={messageFive} side='messageRight' />
                <Message src={AvatarNathan} name={Nathan} message={messageSix} side='messageLeft' />
                <MessageVideo src={AvatarNathan} name={Nathan} message={messageSeven} side='messageRight' url='www.youtube.com/watch?v=dO_q2qjgkfw' />
                <MessageImage src={AvatarDenise} name={Denise} message={messageEight} side='messageRight' image={Sushi} alt="Sushi image" />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const Denise = 'Denise';
const Justin = 'Justin';
const Nathan = 'Nathan';

const messageOne = 'Ik heb net een Amazon Prime abbo afgesloten. Ga nu toch niet meer naar de bioscoop!';
const messageTwo = 'Ik wacht wel weer tot ik naar de bios mag.';
const messageThree = 'Avondje theater lijkt me wel weer lachen. Weer is mensen in het echt zien!';
const messageFour = 'Ja of weer is uit eten. Dat bestellen wordt ook wat saai..';
const messageFive = 'Tikt flink aan al die Uber Eats bestellingen...';
const messageSix = 'Je kan ook zelf eens culinair doen 🍗🍗🍖';
const messageSeven = '';
const messageEight = 'Hier bestellen we nog gewoon sushi hoor. Beetje avondjes eten compenseren toch 🤷🏽‍♀️';
