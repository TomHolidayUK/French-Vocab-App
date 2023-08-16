import React, { Component } from 'react';
import vocabulary from '../FrenchVocabularyGame/Vocabulary.js';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTypes: [],
      selectedNumberOfWords: '',
      selectAllChecked: false,
      selectedDifficulty: '',
      readiness: '',
      data: [],
    };
  }
 
//  handleFileUpload = (e) => {
//   console.log(e)
//     const reader = new FileReader();
//     reader.readAsBinaryString(e.target.files[0]);
//     reader.onload = (e) => {
//       const data = e.target.result;
//       const workbook = XLSX.read(data, { type: "binary" });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const parsedData = XLSX.utils.sheet_to_json(sheet);
//       console.log(parsedData)
//       this.setState({ data: parsedData });
//     };
//   }

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
    // const filteredData1 = this.state.parsedData.filter(item => selectedTypes.includes(item.type));
    // console.log(selectedTypes)
    const filteredData1 = vocabulary.filter(item => selectedTypes.includes(item.type));
    console.log('filteredData1', filteredData1);
    // Filter the words to only be the length that the user wants (filter 2)
    const filteredData2 = filteredData1.slice(0, selectedNumberOfWords);
    console.log('filteredData2', filteredData2);
    
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
        selectedTypes: ['adjective', 'noun', 'verb', 'others'],
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

handleDifficultyChange = (event) => {
  const { value } = event.target;
  this.setState({ selectedDifficulty: value });
};

  render() {
    const { selectedTypes, readiness, selectedNumberOfWords, selectAllChecked, customList, data, sliderValue } = this.state;
    const { name } = this.props;
    return (
      <div className="background-image2">
        <div className="all-content">
          <div id="wordCategory">
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* <nav className="navigation"> */}
              <p onClick={() => this.props.onRouteChange('signout')} className='f4 link dim black underline ph3 pointer'>Sign Out</p>
            </nav>
            <div className="center-content">
              <h1>Setup Page</h1>
              <h5>{`Hi ${name}, choose what words you want to learn, and this programme will make you a randomised list of words from our database that meet your requirements, then it's time to get learning!`}</h5>
              <div className="pb3 pt2">
                <h5>How many words do you want to learn?</h5>
                  <select
                    id="wordCategory"
                    defaultValue=""
                    className="br3 tc"
                    onChange={this.handleSelectChange}>
                    <option disabled value="">
                      --Select Number--
                    </option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
              </div>
              
              <h5>What type of words do you want to learn?</h5>
              <div className="tick-box">
                <label><input type="checkbox" value="adjective" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('adjective')}/>
                  Adjectives 
                </label>
                <label><input type="checkbox" value="noun" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('noun')}/>
                  Nouns 
                </label>
                <label><input type="checkbox" value="verb" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('verb')}/>
                  Verbs 
                </label>
                <label><input type="checkbox" value="others" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('others')}/>
                  Other 
                </label>
                <label><input type="checkbox" checked={selectAllChecked} onChange={this.handleSelectAllChange}/>
                  <b>ALL</b>
                </label>
              </div>
              <div className="pb3 pt2">
                <h5>What difficulty of words do you want to learn?</h5>
                  <select
                    id="wordCategory"
                    defaultValue=""
                    className="br3 tc"
                    onChange={this.handleDifficultyChange}>
                    <option disabled value="">
                      --Select Difficulty--
                    </option>
                    <option value="B">Beginner</option>
                    <option value="I" disabled>Intermediate (coming soon)</option>
                    <option value="A" disabled>Advanced (coming soon)</option>
                  </select>
              </div>
              <div className='btn'>
                <button className='grow pv1 white mv3 f4 br3 mh2 link dib bg-blue ' onClick={this.createCustomList}>Generate List and Begin!</button>
                {(readiness === 'ready') && (<div>Your words are ready!</div>)}
                {(readiness === 'not ready') && (<h6>You haven't inputted sufficient details to setup the game!</h6>)}
              </div>
              {/* <div>
              <input 
                type="file" 
                accept=".xlsx, .xls" 
                onChange={this.handleFileUpload} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;


