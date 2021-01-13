import Message from './message';
import VideoMessage from './messageVideo';


export default function PublicTransport (props) {
    return (
    <section id="OV" className="Topic">
        <article className="datavisPT">
            <div className="TopicInfo">
                <h2>Op het dieptepunt waren er in 2020 tot 90% minder OV check-ins dan het vorige jaar.</h2>
                <p>In de tweede helft van maart 2020 is het dagelijks aantal instappers (check-ins) in het openbaar vervoer gedaald met bijna 90 procent ten opzichte van een vergelijkbare dag in 2019. Op 31 maart bedroeg het aantal check-ins 560 duizend, tegen 4,75 miljoen op een gemiddelde dinsdag in 2019. In verband met het coronavirus is het alleen nog toegestaan met het openbaar vervoer te reizen als het een noodzakelijke reis betreft, bijvoorbeeld vanwege een cruciaal beroep.</p>
            </div>
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message name={Arthur} message={messageArthur} side='messageRight' />
                <VideoMessage name={Denise} url={videoDenise} side='messageLeft' />
                <Message name={Justin} message={messageJustin} side='messageRight' />
                <Message name={Nathan} message={messageNathan} side='messageLeft' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
const messageArthur = 'In het begin reisde ik wel een stuk minder. Na 1 maand ben ik even samen gaan wonen met mijn vriendin zodat ik niet zoveel met het ov hoefde te reizen. Toen ging ik vaker met de fiets naar school of vrienden. Na een tijdje ben ik langzamerhand meer gaan reizen met het OV. Dit omdat ik me in het begin een beetje bezwaard voelde om het OV te gebruiken. Ik heb hooikoorts en de blikken die mensen je geven als je niest zijn niet al te best 🤧.';

const Denise = 'Denise';
const videoDenise = 'https://www.youtube.com/watch?v=fP9Ddp3eF00';

const Justin = 'Justin';
const messageJustin = 'Ik reisde altijd met de trein als ik naar school moest reizen, maar ik vond dat niet heel prettig meer sinds corona in ons land kwam. Ik ben wel blij dat we momenteel in een lockdown zitten, zodat ik nu even niet meer een trein hoef in te stappen.';

const Nathan = 'Nathan';
const messageNathan = 'Sinds de eerste lockdown probeer ik het OV te vermijden. Voor mij gevoel is dit echt de eerste plek waar ik het virus snel te pakken ga krijgen. Elke keer dat ik wel met het OV moest reizen, viel me op dat ik elke keer weer mensen tegenkwam die niet een mondkapje om hadden. En dit irriteerde me mateloos. Zo ben ik op een keer net zolang iemand boos gaan aanstaren tot degene haar mondkapje op deed.';