import Message from './message';
import AvatarNathan from '../img/nathan.svg'
import AvatarDenise from '../img/denise.svg'
import AvatarArthur from '../img/arthur.svg'
import AvatarJustin from '../img/justin.svg'
import SocialVisual from './social-visual'

export default function SocialContact (props) {
    return (
    <section id="SocialContact" className="Topic">
        <article className="datavisSC">
            <div className="TopicInfo">
                <h2>Kom jij je scherm nog uit? Of zijn je docenten ondertussen je beste matties?</h2>
                <p></p>
            </div>
            {/* <SocialVisual /> */}
        </article>

        <article className="messages">
            <h3>Wat vinden wij?</h3>
            <div className="messageContainer">
                <Message src={AvatarNathan} name={Nathan} message={messageOne} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageTwo} side='messageLeft' />
                <Message src={AvatarDenise} name={Denise} message={messageThree} side='messageRight' />
                <Message src={AvatarDenise} name={Denise} message={messageFour} side='messageLeft' />
                <Message src={AvatarJustin} name={Justin} message={messageFive} side='messageRight' />
                <Message src={AvatarArthur} name={Arthur} message={messageSix} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageSeven} side='messageRight' />
                <Message src={AvatarJustin} name={Justin} message={messageEight} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageNine} side='messageRight' />
                <Message src={AvatarNathan} name={Nathan} message={messageTen} side='messageLeft' />
                <Message src={AvatarNathan} name={Nathan} message={messageEleven} side='messageRight' />
            </div>
        </article> 
    </section>
    );
}


const Arthur = 'Arthur';
// const messageArthur = 'Mijn sociale contacten zie naast mijn vriendin en mijn vaste vrienden weinig. Ik blijf uit de buurt van mijn opa en oma en probeer zo min mogelijk naar mijn ouders te gaan als het niet nodig is. Mijn vrienden zie ik een stuk minder, maar als ik ze zie zijn we wel met 4/5 man. Ik probeer me zoveel mogelijk aan de regels te houden hierin maar het is lastig om tegen 2 mensen te zeggen dat ze niet mogen komen. ';

const Denise = 'Denise';
// const messageDenise = 'Ik zie bijna iedereen alleen nog maar digitaal. Mijn ouders of andere vrienden heb ik al heel lang niet meer een echte knuffel kunnen geven. Ik voel me steeds vaker echt eenzaam in deze digitale wereld.';

const Justin = 'Justin';
// const messageJustin = 'Ik ga zoals altijd nog steeds in het weekend wel wat drinken met wat vrienden maar we houden het meestal maar bij 2 of 3 personen, losstaand van hoeveel personen zijn toegestaan op dat moment. Misschien soms een risico maar we hebben anders niet veel beters te doen. 🤷‍♂️';

const Nathan = 'Nathan';
// const messageNathan = 'Op het vlak van sociale contacten heb ik me het minst aan de maatregelen gehouden. Want waarom zou ik me wel zelf thuis helemaal opsluiten zonder sociaal contact terwijl de rest van Nederland dat eigenlijk ook niet doet? Nu is het niet dat ik naar grote groepen of illegale feesten ben geweest, maar gewoon bij vrienden thuis en dan soms met net iets meer mensen dan mocht.';


const messageOne = 'Vanavond een biertje met z’n 4e?';
const messageTwo = 'Pff wordt helemaal leip van al die docenten, ik ben down.';
const messageThree = 'I dunno. Ik ga deze week nog naar mn ouders dus ik skip deze even.';
const messageFour = 'Ze willen nog steeds borreltje bij de buren doen 😒';
const messageFive = 'Jongens nee! Coronamaatregelen!';
const messageSix = 'Haha okee met ze 3e dan?';
const messageSeven = 'Haha nee, ik wil tequila🍹';
const messageEight = 'Ik heb nog wel citroenen';
const messageNine = 'Citroenen? Nee, gwn shots';
const messageTen = 'Tequila is niet te zuipen zonder citroen en zout man ☠️';
const messageEleven = 'Is al wel weer een tijd geleden dat ik het huis verlaten heb 😁';