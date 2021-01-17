import Message from './message';
import MessageImage from './messageImage'
import Monitor from '../img/monitor.jpg';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'

export default function Work (props) {
    return (
    <section id="work" className="Topic">
        <article className="datavisWork">
            <div className="TopicInfo">
                <h2>Is de bodem van jouw ome DUO al in zicht?</h2>
                <p></p>
            </div>
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message src={AvatarDenise} name={Denise} message={messageOne} side='messageRight' />
                <MessageImage src={AvatarDenise} name={Denise} message={messageTwo} side='messageleft' image={Monitor} alt="Mountainbike image" />
                <Message src={AvatarArthur} name={Arthur} message={messageThree} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageFour} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageFive} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageSix} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageSeven} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageEight} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageNine} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageTen} side='messageLeft' />
                <Message src={AvatarArthur} name={Arthur} message={messageEleven} side='messageRight' />
                <Message src={AvatarDenise} name={Denise} message={messageTwelve} side='messageLeft' />
                <Message src={AvatarArthur} name={Arthur} message={messageThirteen} side='messageRight' />
                <Message src={AvatarNathan} name={Nathan} message={messageFourteen} side='messageLeft' />

            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const Denise = 'Denise';
const Justin = 'Justin';
const Nathan = 'Nathan';

const messageOne = 'Ben benieuwd of we deze keer open blijven.. Wordt een duur maandje anders..';
const messageTwo = 'Foto Denise';
const messageThree = 'Mijn album is goedgekeurd 👌🏻🤑';
const messageFour = 'Dus ik vind alles best haha, klote wel voor jou @Denise';
const messageFive = '🥳';
const messageSix = 'Mijn stufi is ook nog goedgekeurd 😅';
const messageSeven = 'Hahhahaha';
const messageEight = 'Haha Ome DUO laat ons nooit in de steek';
const messageNine = 'En ik me maar zorgen maken over of ik de huur wel kan betalen 🥺';
const messageTen = 'Verschil moet er wezen 😉';
const messageEleven = 'Maar @Denise krijgt dat trampolinepark van je nog wel een beetje subsidie dan?';
const messageTwelve = 'Deze maand helemaal 0. Probeer af en toe nog een beetje mails te beantwoorden maar dat zijn dan ook wel alle uurtjes die ik pak';
const messageThirteen = 'Aah okee';
const messageFourteen = 'En de overheid voor iedereen maar subsidies vrij maken, maar arme studenten vissen mooi achter het net.';
