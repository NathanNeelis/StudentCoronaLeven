import Intro from './components/intro';
import Sport from './components/sport';
import Navigation from './components/navigatie';
import PublicTransport from './components/publicTransport'
import './App.css';
import React, { useState } from 'react';

function App() {
      const [intro, setIntro] = useState(false)
      const [sport, setSport] = useState(false)
      const [publicTransport, setPublicTransport] = useState(false)

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


  return (
    <div>
    <Navigation introduction={intro} sport={sport} publicTransport={publicTransport} />
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
    </div>
    </div>
  );
}

export default App;

