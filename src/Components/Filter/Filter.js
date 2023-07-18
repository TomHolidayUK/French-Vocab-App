import React, { Component } from 'react';
import vocabulary from '../FrenchVocabularyGame/Vocabulary.js';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTypes: [],
    };
  }

// From the filters selected, make a custom list 
createCustomList = () => {
    const { selectedTypes } = this.state;
    // console.log('selected types', selectedTypes);
    const filteredData = vocabulary.filter(item => selectedTypes.includes(item.type));
    console.log('filteredData', filteredData);
    // filtered data is the new custom list 
    };

// Detect the user changing the filters 
handleCheckboxChange = (event) => {
const { value, checked } = event.target;
// const { selectedTypes } = this.state;
if (checked) {
    this.setState((prevState) => ({
    selectedTypes: [...prevState.selectedTypes, value],
    }));
} else {
    this.setState((prevState) => ({
    selectedTypes: prevState.selectedTypes.filter(category => category !== value),
    }));
};
};


  render() {
    const { selectedTypes } = this.state;
    return (
      <div>
        <h1>French Vocabulary Game</h1>
        <div id="wordCategory">
          <h3>Select the amount and the type of words that you want to learn, and this programme will make you a randomised list of words from our database that meet your requirements, then it's time to get learning!</h3>
          <label><input type="checkbox" value="adjectives" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('adjectives')}/>
            Adjectives
          </label>
          <label><input type="checkbox" value="nouns" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('nouns')}/>
            Nouns
          </label>
          <label><input type="checkbox" value="verbs" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('verbs')}/>
            Verbs
          </label>
          <label><input type="checkbox" value="prepositions" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('prepositions')}/>
            Prepositions
          </label>
          {/* <div>
            Selected Types: {selectedTypes.join(', ')}
          </div> */}
        </div>
        <button className='grow f4 mh2 link dib bg-light-purple' onClick={this.createCustomList}>Generate List</button>
      </div>
    );
  }
}

export default Filter;