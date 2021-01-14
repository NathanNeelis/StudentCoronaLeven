import Message from './message';
// import VideoMessage from './messageVideo';

export default function Work (props) {
    return (
    <section id="work" className="Topic">
        <article className="datavisWork">
            <div className="TopicInfo">
                <h2>De afname van betaald werkende jongeren van 15 tot 25 jaar was in februari 1.4 miljoen.</h2>
                <p>Steeds meer jongeren raken hun (bij)baan kwijt als gevolg van de Coronacrisis</p>
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
const messageArthur = 'Doordat ik muziek maak voor mijn werk kon ik dit gelukkig thuis doen. In mijn geval was dit juist fijner, nu kon ik namelijk nog meer muziek maken doordat we ook geen les hadden op school. Het enige probleem was dat het moeilijker was om samenwerkingen aan te gaan in het echt. Normaliter gingen we dan samen de studio in, maar dit doen we nu digitaal.';

const Denise = 'Denise';
const messageDenise = 'De december lockdown is de eerste waarin ik niet doorbetaald krijg. Pfoe ik weet nog niet hoe ik volgende maand daarmee rond ga komen. Ook wel echt klaar met die lelijke 1,5 meter hesjes man😫';

const Justin = 'Justin';
const messageJustin = 'Sinds ik begon met studeren ben ik gestopt met werken en ik heb ook geen bijbaan meer gehad sinds die tijd. Voor mij is er eigenlijk niks veranderd omdat nog steeds gewoon mijn stufi krijg. Al zou ik het wel fijn vinden om mijn vorige ICT baan nu vanuit te kunnen doen, net als hoe ik nu studeer. 👨‍💻';

const Nathan = 'Nathan';
const messageNathan = 'Het afgelopen jaar heb ik bijna niet kunnen werken. Dit betekend voor mij dat er niet genoeg geld binnenkomt voor de huur en eten. Dit heeft een hoop stress gegeven waarin ik ook veel op zoek ben geweest naar een alternatieve bijbaan die ook met mijn opleiding te combineren was. Maar dat is verdomd lastig in Corona tijd!';