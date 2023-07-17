import React, { Component } from 'react';
import './FrenchVocabularyGame.css';
import vocabulary from './Vocabulary.js';
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";


class FrenchVocabularyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWordEnglish: '',
      currentWordFrench: '',
      userInput: '',
      isCorrect: null,
      selectedTypes: [],
      totalAttempts: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
    //   customList: [],
      stage: 'no results' // show results or not
    };
  }

// // Method to randomly select a word
// selectRandomWord = () => {
// const randomIndex = Math.floor(Math.random() * vocabulary.length);
// const selectedWord = vocabulary[randomIndex];
// this.setState({
//     currentWordEnglish: selectedWord.English,
//     currentWordFrench: selectedWord.French,
//     userInput: '',
//     isCorrect: null
// });
// };

createCustomList = (selectedTypes, totalAttempts) => {
    // console.log(this.state.selectedTypes)
    let customList = [];
    if (this.state.selectedTypes === "verbs") {
        customList = vocabulary.filter(checkVerbs);
    }

    function checkVerbs(word) {
    return word.type === "verb";
};
// console.log("custom list", customList);

    // if (vocabulary[this.state.totalAttempts].type === "verb") {
    //     console.log("verb detected")
    // } else if (vocabulary[this.state.totalAttempts].type === "noun") {
    //     console.log("noun detected")
    // }
};

// This selects the current words from the database by changing the current state to them 
selectWord = (totalAttempts) => {
    const selectedWord = vocabulary[this.state.totalAttempts];
    this.setState({
        currentWordEnglish: selectedWord.English,
        currentWordFrench: selectedWord.French,
        userInput: '',
        isCorrect: null
    });
};

handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const { selectedTypes } = this.state;

    if (checked) {
        this.setState({
        selectedTypes: [...selectedTypes, value]
        });
    } else {
        this.setState({
        selectedTypes: selectedTypes.filter((category) => category !== value)
        });
    }
    };

// Method to handle user input
handleUserInput = (event) => {
this.setState({ userInput: event.target.value });
};

// Method to check user answer
checkAnswer = () => {
const { userInput, currentWordFrench } = this.state;
const isCorrect = userInput === currentWordFrench;
this.setState({ isCorrect });
if (isCorrect === true ) {
    this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1}));
} else if (isCorrect === false) {
    this.setState((prevState) => ({
        incorrectAnswers: prevState.incorrectAnswers + 1}));
    }
this.setState((prevState) => ({
    totalAttempts: prevState.totalAttempts + 1
    }));
};

// Method to move to the next word
nextWord = () => {
this.selectWord();
this.createCustomList();
};

// This renders a word to translate the moment that the app renders
componentDidMount() {
this.selectWord(); // Select a word when the component mounts 
this.createCustomList();
// this.setState({ totalAttempts: 0 })
}

// Method to handle the user pressing 'enter'
handleKeyPress = (event) => {
    if ((event.key === "Enter") && (this.state.stage === 'no results')) {
    this.checkAnswer();
    this.setState({ stage: 'results' })}
    if ((event.key === "Enter") && (this.state.stage === 'results')) {
        this.nextWord();
        this.setState({ stage: 'no results' })
    }
};


  render() {
    const { currentWordEnglish, currentWordFrench, userInput, isCorrect, totalAttempts, correctAnswers, incorrectAnswers, selectedTypes } = this.state;
    return (
        <div className="All">
        <div className='pa2 pt9 tc'>
            <h1>French Vocabulary Game</h1>
            <div id="wordCategory">
        <h3>Select the types of words you want to learn:</h3>
        <label>
          <input type="checkbox" value="adjectives" onChange={this.handleCheckboxChange} checked={selectedTypes.includes('adjectives')}/>
          Adjectives
        </label>
        <label>
          <input
            type="checkbox"
            value="nouns"
            onChange={this.handleCheckboxChange}
            checked={selectedTypes.includes('nouns')}
          />
          Nouns
        </label>
        <label>
          <input
            type="checkbox"
            value="verbs"
            onChange={this.handleCheckboxChange}
            checked={selectedTypes.includes('verbs')}
          />
          Verbs
        </label>
        <label>
          <input
            type="checkbox"
            value="prepositions"
            onChange={this.handleCheckboxChange}
            checked={selectedTypes.includes('prepositions')}
          />
          Prepositions
        </label>
        <div>
          Selected Types: {selectedTypes.join(', ')}
        </div>
      </div>

            {(totalAttempts > 0) && <ProgressBar completed={totalAttempts/(vocabulary.length)*100} />}
            <p>Translate the following: </p>
            <motion.p className="b f4" animate={{ y: 5, scale: 1}} initial={{ scale:0}}>{currentWordEnglish}</motion.p>
            <input 
            className='f4 pa1 w-20 center' 
            type="text" value={userInput} 
            onChange={this.handleUserInput} 
            placeholder='Type here...'
            onKeyPress={this.handleKeyPress}/>
            <select id="wordCategory">
                <option selected disabled>How many words?</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
            </select>
            {isCorrect !== null && (
            <div className='pv1'>{isCorrect ? 'Correct!' : <p>Incorrect! The correct answer is: {currentWordFrench}</p>}</div>
            )}
        </div>
        <div>
            <button className='grow f4 mh2 link dib bg-light-purple' onClick={this.checkAnswer}>Check Answer</button>
            <button className='grow f4 mh2 link dib bg-light-purple' onClick={this.nextWord}>Next Word</button>
        </div>
        <p>*Use the buttons or use the 'Enter' key*</p>
        <div className='container f4'>
            <div className='bordered-content'>
                <b>Your progress:</b>
                <div>Total Answered = {totalAttempts}</div>
                <div>Correct answers = {correctAnswers}</div>
                <div>Incorrect answers = {incorrectAnswers}</div>
                {(totalAttempts > 0) && <div>Accuracy = {(correctAnswers/totalAttempts* 100).toFixed(2)}%</div>}
            </div>
        </div>
        {/* <p>**There are five accent marks in French, and each of them can significantly impact the way you pronounce French words. Therefore enter words correctly WITH ACCENTS**</p>
        <p>é – the acute accent (l'accent aigu)<br />à/è/ì/ò/ù – the grave accent (l'accent grave)<br />â/ê/î/ô/û – the circumflex (l'accent circonflexe)<br />ç – the cedilla (la cédille)<br />ë/ï/ü – the trema (l'accent tréma)</p>
        <b>Functions to add:<br />Sort order - don't have 2 words in a row<br />Have levels<br />Display statistics<br />Make spelling allowances especially for incorrect accents and capital letters<br />Style well with nice background<br />Add pictures<br />Animation when new word appears</b> */}
        </div>
    );
  }
}

export default FrenchVocabularyGame;