import React, { Component } from 'react';
import vocabulary from '../FrenchVocabularyGame/Vocabulary.js';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTypes: [],
      selectedNumberOfWords: '',
      selectAllChecked: false,
      readiness: '',
    };
  }

shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// From the filters selected, make a custom list 
createCustomList = () => {
    const { selectedTypes, selectedNumberOfWords } = this.state;
    // console.log('selected types', selectedTypes);
    // Filter the words to only include the types that the user wants (filter 1)
    const filteredData1 = vocabulary.filter(item => selectedTypes.includes(item.type));
    // Filter the words to only be the length that the user wants (filter 2)
    const filteredData2 = filteredData1.slice(0, selectedNumberOfWords);
    // console.log('filteredData2', filteredData2);
    
    // Now randomise the words (filter 3)
    const filteredData3 = this.shuffleArray(filteredData2);
    console.log('filteredData3', filteredData3);
    // filteredData3 is now the user-customised and randomised list 
    if (filteredData3.length > 0) {
      const { onUpdateState } = this.props;
      onUpdateState(filteredData3);
      this.setState({ readiness: 'ready' })
    } else {
      this.setState({ readiness: 'not ready' })
    }

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
        <div id="wordCategory">
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => this.props.onRouteChange('signout')} className='f4 link dim black underline ph3 pointer'>Sign Out</p>
          </nav>
          <h1>French Vocabulary Game</h1>
          <h5>Choose what words you want to learn, and this programme will make you a randomised list of words from our database that meet your requirements, then it's time to get learning!</h5>
            
          <div className="pb3 pt2">
          <h5>How many words do you want to learn?</h5>
            <select
              // className="form-select"
              // aria-label="Default select example"
              id="wordCategory"
              defaultValue=""
              onChange={this.handleSelectChange}>
              <option disabled value="">
                Select Number
              </option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          
          <h5>What type of words do you want to learn?</h5>
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

        <button className='grow pv1 mv3 f4 mh2 link dib bg-light-purple' onClick={this.createCustomList}>Generate List and Begin!</button>
        {(readiness === 'ready') && (<div>Your words are ready!</div>)}
        {(readiness === 'not ready') && (<h6>You haven't inputted sufficient details to setup the game!</h6>)}
      </div>
    );
  }
}

export default Filter;