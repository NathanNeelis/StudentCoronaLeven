import Message from './message';
import MessageImage from './messageImage'
import Monitor from '../img/monitor.jpg';
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
            <Message src={AvatarDenise} name={Denise} message={messageOne} side='messageRight' />
                <MessageImage src={AvatarDenise} name={Denise} message={messageTwo} side='messageRight' image={Monitor} alt="Mountainbike image" />
                <Message src={AvatarNathan} name={Nathan} message={messageThree} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageFour} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageFive} side='messageRight' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const Denise = 'Denise';
const Justin = 'Justin';
const Nathan = 'Nathan';

const messageOne = 'To Do';
const messageTwo = 'To Do';
const messageThree = 'To Do';
const messageFour = 'To Do';
const messageFive = 'To Do';