import React, { Component } from 'react';
import vocabulary from '../FrenchVocabularyGame/Vocabulary.js';
import './Filter.css';
import demoImage from './demo.png';

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
      showPopup: false,
      localProgress: 0
    };
  }

 
handleFileUpload = (e) => {
  console.log(e)
  const XLSX = require('xlsx');
  const reader = new FileReader();
  reader.readAsBinaryString(e.target.files[0]);
  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const parsedData = XLSX.utils.sheet_to_json(sheet);
    console.log('parsed data', parsedData)
    this.setState({ data: parsedData });
  };
}

handlePopupClickFilter = () => {
  this.setState({ showPopup: true });
};

handleCloseClick = () => {
  this.setState({ showPopup: false });
};

// Shuffle the array of words to randomise the order
shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// From the filters selected, make a custom list 
createCustomList = (input) => {
    const { selectedTypes, selectedNumberOfWords, selectedDifficulty } = this.state;
    console.log('input', input)
    // First randomise the words from the (filter 1)
    const filteredData1 = this.shuffleArray(input);
    console.log('filteredData1', filteredData1);

    // Filter the words to only include the types that the user wants (filter 2)
    const filteredData2 = filteredData1.filter(item => selectedTypes.includes(item.type));
    // console.log('filteredData2', filteredData2);

    // Filter for difficulty level
    console.log(selectedDifficulty)
    const filteredData3 = filteredData2.filter(item => selectedDifficulty.includes(item.difficulty));
    // console.log('filteredData3', filteredData3);

    // Filter the words to only be the length that the user wants (filter 3)
    const filteredData4 = filteredData3.slice(0, selectedNumberOfWords);
    console.log('filteredData4', filteredData4);

    // filteredData3 is now the user-customised and randomised list 
    if (filteredData4.length > 0) {
      const { onUpdateState } = this.props;
      onUpdateState(filteredData4);
      this.setState({ readiness: 'ready' })
    } else {
      this.setState({ readiness: 'not ready' })
    }
};


// Create a list for when the user uploads their own words
createCustomListUpload = () => {
  const { data } = this.state;
  // First randomise the words from the (filter 1)
  const filteredData1 = this.shuffleArray(data);
  console.log('filteredData1', filteredData1);

  if (filteredData1.length > 0) {
    const { onUpdateState } = this.props;
    onUpdateState(filteredData1);
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

// This renders a word to translate the moment that the app renders
componentDidMount() {
  this.syncDB();
}

// Fetch data from DB and sync local state
syncDB = () => {
  // fetch(`http://localhost:3000/mongousers/${this.props.userDetails.id}`, {
  fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongousers/${this.props.userDetails.id}`, {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
  }) 
  .then(response => response.json())
  .then(count => {
  this.setState({ localProgress: count.userProgress })
  })
  }


  render() {
    const { selectedTypes, readiness,  selectAllChecked, showPopup } = this.state;
    const { userDetails } = this.props
    return (
      <div className="background-image2">
        <div className="all-content">
          <div id="wordCategory">
            <nav className="header">
              <div className="sign-out">
                  <p onClick={() => this.props.onRouteChange('signout')} className='f4 link dim underline pointer'>Sign Out</p>
              </div>
            </nav>
            {/* <div className="navbar">
              <nav className="flex"><h4 onClick={() => this.props.onRouteChange('signout')} className='text link dim underline ph3 pointer'>Sign Out</h4></nav>
            </div> */}
            <div className="center-content">
              <h1>Setup Page</h1>
              <h5 className="welcome-small">{`Welcome ${userDetails.name}`}</h5>
              <h5 className="welcome-medium">{`Hi ${userDetails.name}, choose what words you want to learn`}</h5>
              <h5 className="welcome-large">{`Hi ${userDetails.name}, choose what words you want to learn, and this programme will make you a randomised list of words from our database that meet your requirements, then it's time to get learning!`}</h5>
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
                <label className="fw6"><input type="checkbox" value="adjective" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('adjective')}/>
                  Adjectives 
                </label>
                <label className="fw6"><input type="checkbox" value="noun" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('noun')}/>
                  Nouns 
                </label>
                <label className="fw6"><input type="checkbox" value="verb" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('verb')}/>
                  Verbs 
                </label>
                <label className="fw6"><input type="checkbox" value="others" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('others')}/>
                  Other 
                </label>
                <label className="fw6"><input type="checkbox" checked={selectAllChecked} onChange={this.handleSelectAllChange}/>
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
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced-1">Advanced 1</option>
                    <option value="advanced-2" disabled>Advanced 2 (coming soon)</option>
                  </select>
              </div>
              <div className='btn'>
                {/* <button className='grow pv1 white mv3 f4 br3 mh2 link dib bg-blue ' onClick={this.createCustomList(vocabulary)}>Generate List and Begin!</button> */}
                <button className='grow pv1 white mb2 f4 br3 mh2 link dib' onClick={this.createCustomList.bind(this, vocabulary)}>Generate List and Begin!</button>
                {(readiness === 'ready') && (<div>Your words are ready!</div>)}
                {(readiness === 'not ready') && (<h5>You haven't inputted sufficient details to setup the game!</h5>)}
              </div>
              <div className="upload-list">
                <h6>(If you want to upload your own words to learn, <b className="clickable-element2" onClick={this.handlePopupClickFilter}>click here</b>)</h6>
                <div>
                  {showPopup && (
                  <div className="overlay">
                    <div className="popup">
                      <h2>How to upload you're own words</h2>
                      <p>First you need to create an excel file with all your vocabulary</p>
                      <p>The first column should have your English words with the first row name 'English', the second column should have your French words with the row name 'French'.</p>
                      <p>It should look like this:</p>
                      <img src={demoImage} alt="Demonstration"></img>
                      <p>Then upload it to here:</p>
                      <input 
                        type="file" 
                        accept=".xlsx, .xls" 
                        onChange={this.handleFileUpload} />
                      {/* <button className='grow pv1 white mv3 f4 br3 mh2 link dib bg-blue ' onClick={this.createCustomList.bind(this, data)}>Generate List and Begin!</button> */}
                      <button className='grow pv1 white mv3 f4 br3 mh2 link dib' onClick={this.createCustomListUpload}>Generate List and Begin!</button>
                      <button onClick={this.handleCloseClick}>Close</button>
                  </div>
                  </div>
                  )}
                </div>
              </div>
              <div>---------</div>
              <div className="progressMode-container">
                  <h5>New Game: Progression Mode</h5>
                  <div>Make your way through our database of 1500 words at your own pace, you will be able to leave the site and your progress will be saved so you can return at a later date.</div>
                  <button className='grow pv1 white mv3 f4 br3 mh2 link dib' onClick={() => this.props.onRouteChange('progressionMode')}>Enter Progress Mode</button>
                  {/* <div>{`Number of entries: ${userDetails.entries}`}</div> */}
                  {/* <div>Your Progress so far: <b>{userDetails.progress} words</b></div> */}
                  <div>Your Progress so far: <b>{this.state.localProgress} words</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;


