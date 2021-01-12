import Intro from './components/intro';
import Sport from './components/sport';
import Navigation from './components/navigatie-version2';
import './App.css';
import React, { useState } from 'react';

function App() {
      const [intro, setIntro] = useState(false)
      const [begin, setBegin] = useState(false)

      function enterIntroduction(){
          setIntro(true)
      }

      function leaveIntroduction(){
        setIntro(false)
      }

      function enterBegin(){
        setBegin(true)
      }

      function leaveBegin(){
        setBegin(false)
      }


  return (
    <div>
    <Navigation introduction={intro} begin={begin}/>
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

