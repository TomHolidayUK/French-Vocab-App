import React, { Component } from 'react';
import './ChatBot.css';


class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userGPTInput: '',
        GPTConversation: [],
        ConversationArray: [
          { question: false, answer: false },
        ],
        GPTIndex: 0,
        isLoading: false
      };
    }

    handleUserGPTInput = (e) => {
        this.setState({ userGPTInput: e.target.value });
        };

    handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
        this.onSubmitGPT();
        }
    };

    updateQuestion = (index, newQuestion) => {
        this.setState((prevState) => {
          const updatedArray = [...prevState.ConversationArray];
          updatedArray[index] = {
            ...updatedArray[index],
            question: newQuestion,
          };
          return { ConversationArray: updatedArray };
        });
        console.log(this.state.ConversationArray)
      }
      
    updateAnswer = (index, newAnswer) => {
    this.setState((prevState) => {
        const updatedArray = [...prevState.ConversationArray];
        updatedArray[index] = {
        ...updatedArray[index],
        answer: newAnswer,
        };
        return { ConversationArray: updatedArray };
    });
    console.log(this.state.ConversationArray)
    }

    // updateQuestion = (index, newQuestion) => {
    //     this.setState((prevState) => {
    //       const updatedArray = [...prevState.ConversationArray];
    //       // Update the element at the start of the array
    //       updatedArray.unshift({
    //         question: newQuestion, // Update the answer property
    //       });
    //       return { ConversationArray: updatedArray };
    //     });
    //   }
      
    //   updateAnswer = (index, newAnswer) => {
    //     this.setState((prevState) => {
    //       const updatedArray = [...prevState.ConversationArray];
    //       // Update the element at the start of the array
    //       updatedArray.unshift({
    //         ...updatedArray[0], // Copy the existing item
    //         answer: newAnswer, // Update the answer property
    //       });
    //       return { ConversationArray: updatedArray };
    //     });
    //   }
    
    onSubmitGPT = () => {
        const { userGPTInput, GPTIndex } = this.state;

        this.updateQuestion(GPTIndex, userGPTInput);
        const promptStart = 'in as few words as possible: '
        const finalPrompt = promptStart + userGPTInput
        this.setState({ userGPTInput: ''})
        // fetch('http://localhost:3000/chatgpt', {
        fetch('https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/chatgpt', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                question: finalPrompt
            })
        })
        .then(response => response.json())
        .then((data) => {
            this.updateAnswer(GPTIndex, data);
            this.setState({ GPTIndex: GPTIndex + 1})
          });
    }

    

    

        render() {
            const { ConversationArray, userGPTInput } = this.state;
         
            return (
                <div className="overlayGPT">
                    <div className="chatbot">
                        <h5>Have a question related to French?</h5>
                        {ConversationArray[0].question && (
                        <div className="chatbox">
                            {ConversationArray.map((item, index) => (
                                    <li key={index} className="chat">
                                        <p className="incoming">{item.question}</p>
                                        <p className="outgoing">{item.answer}</p>
                                        </li>
                                    ))}
                        
                        </div>
                        )}
                        <div className="GPTInputContainer">
                            <input 
                                className=' f4 center GPTInput'
                                type="text" value={userGPTInput}
                                onChange={this.handleUserGPTInput} 
                                placeholder="Ask ChatGPT here..."
                                onKeyDown={this.handleEnterKeyPress}
                                />
                            <button className='GPTInputButton transform' onClick={this.onSubmitGPT}>
                                <img className="button-arrow" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/arrow.png' alt="hello"/>
                            </button>
                        </div>
                        <button className="close-button transform" onClick={this.props.close}>Close</button>
                    </div>
                </div>
                );
            }
          }
        

          
export default ChatBot;