import './App.css';
import React from 'react';
import TextInput from './Components/TextInput/TextInput';
import Filter from './Components/Filter/Filter';
import pic from './Background/3.jpg';
import ParticlesBg from "particles-bg";
import FrenchVocabularyGame from './Components/FrenchVocabularyGame/FrenchVocabularyGame';




class App extends React.Component {
  render () {
    return (
      <div className='App' style={{ backgroundImage: `url(${pic})`,backgroundRepeat: 'no-repeat', backgroundSize:"contain"}}>
      {/* <div className="container"> */}
      <div className="background-image">
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <Filter/>
        <FrenchVocabularyGame/>
        <div className="fixed-bottom-right">Made by Tom Holiday</div>
      </div>
      </div>
    );
  }
}

// Best backgrounds: 3, 8, 9?, 10, 11?, 12?, 13?, 14, 16?

export default App;
