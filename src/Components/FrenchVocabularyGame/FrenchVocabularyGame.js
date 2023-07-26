import React, { Component } from 'react';
import './FrenchVocabularyGame.css';
import vocabulary from './Vocabulary.js';
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
// import Reverso from reverso-api;


class FrenchVocabularyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWordEnglish: '',
      currentWordFrench: '',
      userInput: '',
      isCorrect: null,
      totalAttempts: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      stage: 'no results', // show results or not
      difficultMode: false,
      hint: '',
      showPopup: false
    };
  }


  handlePopupClick = () => {
    this.setState({ showPopup: true });
  };

  handleCloseClick = () => {
    this.setState({ showPopup: false });
  };

// This selects the current words from the database by changing the current state to them 
selectWord = (totalAttempts) => {
    const { customList } = this.props;
    // console.log('total vocab', vocabulary)
    // const selectedWord = vocabulary[this.state.totalAttempts];
    // const selectedWord = this.props.customList[this.state.totalAttempts];
    if (customList && customList.length > this.state.totalAttempts) {
        const selectedWord = customList[this.state.totalAttempts];
        console.log('custom list in FrenchVocabularyGame.js 2', this.props.customList)
    this.setState({
        currentWordEnglish: selectedWord.English,
        currentWordFrench: selectedWord.French,
        userInput: '',
        isCorrect: null,
        hint: ''
    });
}
};


// Method to handle user input
handleUserInput = (event) => {
this.setState({ userInput: event.target.value });
};

// Method to check user answer
checkAnswer = () => {
const { userInput, currentWordFrench, difficultMode } = this.state;
let isCorrect;
if (difficultMode === true) {
    isCorrect = userInput.toLowerCase() === currentWordFrench.toLowerCase();
} else if (difficultMode === false){
    // Case-insensitive and diacritical mark-insensitive comparison
    const removeDiacriticalMarks = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
    isCorrect =
    removeDiacriticalMarks(userInput.toLowerCase()) === removeDiacriticalMarks(currentWordFrench.toLowerCase());
}

this.setState({ isCorrect });
if (isCorrect === true ) {
    this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1}));
} else if (isCorrect === false) {
    this.setState((prevState) => ({
        incorrectAnswers: prevState.incorrectAnswers + 1}));
// Now we want to ensure that words that are answered incorrectly are fed back to the user later    
const delayFactor = 0.25; // This defins how much later in the list the user will receive the word they answered incorrectly 
const indexToInsert = this.state.totalAttempts + Math.ceil(this.props.customList.length * delayFactor)
this.props.customList.splice(indexToInsert, 0, this.props.customList[this.state.totalAttempts])
}
this.setState((prevState) => ({
    totalAttempts: prevState.totalAttempts + 1
    }));
};

// Method to move to the next word
nextWord = () => {
this.selectWord();
};

// This renders a word to translate the moment that the app renders
componentDidMount() {
this.selectWord(); // Select a word when the component mounts 
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

handleToggle = () => {
    this.setState((prevState) => ({ difficultMode: !prevState.difficultMode }));
  };

handleClick = () => {
console.log('Text clicked!');
const Reverso = require('reverso-api')
const reverso = new Reverso()   
console.log('test')
reverso.getContext(
    'meet me half way',
    'english',
    'russian',
    (err, response) => {
        if (err) throw new Error(err.message)
        console.log('context', response)
    }
)

// reverso.getConjugation('aller', 'french', (err, response) => {
//     if (err) throw new Error(err.message)
//     console.log('conjugation', response)
// })
};

restart = () => {
    const result = window.confirm("Are you sure you want to proceed? You will lose all your progress");
    if (result) {
        this.setState({ 
            totalAttempts: '0',
            currentWordEnglish: this.props.customList[0].English,
            currentWordFrench: this.props.customList[0].French,
            userInput: '',
            isCorrect: null,
            totalAttempts: 0,
            correctAnswers: 0,
            incorrectAnswers: 0})
    }
   
}

hint = () => {
    const firstLetter = this.state.currentWordFrench.charAt(0);
    const lengthOfWord = this.state.currentWordFrench.length

    function generateUnderscores(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
          result += '_ ';
        }
        return result;
      }
      
    const underscoreString = generateUnderscores(lengthOfWord - 1);

    const finalHint = 'Hint: ' + firstLetter + ' ' + underscoreString
    this.setState({ hint: finalHint})

}

  render() {
    const { currentWordEnglish, currentWordFrench, userInput, isCorrect, totalAttempts, correctAnswers, incorrectAnswers, difficultMode, hint, showPopup} = this.state;
    // console.log('custom list in FrenchVocabularyGame.js', this.props.customList)
    return (
        <div className="background-image3">
        <div className='pa1 pt9 tc'>
            <nav style={{display: 'flex ', justifyContent: 'flex-end'}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <p onClick={() => this.props.onRouteChange('setup')} className='f4 link dim black underline ph3 pointer'>Select Words</p>
                    <p onClick={() => this.props.onRouteChange('signout')} className='f4 link dim black underline ph3 pointer'>Sign Out</p>
                </div>
            </nav>
            <h2>French Vocabulary Game</h2>
            {/* {(totalAttempts > 0) && <ProgressBar completed={totalAttempts/(vocabulary.length)*100} />} */}
            {(totalAttempts > 0) && <ProgressBar completed={totalAttempts/(this.props.customList.length)*100} />}
            <h5>Translate the following:</h5>
            <motion.p className="b pb1 f4" animate={{ y: 5, scale: 1}} initial={{ scale:0}}>{currentWordEnglish}</motion.p>
            <h6>{this.state.hint}</h6>
            <input 
            className='f4 pa1 pv1 w-20 center' 
            type="text" value={userInput} 
            onChange={this.handleUserInput} 
            placeholder='Type here...'
            onKeyPress={this.handleKeyPress}/>
            {isCorrect !== null && (
            <div className='pv1'>{isCorrect ? 'Correct!' : <p>Incorrect! The correct answer is: <b className="clickable-element" onClick={this.handleClick}>{currentWordFrench}</b></p>}</div>
            )}
        </div>

        {(totalAttempts !== (this.props.customList.length)) ?
        <div>
            <div>
                <button className='grow f6 mh2 link dib bg-light-purple' onClick={this.hint}>Hint</button>
                <button className='grow f4 mh2 link dib bg-light-purple' onClick={this.checkAnswer}>Check Answer</button>
                <button className='grow f4 mh2 link dib bg-light-purple' onClick={this.nextWord}>Next Word</button>
                <button className='grow f6 mh2 link dib bg-light-purple' onClick={this.restart}>Restart</button>
            </div>
            {/* <p>*Use the buttons or use the 'Enter' key*</p> */}
            <div className="toggle-container pv2 ph3">
                <b>Easy Mode</b>
                <div className="toggle-switch" onClick={this.handleToggle}>
                    <input type="checkbox" checked={difficultMode} onChange={() => {}} />
                    <div className={`slider ${difficultMode ? 'on' : 'off'}`} />
                </div>
                <b>Difficult Mode</b>
            </div>
            <h6 className="pb1">(In Difficult Mode you need to include all special charachters, for info on how to type special charchters in French, <b className="clickable-element" onClick={this.handlePopupClick}>click here</b>)</h6>

            <div>
                {showPopup && (
                <div className="overlay">
                    <div className="popup">
                    <h2>French Special Charachters</h2>
                    <p>
                    é – the acute accent (l'accent aigu) <b>(Mac - Option/Alt + E, RELEASE, THEN E)</b><br />
                    à/è/ì/ò/ù – the grave accent (l'accent grave) <b>(Mac = Option/Alt + `, RELEASE, THEN letter)</b><br />
                    â/ê/î/ô/û – the circumflex (l'accent circonflexe) <b>(Mac = Option + I, RELEASE, THEN letter)</b><br />
                    ç – the cedilla (la cédille) <b>(Mac = Option + C)</b><br />
                    ë/ï/ü – the trema (l'accent tréma) <b>(Mac = Option + U, RELEASE, THEN letter)</b><br />
                    œ -e dans l'o <b>(Mac = Option/Alt + Q)</b><br /><br />

                    Windows are way behind on this and there are no keyboard shortcuts available on my machine. Therefore I recommend copying and paste'ing from the charchters above.<br />
                    </p>
                    <button onClick={this.handleCloseClick}>Close</button>
                    </div>
                </div>
                )}
            </div>

            <div className='f4'>
                <div className='bordered-content'>
                    <h5><b>Your progress:</b></h5>
                    <h6><b>Total Answered = {totalAttempts}</b></h6>
                    <h6><b>Correct answers = {correctAnswers}</b></h6>
                    <h6><b>Incorrect answers = {incorrectAnswers}</b></h6>
                    {(totalAttempts > 0) && <h6><b>Accuracy = {(correctAnswers/totalAttempts* 100).toFixed(2)}%</b></h6>}
                </div>
            </div>
        </div>
        :
        <div>
            <h3>Congratulations! You have completed the level</h3>
            <h4>Here are your final results:</h4>
            <div className='f4'>
                <div className='bordered-content'>
                    <div>Total Answered = {totalAttempts}</div>
                    <div>Correct answers = {correctAnswers}</div>
                    <div>Incorrect answers = {incorrectAnswers}</div>
                    {(totalAttempts > 0) && <div>Accuracy = {(correctAnswers/totalAttempts* 100).toFixed(2)}%</div>}
                </div>
            </div>
            <h4>Click here to learn more words</h4>
            <button className='grow f4 mh2 link dib bg-light-purple' onClick={() => this.props.onRouteChange('setup')}>Learn More Words</button>
        </div>
        }


        {/* <p>**There are five accent marks in French, and each of them can significantly impact the way you pronounce French words. Therefore enter words correctly WITH ACCENTS**</p>
        <p>é – the acute accent (l'accent aigu)<br />à/è/ì/ò/ù – the grave accent (l'accent grave)<br />â/ê/î/ô/û – the circumflex (l'accent circonflexe)<br />ç – the cedilla (la cédille)<br />ë/ï/ü – the trema (l'accent tréma)</p>
        <b>Functions to add:<br />Sort order - don't have 2 words in a row<br />Have levels<br />Display statistics<br />Make spelling allowances especially for incorrect accents and capital letters<br />Style well with nice background<br />Add pictures<br />Animation when new word appears</b> */}
        </div>
    );
  }
}

export default FrenchVocabularyGame;