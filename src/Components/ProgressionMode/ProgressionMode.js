import React, { Component } from 'react';
import '../FrenchVocabularyGame/FrenchVocabularyGame.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import ContactForm from '../ContactForm/ContactForm.js';
import ChatBot from '../ChatBot/ChatBot.js';
import vocabulary from '../FrenchVocabularyGame/Vocabulary.js';



class ProgressionMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWordEnglish: 'loading...', 
      currentWordFrench: '',
      currentWordType: '',
      userInput: '',
      isCorrect: null,
      totalAttempts: 0,
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
      localProgress: 0,
      variable_vocabulary: [],
      joinDate: '',
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


// it takes time to load the variable_vocabulary from the database and can lead to errors, therefore initally this needs to be doe locally
// then the database can verify or rectify problems
// do the same for progress

// update locally first (because quicker)
// then send this updated state to database
// only read database value when entering progression mode (component did mount)


selectWord = (localProgress, vocab, attempts) => {
    console.log('localProgress', localProgress)
    console.log('vocab', vocab)
    console.log('attempts', attempts)

    this.setState({ localProgress: localProgress }) // update local progress

    if (this.state.variable_vocabulary.length === 0) {
        if (vocab) {
            this.setState({ variable_vocabulary: vocab });
        } else {
            this.setState({ variable_vocabulary: vocabulary });
        } 
        console.log('empty') 
    } else {
    if (localProgress < vocabulary.length) {
                console.log('this.state.variable_vocabulary', this.state.variable_vocabulary)
                const selectedWord = this.state.variable_vocabulary[this.state.totalAttempts];
                if (this.state.variable_vocabulary.length === 0) {
                }
                this.setState({ specialWarning: false });
                console.log('selectedWord', selectedWord.English)
            this.setState({
                currentWordEnglish: selectedWord.English,
                currentWordFrench: selectedWord.French,
                currentWordType: selectedWord.type,
                userInput: '',
                isCorrect: null,
                hint: ''
            });
        }
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

// Update progress state locally 
this.setState((prevState) => ({
    localProgress: prevState.localProgress + 1,
}), () => {
    this.updateDBProgress(); // and update database progress
});
    
} else if (isCorrect === false) {

// Now we want to ensure that words that are answered incorrectly are fed back to the user later    
const delayFactor = 0.025; // This defins how much later in the list the user will receive the word they answered incorrectly 
const indexToInsert = this.state.totalAttempts + Math.ceil(vocabulary.length * delayFactor)
const indexToInsert2 = this.state.totalAttempts + Math.ceil(vocabulary.length * delayFactor * 3)
this.state.variable_vocabulary.splice(indexToInsert, 0, this.state.variable_vocabulary[this.state.totalAttempts])
this.state.variable_vocabulary.splice(indexToInsert2, 0, this.state.variable_vocabulary[this.state.totalAttempts])

// Update vocabulary list
this.updateVocab();

}

this.Pronunciation();

// Update attempts state locally 
this.setState((prevState) => ({
    totalAttempts: prevState.totalAttempts + 1,
}), () => {
    this.updateDBAttempts(); // and update database attempts
});

};


// --------------- Fetch Requests to Server --------------- //

// Fetch data from DB and sync local state
syncDB = () => {
// fetch(`http://localhost:3000/mongousers/${this.props.user.id}`, {
fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongousers/${this.props.user.id}`, {
    method: 'get',
    headers: {'Content-Type': 'application/json'},
}) 
.then(response => response.json())
.then(count => {
this.setState({ localProgress: count.userProgress })
this.setState({ variable_vocabulary: count.userWords });
if (typeof count.userAttempts !== 'undefined') {
this.setState({ totalAttempts: count.userAttempts });
}
this.setState({ joinDate: count.userJoined });
this.selectWord(count.userProgress, count.userWords, count.userAttempts);
})
}


resetDB = () => {
    // fetch(`http://localhost:3000/mongoreset/${this.props.user.id}`, {
    fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongoreset/${this.props.user.id}`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    // this.syncDB()
    this.selectWord(0, vocabulary, 0);
}


updateDBProgress = () => {
    // fetch(`http://localhost:3000/mongoprogress?param1=${this.props.user.id}&param2=${this.state.localProgress}`, {
    fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongoprogress?param1=${this.props.user.id}&param2=${this.state.localProgress}`, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
})
}

updateVocab = () => {
    // fetch(`http://localhost:3000/mongowords/${this.props.user.id}`, {
    fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongowords/${this.props.user.id}`, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        words: this.state.variable_vocabulary
    })
})
.then(response => response.json())
.then(count => {
this.setState({ variable_vocabulary: count })
// console.log('count', count)
})
}


updateDBAttempts = () => {
    // Update number of total attempts
        // fetch(`http://localhost:3000/mongoattempts?param1=${this.props.user.id}&param2=${this.state.totalAttempts}`, {
        fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongoattempts?param1=${this.props.user.id}&param2=${this.state.totalAttempts}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        // Update local progress state
        .then(count => {
        this.setState({ 
            totalAttempts: count })
        })
    }

// --------------- End of Fetch Requests to Server --------------- //

// Method to move to the next word
nextWord = () => {
this.selectWord(this.state.localProgress);
};

// This renders a word to translate the moment that the app renders
componentDidMount() {
    // Fetch data from DB and sync local state
    this.syncDB();

    const initialLength = vocabulary.length;
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


calculateDate = () => {
    const date = this.state.joinDate
    return date.charAt(8) + date.charAt(9) + '/' + date.charAt(5) + date.charAt(6) + '/' + date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3)
}

calculateTime = () => {
    const startDate = new Date(this.state.joinDate);

    const currentDate = new Date(); // Get the current date
  
    const timeDifference = currentDate - startDate;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return days
}

restart = () => {
    const result = window.confirm("Are you sure you want to proceed? You will lose all your progress");
    if (result) {
       
        this.resetDB(); // Reset Progress

        this.setState({ variable_vocabulary: vocabulary });
        this.setState({ 
            currentWordEnglish: vocabulary[0].English,
            currentWordFrench: vocabulary[0].French,
            userInput: '',
            isCorrect: null,
            totalAttempts: 0,
        })
   
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
    const { currentWordEnglish, currentWordFrench, currentWordType, userInput, isCorrect, difficultMode, hint, showPopup, showPopup2, initialLength, specialWarning, ShowContact, ShowGPT, localProgress, totalAttempts } = this.state;
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
                <h2>French Vocabulary Game: Progression Mode</h2>
                {/* {(totalAttempts > 0) && <ProgressBar completed={parseFloat((totalAttempts/(this.props.customList.length)*100).toFixed(2))} />} */}
                {(this.state.localProgress > 0) && 
                <ProgressBar 
                    completed={parseFloat((this.state.localProgress/(initialLength)*100).toFixed(0))} 
                 
                   
             
                />}
                <div className="prevent-overflow">
                    {(localProgress < 500) && <h5>You are on the <b>Beginner Level (A1)</b>, you have <b>{500 - localProgress}</b> words until Intermediate level</h5>}
                    {(1000 > localProgress > 499) && <h5>You are on the <b>Intermediate Level (A2)</b>, you have <b>{1000 - localProgress}</b> words until Advanced level</h5>}
                    {(1500 > localProgress > 999) && <h5>You are on the <b>Advanced Level 1 (B1)</b>, you have <b>{1500 - localProgress}</b> words until intermediate level</h5>}
                </div>
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
            {(this.state.localProgress !== 1500) ?
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
                        <h5><b>Your Stats:</b></h5>
                        <h6><b>Progress = {localProgress}</b></h6>
                        {/* <h6><b>Total Answers = {totalAttempts}</b></h6> */}
                        <h6><b>Incorrect Answers = {totalAttempts - localProgress}</b></h6>
                        {(totalAttempts > 0) && <h6><b>Accuracy = {(localProgress/totalAttempts* 100).toFixed(2)}%</b></h6>}
                        <h6><b>---</b></h6>
                        <h6><b>Data Joined = {this.calculateDate()}</b></h6>
                        {(this.calculateTime() > 1) && <h6><b>Time on Site = {this.calculateTime()} days</b></h6>}
                        <h6><b>Number of Logins = {this.props.user.entries}</b></h6>
                        {/* {localProgress < 500 && <h6><b>Beginner Words Remaining = {500 - localProgress}</b></h6>} */}
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
                        <div>Total Correct answers = {localProgress}</div>
                        <div>Total Incorrect Answers = {totalAttempts - localProgress}</div>
                        {(totalAttempts > 0) && <div>Accuracy = {(localProgress/totalAttempts* 100).toFixed(2)}%</div>}
                        <div>Time to Complete = {this.calculateTime()} days</div>
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
                    <img src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/French+App+Data/Other/ChatGPT-Logo.png" className="chatGPT-img clickable-element grow" alt="whatever" onClick={this.handleGPTToggle} />)
                    }
                </div>
                <div className="Contact-navigation-container">
                     {!ShowContact && ( 
                    <img src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/French+App+Data/Other/mail3.png" className="contact-img clickable-element grow" alt="whatever" onClick={this.handleContactToggle} />)
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
        {(currentWordEnglish === 'loading...') && (this.syncDB())}    
    </div> 
    );
  }
}

export default ProgressionMode;