import React, { Component } from 'react';
import './PopUpInformation.css';


const popupButton = document.getElementById("popupButton");
const popupBox = document.getElementById("popupBox");
const closeBtn = document.getElementsByClassName("close")[0];


const PopUpInformation = () => {
    return (
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
    );
}

popupButton.addEventListener("click", function() {
    popupBox.style.display = "block";
  });
  
  closeBtn.addEventListener("click", function() {
    popupBox.style.display = "none";
  });

export default PopUpInformation;