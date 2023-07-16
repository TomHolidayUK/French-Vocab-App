import './App.css';
import React from 'react';
import TextInput from './Components/TextInput/TextInput';
import PopUpInformation from './Components/PopUpInformation/PopUpInformation';
import pic from './Background/3.jpg';
import ParticlesBg from "particles-bg";
import FrenchVocabularyGame from './Components/FrenchVocabularyGame/FrenchVocabularyGame';


const popupButton = document.getElementById("popupButton");
const popupBox = document.getElementById("popupBox");
const closeBtn = document.getElementsByClassName("close")[0];


class App extends React.Component {
  render () {
    return (
      <div className='App' style={{ backgroundImage: `url(${pic})`,backgroundRepeat: 'no-repeat', backgroundSize:"contain", height:910, width:1365  }}>
      {/* <div className="container"> */}
      {/* <div className="background-image"></div> */}
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <FrenchVocabularyGame/>
        {/* <PopUpInformation/> */}
        <script>
            <button id="popupButton">Click Me</button>
            <div id="popupBox" class="popup">
            <div class="popup-content">
                <span class="close">&times;</span>
                <h2>Pop-up Box Content</h2>
                <p>This is the content of the pop-up box.</p>
            </div>
            </div>
        </script>
        <div className="fixed-bottom-right">Made by Tom Holiday</div>
      </div>
      // style={{ backgroundImage: `url(${FrenchFlag})` }}
    );
  }
}

popupButton.addEventListener("click", function() {
  popupBox.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  popupBox.style.display = "none";
});

// Best backgrounds: 3, 8, 9?, 10, 11?, 12?, 13?, 14, 16?

export default App;
