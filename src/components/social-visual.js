import Friends from '../img/friends.svg'
import Family from '../img/family.svg'
import Neighbours from '../img/neighbours.svg'

export default function SocialVisual(props) {
    return (
        <div className="SCcontainer">
            <div className="SC2019">
                <div className="SCcategory">
                    <div className="SCFriends2019">
                        <img src={Friends} alt='vrienden icon' />
                    </div>
                    <p>Vrienden</p>
                </div>
                <div className="SCcategory">
                    <div className="SCFamily2019">
                        <img src={Family} alt='vrienden icon' />
                    </div>
                    <p>Familie</p>
                </div>
                <div className="SCcategory">
                    <div className="SCNeighbours2019">
                        <img src={Neighbours} alt='vrienden icon' />
                    </div>
                    <p>Buren</p>
                </div>
            </div>
            <div className="SCYear">
                <p><span>2019</span></p>
            </div>
            <div className="SC2020">
                <div className="SCcategory">
                    <div className="SCFriends2020">
                        <img src={Friends} alt='vrienden icon' />
                    </div>
                    <p>Vrienden</p>
                </div>
                <div className="SCcategory">
                    <div className="SCFamily2020">
                        <img src={Family} alt='vrienden icon' />
                    </div>
                    <p>Familie</p>
                </div>
                <div className="SCcategory">
                    <div className="SCNeighbours2020">
                        <img src={Neighbours} alt='vrienden icon' />
                    </div>
                    <p>Buren</p>
                </div>
            </div>
            <div className="SCYear">
                <p><span>2020</span></p>
            </div>
            <p className="footerText">*2020 Cijfers nog te publiceren door CBS</p>
        </div>
    );
}