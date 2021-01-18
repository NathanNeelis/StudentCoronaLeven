import Message from './message';
import IframeMessage from './messageIframe';
import MessageImage from './messageImage'
import Metro from '../img/metro.png';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'


export default function PublicTransport (props) {
    return (
    <section id="OV" className="Topic">
        <article className="datavisPT">
            <div className="TopicInfo">
                <h2>Wat is de beste tijd om met het OV te reizen?</h2>
                <p></p>
            </div>
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <MessageImage src={AvatarDenise} name={Denise} message={messageOne} side='messageRight' image={Metro} alt="Weesperplein image" />
                <Message src={AvatarArthur} name={Arthur} message={messageTwo} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageThree} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageFour} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageFive} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageSix} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageSeven} side='messageRight' />
                <IframeMessage src={AvatarNathan} name={Nathan} message={messageEight} side='messageLeft' url='https://giphy.com/embed/12E3pQ4coQ4EOA' title='Scooter' />
                <Message src={AvatarNathan} name={Nathan} message={messageNine} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageTen} side='messageLeft' />
            </div>
        </article> 
    </section>
    );
}

// OUDE BERICHTEN 
// const messageArthur = 'In het begin reisde ik wel een stuk minder. Na 1 maand ben ik even samen gaan wonen met mijn vriendin zodat ik niet zoveel met het ov hoefde te reizen. Toen ging ik vaker met de fiets naar school of vrienden. Na een tijdje ben ik langzamerhand meer gaan reizen met het OV. Dit omdat ik me in het begin een beetje bezwaard voelde om het OV te gebruiken. Ik heb hooikoorts en de blikken die mensen je geven als je niest zijn niet al te best 🤧.';
// const videoDenise = 'https://www.youtube.com/watch?v=fP9Ddp3eF00';
// const messageJustin = 'Ik reisde altijd met de trein als ik naar school moest reizen, maar ik vond dat niet heel prettig meer sinds corona in ons land kwam. Ik ben wel blij dat we momenteel in een lockdown zitten, zodat ik nu even niet meer een trein hoef in te stappen.';
// const messageNathan = 'Sinds de eerste lockdown probeer ik het OV te vermijden. Voor mij gevoel is dit echt de eerste plek waar ik het virus snel te pakken ga krijgen. Elke keer dat ik wel met het OV moest reizen, viel me op dat ik elke keer weer mensen tegenkwam die niet een mondkapje om hadden. En dit irriteerde me mateloos. Zo ben ik op een keer net zolang iemand boos gaan aanstaren tot degene haar mondkapje op deed.';


const Arthur = 'Arthur';
const Denise = 'Denise';
const Justin = 'Justin';
const Nathan = 'Nathan';

const messageOne = '';
const messageTwo = 'Wat doe jij op school dan?';
const messageThree = 'Wordt gek van mn buren thuis man';
const messageFour = 'Weer die gekke italianen?';
const messageFive = 'Ja ben echt al maanden niet meer met OV geweest maar werd nu wel gek van';
const messageSix = 'Ik zou nu echt niet in die vieze trein stappen 😷 ';
const messageSeven = 'Scooter wilde niet starten. Krijg je dat weer kutzooi..';
const messageEight = '<gifje> https://giphy.com/gifs/12E3pQ4coQ4EOA';
const messageNine = 'Het OV is echt vragen om Corona volgens mij.';
const messageTen = 'Haha maar als er niemand in het ov reist ben je toch gewoon safe? 😏';


