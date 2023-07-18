import './App.css';
import React from 'react';
import Filter from './Components/Filter/Filter';
import pic from './Background/3.jpg';
import ParticlesBg from "particles-bg";
import FrenchVocabularyGame from './Components/FrenchVocabularyGame/FrenchVocabularyGame';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customList: [],
    };
  }

  // handleStateUpdate = (newValue) => {
  //   this.setState({ customList: newValue });
  //   console.log('custom list in app.js', this.state.customList)
  // };

  handleStateUpdate = (newValue) => {
    this.setState({ customList: newValue }, () => {
      console.log('custom list in app.js', this.state.customList);
    });
  };

  render () {
    console.log('customList', this.state.customList)
    return (
      <div className='App' style={{ backgroundImage: `url(${pic})`,backgroundRepeat: 'no-repeat', backgroundSize:"contain"}}>
      {/* <div className="container"> */}
      <div className="background-image">
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <Filter customList={this.state.customList} onUpdateState={this.handleStateUpdate}/>
        <FrenchVocabularyGame customList={this.state.customList}/>
        <div className="fixed-bottom-right">Made by Tom Holiday</div>
      </div>
      </div>
    );
  }
}

// Best backgrounds: 3, 8, 9?, 10, 11?, 12?, 13?, 14, 16?

export default App;
