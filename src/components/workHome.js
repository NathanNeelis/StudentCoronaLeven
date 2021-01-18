import Message from './message';
import MessageImage from './messageImage'
import IframeMessage from './messageIframe'
import Monitor from '../img/monitor.jpg';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'
import HomeWorkVisual from './workHome-visual'


export default function WorkHome (props) {
    return (
    <section id="workHome" className="Topic">
        <article className="datavisWH">
            <div className="TopicInfo">
                <h2>Altijd maar zeuren dat je thuis wil werken, nu je zin?</h2>
                <p>Deze topfuncties kunnen gemakkelijk thuis werken. Welke heb jij als studenten bijbaantje gehad?</p>
            </div>
            <HomeWorkVisual />
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message src={AvatarNathan} name={Nathan} message={messageOne} side='messageRight' />
                <MessageImage src={AvatarNathan} name={Nathan} message={messageTwo} side='messageRight' image={Monitor} alt="Mountainbike image" />
                <Message src={AvatarArthur} name={Arthur} message={messageThree} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageFour} side='messageLeft' />
                <IframeMessage src={AvatarJustin} name={Justin} message={messageFive} side='messageLeft' url='https://giphy.com/embed/Ru9sjtZ09XOEg' title='bye' />
                <Message src={AvatarNathan} name={Nathan} message={messageSix} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageSeven} side='messageRight' />
                <Message src={AvatarDenise} name={Denise} message={messageEight} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageNine} side='messageRight' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const Denise = 'Denise';
const Justin = 'Justin';
const Nathan = 'Nathan';

const messageOne = 'Ik heb een mooi beeldscherm gekocht om “beter thuis te kunnen werken” jongens!';
const messageTwo = '';
const messageThree = 'Lekker hoor, ik ben er helemaal klaar mee om thuis te werken. ';
const messageFour = 'Imma just gonna leave';
const messageFive = 'gif';
const messageSix = 'Wel lekker geen reistijd meer. ';
const messageSeven = 'Hoe laat willen jullie meeten morgen dan ?';
const messageEight = 'We hebben pas om 14.40 feedback, dus verwacht dat we nog wel tot uurtje of 4 hebben.';
const messageNine = 'Half 10 is priem ';



