import Intro from './components/intro';
import Sport from './components/sport';
import Navigation from './components/navigatie';
import PublicTransport from './components/publicTransport'
import SocialContact from './components/sociaalContact'
import './App.css';
import React, { useState } from 'react';

function App() {
      const [intro, setIntro] = useState(false)
      const [sport, setSport] = useState(false)
      const [publicTransport, setPublicTransport] = useState(false)
      const [contact, setContact] = useState(false)

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



  return (
    <div>
      <div className="wrapper">
        <Navigation introduction={intro} sport={sport} publicTransport={publicTransport} contact={contact} />
        <div className="scroll-container">
          <div onMouseEnter={enterIntroduction} onMouseLeave={leaveIntroduction}>
            <Intro />
          </div>
          <div onMouseEnter={enterSport} onMouseLeave={leaveSport}>
            <Sport />
          </div>
          <div onMouseEnter={enterPublicTransport} onMouseLeave={leavePublicTransport}>
            <PublicTransport />
          </div>
          <div onMouseEnter={enterContact} onMouseLeave={leaveContact}>
            <SocialContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

