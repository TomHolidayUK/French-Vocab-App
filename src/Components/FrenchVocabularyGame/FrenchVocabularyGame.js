import React, { Component } from 'react';
import './FrenchVocabularyGame.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import ContactForm from '../ContactForm/ContactForm.js';
import ChatBot from '../ChatBot/ChatBot.js';


class FrenchVocabularyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWordEnglish: '',
      currentWordFrench: '',
      currentWordType: '',
      userInput: '',
      isCorrect: null,
      totalAttempts: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      percentage: 0,
      stage: 'no results', // show results or not
      difficultMode: false,
      hint: '',
      showPopup: false,
      showPopup2: false,
      initialLength: 0,
      ShowGPT: false,
      ShowContact: false,
    };
  }


  handlePopupClick = () => {
    this.setState({ showPopup: true });
  };

  handleCloseClick = () => {
    this.setState({ showPopup: false });
  };

  handlePopup2Click = () => {
    this.setState({ showPopup2: true });
  };

  handleClose2Click = () => {
    this.setState({ showPopup2: false });
  };

// This selects the current words from the database by changing the current state to them 
selectWord = (totalAttempts) => {
    const { customList } = this.props;
    // console.log('total vocab', vocabulary)
    // const selectedWord = vocabulary[this.state.totalAttempts];
    // const selectedWord = this.props.customList[this.state.totalAttempts];
    if (customList && customList.length > this.state.totalAttempts) {
        const selectedWord = customList[this.state.totalAttempts];
        // console.log('custom list in FrenchVocabularyGame.js 2', this.props.customList)
        console.log('add this to db !!!')
        this.setState({ specialWarning: false });
    this.setState({
        currentWordEnglish: selectedWord.English,
        currentWordFrench: selectedWord.French,
        currentWordType: selectedWord.type,
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
    isCorrect = userInput.trim().toLowerCase() === currentWordFrench.toLowerCase();
} else if (difficultMode === false){
    // Case-insensitive and diacritical mark-insensitive comparison
    const removeDiacriticalMarks = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };


    const specialCharacters = ["é", "à", "è", "ì", "ò", "ù", "â", "ê", "î", "ô", "û", "ë", "ï", "ü", "ç", "œ"];

    function containsSpecialCharacters(inputString, characterArray) {
        // Convert the input string to an array of characters
        const inputCharacters = inputString.split('');
    
        // Use a loop or array methods to check for special charachters
        for (const char of inputCharacters) {
        if (characterArray.includes(char)) {
            return true; 
        }
        }
        return false; 
    }
    
    
    const hasSpecial = containsSpecialCharacters(currentWordFrench, specialCharacters);
    
    if (hasSpecial) {
        console.log("The string contains special characters.");
        if (userInput.trim().toLowerCase() !== currentWordFrench.toLowerCase()) {
            this.setState({ specialWarning: true });
        }
    } else {
        this.setState({ specialWarning: false });
    }

    isCorrect =
    removeDiacriticalMarks(userInput.trim().toLowerCase()) === removeDiacriticalMarks(currentWordFrench.toLowerCase());
    // isCorrect = userInput.trim().toLowerCase() === removeDiacriticalMarks(currentWordFrench.toLowerCase());
}

this.setState({ isCorrect });
if (isCorrect === true ) {
    this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1}));

        // Update progress state
            // fetch('http://localhost:3000/progress', {
            fetch('https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/progress', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.props.user.id
                // id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
        // Object.asign is used to assign a new entry count value to a specific user
        // If you need to update multiple variables, use this 
        // this.setState(Object.assign(this.state.user, { entries: count}))
        this.setState({user: {
            progress: count
        }})
      })

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
this.Pronunciation();
};

// Method to move to the next word
nextWord = () => {
this.selectWord();
};

// This renders a word to translate the moment that the app renders
componentDidMount() {
this.selectWord(); // Select a word when the component mounts 
// this.setState({ totalAttempts: 0 })
const initialLength = this.props.customList.length;
this.setState({ initialLength: initialLength })
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

handleGPTToggle = () => {
    this.setState((prevState) => ({ ShowGPT: !prevState.ShowGPT }));
}

handleContactToggle = () => {
    this.setState((prevState) => ({ ShowContact: !prevState.ShowContact }));
}

Pronunciation = async () => {
    const textToSynthesize = this.state.currentWordFrench;
    // const response = await fetch(`http://localhost:3000/synthesize-speech?text=${textToSynthesize}`);
    const response = await fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/synthesize-speech?text=${textToSynthesize}`);

    const audioData = await response.arrayBuffer();

    // Play the synthesized audio
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(audioData);
    const audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;
    audioSource.connect(audioContext.destination);
    audioSource.start();
}


restart = () => {
    const result = window.confirm("Are you sure you want to proceed? You will lose all your progress");
    if (result) {
        this.setState({ 
            totalAttempts: '0',
            currentWordEnglish: this.props.customList[0].English,
            currentWordFrench: this.props.customList[0].French,
            userInput: '',
            isCorrect: null,
            correctAnswers: 0,
            incorrectAnswers: 0})
    }
   
}

hint = () => {
    function addSpaceBetweenCharacters(inputString) {
        // Use split('') to split the string into an array of characters
        const characters = inputString.split('');
        // Use join(' ') to join the array of characters with spaces in between
        const stringWithSpaces = characters.join(' ');
        return stringWithSpaces;
      }

    function convertToUnderscores(inputString) {
    if (inputString.length <= 1) {
        return inputString; 
    }
    
    const firstChar = inputString[0]; 
    const remainingChars = inputString.slice(1); 
    
    const finalHint = firstChar + remainingChars.replace(/[^ ]/g, '_');
    return finalHint;
    }

    const stringWithSpaces = addSpaceBetweenCharacters(this.state.currentWordFrench);
    const convertedString = convertToUnderscores(stringWithSpaces);

    this.setState({ hint: convertedString})
}

 

  render() {
    const { currentWordEnglish, currentWordFrench, currentWordType, userInput, isCorrect, totalAttempts, correctAnswers, incorrectAnswers, difficultMode, hint, showPopup, showPopup2, initialLength, specialWarning, ShowContact, ShowGPT, } = this.state;
    // console.log('custom list in FrenchVocabularyGame.js', this.props.customList)
    return (
        <div className="background-image3" style={{ whiteSpace: 'pre' }}> 
            <div className='pa1 pt9 tc'>
                <nav className="header">
                    <div className="sign-out">
                        <p onClick={() => this.props.onRouteChange('setup')} className='nav-right f4 link dim underline pointer'>Select Words</p>
                        <p onClick={() => this.props.onRouteChange('signout')} className='f4 link dim underline pointer'>Sign Out</p>
                    </div>
                </nav>
            <div className="middle-content">
                <h2>French Vocabulary Game</h2>
                {/* {(totalAttempts > 0) && <ProgressBar completed={parseFloat((totalAttempts/(this.props.customList.length)*100).toFixed(2))} />} */}
                {(correctAnswers > 0) && <ProgressBar completed={parseFloat((correctAnswers/(initialLength)*100).toFixed(2))} />}
                <h5>Translate the following:</h5>
                <motion.p
                    key={currentWordEnglish} // Add the key prop here
                    className="b pb1 f4"
                    animate={{ y: 5, scale: 1 }}
                    initial={{ scale: 0 }}>
                    {currentWordEnglish}
                </motion.p>
                <h6>{hint}</h6>
                <input 
                className='text-input f4 w-20 center' 
                type="text" value={userInput} 
                onChange={this.handleUserInput} 
                placeholder='Type here...'
                onKeyDown={this.handleKeyPress}/>
                {isCorrect !== null && (
                <div className='pv1'>{isCorrect ? <h5>Correct!{ specialWarning && (
                    <div>
                        <h6 className="pb1 wide-text">(Be careful with spelling. Correction: {currentWordFrench})</h6>
                    </div>
                ) }</h5> : <h5>Incorrect! The correct answer is: {currentWordFrench}</h5>}
                    <div className="centered-container">
                        <div className="flex-container">
                            <h6 className="border-right"><a href={`https://context.reverso.net/translation/french-english/${currentWordFrench}`} target="_blank" rel="noreferrer">Examples and Context</a></h6>
                            <h6 className="clickable-element underline color-change" onClick={this.Pronunciation}>Pronunciation</h6>
                            {(currentWordType === 'verb') && 
                                <h6 className="border-left"><a href={`https://conjugator.reverso.net/conjugation-french-verb-${currentWordFrench}.html`} target="_blank" rel="noreferrer">Verb Conjugations</a></h6>
                            }
                        </div>
                    </div>  
                </div>
                )}
            </div>
            {/* { specialWarning && (
                <div>
                    <h6 className="pb1 wide-text">Note - Be aware of special charachters</h6>
                </div>
            ) } */}
            {(totalAttempts !== (this.props.customList.length)) ?
            <div className="bottom-info" >
                <div className="buttons">
                    <button className='grow br2 mh1 link dib' onClick={this.hint}>Hint</button>
                    <button className='center-button grow br2 mh1 link dib bg-orange' onClick={this.checkAnswer}>Check Answer</button>
                    <button className='center-button grow br2 mh1 link dib bg-orange' onClick={this.nextWord}>Next Word</button>
                    <button className='grow br2 mh1 link dib bg-orange' onClick={this.restart}>Restart</button>
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
                <div className="prevent-overflow">
                    <h6 className="pb1 wide-text">(In Difficult Mode you need to include all special charachters, for info on how to type special charachters in French, <b className="clickable-element" onClick={this.handlePopupClick}>click here</b>)</h6>
                </div>
                <div>
                    {showPopup && (
                    <div className="overlay">
                        <div className="popup">
                            <h2>French Special Charachters</h2>
                            <p className="prevent-overflow2">
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

                <div className='f4 progress-box'>
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
                <motion.p
                    key={<h3>Congratulations, You have completed the level!</h3>}
                    className="b f4 prevent-overflow"
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}>
                    <h3>Congratulations, You have completed the level!</h3>
                </motion.p>
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


            <div className="pop-up-navigation-container">
                {/* <h2>Extra Features</h2> */}
                <div className="GPT-navigation-container">
                     {!ShowGPT && ( 
                    <img src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/French+App+Data/Other/ChatGPT-Logo.png" className="chatGPT-img clickable-element" alt="whatever" onClick={this.handleGPTToggle} />)
                    }
                </div>
                <div className="Contact-navigation-container">
                     {!ShowContact && ( 
                    <img src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/French+App+Data/Other/mail3.png" className="contact-img clickable-element" alt="whatever" onClick={this.handleContactToggle} />)
                    }
                </div>
            </div>

            {ShowGPT && (
            <div className="">
                <div className="">
                    <ChatBot close={this.handleGPTToggle}/>
                </div>
            </div>
            )}

            {ShowContact && (
            <div>
            <div className="overlay">
                        <div className="popup">
                        <ContactForm/>
                            <button className="transform" onClick={this.handleContactToggle}>Close</button>
                        </div>
                    </div>
            </div>)}

            {/* <div className="pb1 wide-text suggestions-box prevent-overflow"></div> */}
                <div>
                    {showPopup2 && (
                    <div className="overlay">
                        <div className="popup">
                        <ContactForm/>
                        <button className="transform" onClick={this.handleClose2Click}>Close</button>
                        </div>
                    </div>
                    )}
                </div>  
            {/* <p>**There are five accent marks in French, and each of them can significantly impact the way you pronounce French words. Therefore enter words correctly WITH ACCENTS**</p>
            <p>é – the acute accent (l'accent aigu)<br />à/è/ì/ò/ù – the grave accent (l'accent grave)<br />â/ê/î/ô/û – the circumflex (l'accent circonflexe)<br />ç – the cedilla (la cédille)<br />ë/ï/ü – the trema (l'accent tréma)</p>
            <b>Functions to add:<br />Sort order - don't have 2 words in a row<br />Have levels<br />Display statistics<br />Make spelling allowances especially for incorrect accents and capital letters<br />Style well with nice background<br />Add pictures<br />Animation when new word appears</b> */}
        </div>
    </div>
    );
  }
}

export default FrenchVocabularyGame;