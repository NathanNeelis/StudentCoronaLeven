import Message from './message';
// import VideoMessage from './messageVideo';

export default function SocialContact (props) {
    return (
    <section id="SocialContact" className="Topic">
        <article className="datavisSC">
            <div className="TopicInfo">
                <h2>Van de jongeren (15 tot 25 jaar) heeft 96 procent minstens wekelijks contact met vrienden.</h2>
                <p>Jongeren zien elkaar vooral op school, maar in de weekenden zien komen zij amper nog vrienden tegen. Wie zien de mensen in het dagelijks leven nogsteeds met meest? </p>
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
const messageArthur = 'Mijn sociale contacten zie naast mijn vriendin en mijn vaste vrienden weinig. Ik blijf uit de buurt van mijn opa en oma en probeer zo min mogelijk naar mijn ouders te gaan als het niet nodig is. Mijn vrienden zie ik een stuk minder, maar als ik ze zie zijn we wel met 4/5 man. Ik probeer me zoveel mogelijk aan de regels te houden hierin maar het is lastig om tegen 2 mensen te zeggen dat ze niet mogen komen. ';

const Denise = 'Denise';
const messageDenise = 'Ik zie bijna iedereen alleen nog maar digitaal. Mijn ouders of andere vrienden heb ik al heel lang niet meer een echte knuffel kunnen geven. Ik voel me steeds vaker echt eenzaam in deze digitale wereld.';

const Justin = 'Justin';
const messageJustin = 'Ik ga zoals altijd nog steeds in het weekend wel wat drinken met wat vrienden maar we houden het meestal maar bij 2 of 3 personen, losstaand van hoeveel personen zijn toegestaan op dat moment. Misschien soms een risico maar we hebben anders niet veel beters te doen. 🤷‍♂️';

const Nathan = 'Nathan';
const messageNathan = 'Op het vlak van sociale contacten heb ik me het minst aan de maatregelen gehouden. Want waarom zou ik me wel zelf thuis helemaal opsluiten zonder sociaal contact terwijl de rest van Nederland dat eigenlijk ook niet doet? Nu is het niet dat ik naar grote groepen of illegale feesten ben geweest, maar gewoon bij vrienden thuis en dan soms met net iets meer mensen dan mocht.';