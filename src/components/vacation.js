import Message from './message';
// import VideoMessage from './messageVideo';

export default function Vacation (props) {
    return (
    <section id="vacation" className="Topic">
        <article className="datavisVacation">
            <div className="TopicInfo">
                <h2>Het aantal Nederlanders dat in het tweede kwartaal van 2020 op vakantie ging was 65 procent lager dan in het tweede kwartaal van 2019.</h2>
                <p></p>
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
const messageArthur = '2020 was het jaar dat ik sinds een tijdje meerdere vakanties had gepland. Ik zou naar Lissabon gaan (Sziget) & het Festival Down The Rabbit Hole. Ik had er superveel zin in maar heb het uit voorzorgsmaatregelen zelf maar gecanceld 😞.';

const Denise = 'Denise';
const messageDenise = 'Ik was bezig met een onwijs vette studiereis organiseren. Die heeft de dikke stempel cancelled gekregen. Weer jammer dit.';

const Justin = 'Justin';
const messageJustin = 'Ik ben eigenlijk al heel lang niet op vakantie geweest in de zomer maar ik vermaak me altijd wel prima. Ik ben alsnog gewoon vaak met vrienden wat gaan drinken maar de corona maatregelen waren toen wel iets minder streng. Soms was ik wel met een iets te grote groep maarja je wilt toch iets leuks doen in de zomervakantie.';

const Nathan = 'Nathan';
const messageNathan = 'Vanaf het begin van de Coronacrisis is het onduidelijk geweest of ik op vakantie kon. Dit gaf onzekerheid, want o, wat was ik toe aan vakantie na zo’n heftig jaar school. Tot op het laatste moment was het niet zeker of de grenzen open zouden gaan. Dit heeft al mijn voorpret bedorven.';