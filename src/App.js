// App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import optionsData from './assets/data.json';

import CrImage from './components/CrImage.js';
import Options from './components/Options.js';
import HintButton from './components/HintButton.js';


function App() {
  const [clipPathValue, setClipPathValue] = useState('polygon(0px 0px, 100% 0px, 20% 65%, 0% 10%)');
  // State to hold the selected index
  const [selectedCriminiIndex, setSelectedCriminiIndex] = useState(null);

  const pickRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * optionsData.criminis.length);
    setSelectedCriminiIndex(randomIndex);
  };
  
  // Call pickRandomIndex when the component mounts
  useEffect(() => {
    pickRandomIndex();
  }, []); // empty dependency array means this effect runs once after the initial render

const [clickCount, setClickCount] = useState(0);

const handleButtonClick = () => {
  setClickCount((prevCount) => {
    if (prevCount === 0) {
      setClipPathValue('polygon(0px 0px, 100% 0px, 40% 70%, 0% 15%)');
    } else if (prevCount === 1) {
      setClipPathValue('polygon(0 0, 100% 0, 100% 50%, 0% 100%)');
    } else if (prevCount === 2) {
      setClipPathValue('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
    }

    return prevCount + 1;

  
  });
};

function handleRefChange(index, correct_crime_index) {
  if (index === correct_crime_index) {
    console.log("Correct crime index checked!");
  }
  else {
    alert("c'mon dawg...")
  }
}
  

  return (
    <div className="App">
      <header className="App-header">
        {/* Pass the crimini object to CrImage */}
        {/* {selectedCriminiIndex !== null && 
        <CrImage 
        clipPathValue={clipPathValue}
        crimini={optionsData.criminis[selectedCriminiIndex].image_url}
        selectedCriminiIndex={selectedCriminiIndex} />
        } */}
        {selectedCriminiIndex !== null && 
        <Options 
        handleRefChange={handleRefChange} 
        crimini={optionsData.criminis[selectedCriminiIndex]} 
        correctCrimeIndex={optionsData.criminis[selectedCriminiIndex].correct_crime_index} 
        />
        }
      <HintButton onClick={handleButtonClick} />
        {/* Other components */}
      </header>
    </div>
  );
}

export default App;
