import { useInView } from 'react-intersection-observer';

export default function Navigation (props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

    return (
    <article className="navigation">     
        <nav>
            <ul>
                <a href="#Start">
                    {inView ? 
                    <li id="navIntroduction" className="links active">Introduction</li> 
                    : 
                    <li id="navIntroduction" className="links">Introduction</li>
                    }
                </a>
                        
                <a href="#sportSection">
                    {inView ? 
                    <li id="navIntroduction" className="links active">Het begin</li> 
                    : 
                    <li id="navIntroduction" className="links">Het begin</li>
                    }
                </a> 
                <a href="#sportSection">
                    <li id="navIntroduction" className="links">sport</li>
                </a> 
                <a href="#sportSection">
                    <li id="navIntroduction" className="links">openbaar vervoer</li>
                </a> 
                <a href="#sportSection">
                    <li id="navIntroduction" className="links">vakantie</li>
                </a> 
            </ul>
        </nav>
    </article>
    );
}