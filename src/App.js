import Intro from './components/intro';
import Sport from './components/sport';
import Navigation from './components/navigatie';
import PublicTransport from './components/publicTransport';
import SocialContact from './components/sociaalContact';
import Ondernemers from './components/ondernemers';
import Vacation from './components/vacation';
import Work from './components/work';
import Uitgaven from './components/uitgaven';
import WorkHome from './components/workHome';
import YourStory from './components/yourStory';
import './App.css';
import React, { useState } from 'react';

function App() {
      const [intro, setIntro] = useState(false)
      const [sport, setSport] = useState(false)
      const [publicTransport, setPublicTransport] = useState(false)
      const [contact, setContact] = useState(false)
      const [ondernemers, setOndernemers] = useState(false)
      const [vacation, setVacation] = useState(false)
      const [work, setWork] = useState(false)
      const [uitgaven, setUitgaven] = useState(false)
      const [workHome, setWorkHome] = useState(false)
      const [story, setStory] = useState(false)


      function enterIntroduction(){
          setIntro(true)
      }

      function leaveIntroduction(){
        setIntro(false)
      }

      function enterSport(){
        setSport(true)
      }

      function leaveSport(){
        setSport(false)
      }

      function enterPublicTransport(){
        setPublicTransport(true)
      }

      function leavePublicTransport(){
        setPublicTransport(false)
      }

      function enterContact(){
        setContact(true)
      }

      function leaveContact(){
        setContact(false)
      }

      function enterOndernemers(){
        setOndernemers(true)
      }

      function leaveOndernemers(){
        setOndernemers(false)
      }

      function enterVacation(){
        setVacation(true)
      }

      function leaveVacation(){
        setVacation(false)
      }

      function enterWork(){
        setWork(true)
      }

      function leaveWork(){
        setWork(false)
      }

      function enterUitgaven(){
        setUitgaven(true)
      }

      function leaveUitgaven(){
        setUitgaven(false)
      }

      function enterWorkHome(){
        setWorkHome(true)
      }

      function leaveWorkHome(){
        setWorkHome(false)
      }

      function enterStory(){
        setStory(true)
      }

      function leaveStory(){
        setStory(false)
      }



  return (
    <div>
      <div className="wrapper">

        <Navigation 
          introduction={intro} 
          sport={sport} 
          publicTransport={publicTransport} 
          contact={contact} 
          ondernemers={ondernemers}
          vacation={vacation} 
          work={work}
          uitgaven={uitgaven}
          workhome={workHome}
          story={story}
        />
        <div className="scroll-container">
          <div onMouseEnter={enterIntroduction} onMouseLeave={leaveIntroduction}>
            <Intro />
            
          </div>
          <div onMouseEnter={enterContact} onMouseLeave={leaveContact}>
            <SocialContact />
          </div>
          <div onMouseEnter={enterSport} onMouseLeave={leaveSport}>
            <Sport />
          </div>
          <div onMouseEnter={enterPublicTransport} onMouseLeave={leavePublicTransport}>
            <PublicTransport />
          </div>
          <div onMouseEnter={enterVacation} onMouseLeave={leaveVacation}>
            <Vacation />
          </div>
          <div onMouseEnter={enterWork} onMouseLeave={leaveWork}>
            <Work />
          </div>
          <div onMouseEnter={enterWorkHome} onMouseLeave={leaveWorkHome}>
            <WorkHome />
          </div>
          <div onMouseEnter={enterOndernemers} onMouseLeave={leaveOndernemers}>
            <Ondernemers />
          </div>
          <div onMouseEnter={enterUitgaven} onMouseLeave={leaveUitgaven}>
            <Uitgaven />
          </div>
          <div onMouseEnter={enterStory} onMouseLeave={leaveStory}>
            <YourStory />
          </div>
          {/* <section id="extraVacatiom" className="Topic">
            <div>
            {allData && <div>
            <MakeVisualization data={cleaningData(allData)}/>
            </div> }
            </div>
          </section> */}

        </div>
      </div>
      
    </div>
  );
}

export default App;

