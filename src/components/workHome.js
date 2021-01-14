import Message from './message';
// import VideoMessage from './messageVideo';

export default function WorkHome (props) {
    return (
    <section id="workHome" className="Topic">
        <article className="datavisWH">
            <div className="TopicInfo">
                <h2>Bijna 4 op de 10 werkenden werkten vorig jaar thuis</h2>
                <p>In 2019 werkte 39 procent van alle werkenden thuis. Het merendeel deed dat incidenteel en vaak niet op een vaste dag. De hoogste percentages thuiswerkers waren te vinden onder overheidsbestuurders, managers ICT en beleidsadviseurs. In 2019 faciliteerden 8 op de 10 grotere bedrijven telewerken.</p>
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
const messageArthur = 'to do';

const Denise = 'Denise';
const messageDenise = 'to do';

const Justin = 'Justin';
const messageJustin = 'to do';

const Nathan = 'Nathan';
const messageNathan = 'to do';