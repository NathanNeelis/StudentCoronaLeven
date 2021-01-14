import Message from './message';
// import VideoMessage from './messageVideo';

export default function Ondernemers (props) {
    return (
    <section id="ondernemers" className="Topic">
        <article className="datavisOndernemers">
            <div className="TopicInfo">
                <h2>Consumenten besteden in 2020 minder geld (6,9%) aan diensten zoals het theater of de sportschool, maar juist meer (2,8%) aan voeding en genotsmiddelen.</h2>
                <p>Bezuiniging binnenlandse consumptie door huishoudens.</p>
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