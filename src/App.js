import Intro from './components/intro';
import Sport from './components/sport';
import Navigation from './components/navigatie-version2';
import './App.css';
import React, { useState } from 'react';

function App() {
      const [intro, setIntro] = useState(false)
      const [sport, setSport] = useState(false)

      function enterIntroduction(){
          setIntro(true)
      }

      function leaveIntroduction(){
        setIntro(false)
      }

      function enterBegin(){
        setSport(true)
      }

      function leaveBegin(){
        setSport(false)
      }


  return (
    <div>
    <Navigation introduction={intro} sport={sport}/>
    <div className="scroll-container">
      <div onMouseEnter={enterIntroduction} onMouseLeave={leaveIntroduction}>
        <Intro />
      </div>
      <div onMouseEnter={enterBegin} onMouseLeave={leaveBegin}>
        <Sport />
      </div>
    </div>
    </div>
  );
}

export default App;

