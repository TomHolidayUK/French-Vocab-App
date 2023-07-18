import React, { Component } from 'react';
import vocabulary from '../FrenchVocabularyGame/Vocabulary.js';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTypes: [],
      selectedNumberOfWords: '',
      selectAllChecked: false
    };
  }

// From the filters selected, make a custom list 
createCustomList = () => {
    const { selectedTypes, selectedNumberOfWords } = this.state;
    // console.log('selected types', selectedTypes);
    const filteredData1 = vocabulary.filter(item => selectedTypes.includes(item.type));
    const filteredData2 = filteredData1.slice(0, selectedNumberOfWords);
    console.log('filteredData2', filteredData2);
    // filtered data is the new custom list 
    const { onUpdateState } = this.props;
    onUpdateState(filteredData2);
    // this.setState({ readiness: 'ready' })
    this.setState({ readiness: 'ready' })
    };

// // Detect the user changing the filters 
// handleCheckboxChange = (event) => {
// const { value, checked } = event.target;
// // const { selectedTypes } = this.state;
// if (checked) {
//     this.setState((prevState) => ({
//     selectedTypes: [...prevState.selectedTypes, value],
//     }));
// } else {
//     this.setState((prevState) => ({
//     selectedTypes: prevState.selectedTypes.filter(category => category !== value),
//     }));
// };
// };

handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const { selectedTypes } = this.state;

    if (checked) {
      this.setState({
        selectedTypes: [...selectedTypes, value],
        selectAllChecked: selectedTypes.length + 1 === 4 // Check if all checkboxes are selected
      });
    } else {
      this.setState({
        selectedTypes: selectedTypes.filter(type => type !== value),
        selectAllChecked: false
      });
    }
  };

  handleSelectAllChange = (event) => {
    const { checked } = event.target;
    const { selectedTypes } = this.state;

    if (checked) {
      this.setState({
        selectedTypes: ['adjectives', 'nouns', 'verbs', 'prepositions'],
        selectAllChecked: true
      });
    } else {
      this.setState({
        selectedTypes: [],
        selectAllChecked: false
      });
    }
  };

handleSelectChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedNumberOfWords: value });
  };


  render() {
    const { selectedTypes, readiness, selectedNumberOfWords, selectAllChecked, customList } = this.state;
    return (
      <div>
        <h1>French Vocabulary Game</h1>
        <div id="wordCategory">
          <h3>Choose what words you want to learn, and this programme will make you a randomised list of words from our database that meet your requirements, then it's time to get learning!</h3>
          <div>
          <select id="wordCategory" defaultValue="" onChange={this.handleSelectChange}>
            <option disabled value="">How many words do you want to learn?</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            </select>
            </div>
            <div>What type of words do you want to learn?</div>
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
          <label><input type="checkbox" checked={selectAllChecked} onChange={this.handleSelectAllChange}/>
            <b>ALL</b>
            </label>
        </div>
        <button className='grow f4 mh2 link dib bg-light-purple' onClick={this.createCustomList}>Generate List and Begin!</button>
        {(readiness === 'ready') && (<div>Your words are ready!</div>)}
      </div>
    );
  }
}

export default Filter;