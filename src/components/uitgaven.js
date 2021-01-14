import Message from './message';
// import VideoMessage from './messageVideo';

export default function Uitgaven (props) {
    return (
    <section id="uitgaven" className="Topic">
        <article className="datavisUitgaven">
            <div className="TopicInfo">
                <h2>In het derde kwartaal van 2020 gaven Nederlandse consumenten 38,1 procent meer uit aan Nederlandse webwinkels dan in hetzelfde kwartaal een jaar eerder.</h2>
                <p>In het tweede kwartaal was dit nog 55 procent meer, de hoogste groei tot nu toe gemeten.</p>
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
const messageArthur = 'Tijdens de corona heb ik minder uitgegeven dan normaal, ik kan ineens erg goed sparen omdat er een hoop verleiding wegvalt. Je ziet minder mensen dus ik koop ook minder kleding (wat een grote stap is voor mij 😂). Ik merk wel dat ik meer eten ben gaan bestellen omdat je toch dat restaurant gevoel wil krijgen af en toe. Even niet koken maar wat lekkers bestellen.';

const Denise = 'Denise';
const messageDenise = 'Het enige dat ik echt kut vind is dat we weer terug gaan naar de verplichte winkelwagentjes. Ik wordt echt blut als ik die karretjes elke keer maar vol knal omdat het toch wel past. En weet je hoe smerig die karretjes zijn.';

const Justin = 'Justin';
const messageJustin = 'Mijn koopgedrag is eigenlijk niet heel erg veranderd, ik bestelde toch bijna alles al online. Ik merk wel dat ik wat vaker videogames koop dan eerst maar dat komt waarschijnlijk omdat ik voorderest niet heel veel meer heb te doen. Meestal speel ik ze niet eens meer uit voordat ik de volgende koop.';

const Nathan = 'Nathan';
const messageNathan = 'Elke keer die toch nog steeds te drukke winkels in. Afgelopen jaar heb ik mijn boodschappen in sneltreinvaart gedaan en heb ik de meeste overige dingen online besteld. Waar ik me afgelopen helemaal groen en geel aan heb lopen ergeren is het verplichte karretje of winkelmandje, die in veel winkels ook niet even van te voren schoongemaakt wordt. Een positieve wending in dit verhaal is dat ik meestal nog meer 1 keer per week naar de winkel hoef/ga.';