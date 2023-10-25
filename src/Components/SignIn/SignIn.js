import React, { Component } from 'react';
import { motion } from "framer-motion";
import './SignIn.css';
import videoBg from '../../Assets/video3.mp4'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            passwordState: ''
        }
    }

    // onSubmitSignIn = () => {
    //   // this.props.loadUser(user)
    //   this.props.onRouteChange('setup');
    // };

    // onSubmitRegisterNow = () => {
    //     // this.props.loadUser(user)
    //     this.props.onRouteChange('register');
    //   };

    // Method to handle the user pressing 'enter'
    handleKeyPress = (event) => {
        if (event.key === "Enter") {
        this.onSubmitSignIn()};
    };


    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    
    onSubmitSignIn = () => {
        // fetch('http://localhost:3000/signin', {
        fetch('https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) { 
            // if(user) {
            // if(user === 'success') {
                // Does the user exist? Did we receive a user with a property of id?
                this.props.loadUser(user)
                this.props.onRouteChange('setup');
                this.setState({passwordState: true})
            }
            else {
                // If you get the password incorrect
                this.setState({passwordState: false})
            }
        })
    }



    render() {
        return(
            // <div className="background-image">
            <div className="all-content">
            <div className='mainvideo'> 
                <video src={videoBg} autoPlay loop muted/>
            </div>
                {/* <div className="overlay"></div> */}
                {/* <video src={videoBg} autoPlay loop muted/> */}
                <div className="content">
                    <h3 className="opening-text">Welcome to the best place to learn French Vocabulary!</h3>
                    {/* <p>--------</p> */}
                    <h5 className="opening-text-2">Learn words from our extensive database of vocabulary using a language learning algorithm</h5>
                    {/* <h4 className="opening-text-3">Sign in if you've been here before or if it's your first time, register an account with us!</h4> */}
                    {/* <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-15 center"> */}
                    <article className="sign-in-box br3 ba dark-gray b--white-20 mv4 w-100 w-50-m w-25-l mw6 shadow-15 center">
                        {/* <div className="overlay"></div> */}
                        <main className="main-sign-in-box pa3 black-80">
                            <div className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className="f2 fw4 white ph0 mh0">Sign In</legend>
                                    {/* <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                        <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name" 
                                        // onChange={this.onNameChange}
                                        />
                                    </div> */}
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy white f5" htmlFor="email-address">Email</label>
                                        <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        onChange={this.onEmailChange}
                                        onKeyDown={this.handleKeyPress}
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy white f5" htmlFor="password">Password</label>
                                        <form >
                                            <input 
                                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                                type="text"
                                                name="username"
                                                id="username"
                                                style={{ display: 'none' }} 
                                            />
                                            <input
                                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                                type="password"
                                                name="password"
                                                id="password"
                                                onChange={this.onPasswordChange}
                                                onKeyDown={this.handleKeyPress}
                                                autocomplete="new-password"
                                            />
                                        </form>
                                    </div>
                                </fieldset>
                                <div className="">
                                    <input 
                                    onClick={this.onSubmitSignIn}
                                    // onClick={() => this.props.onRouteChange('setup')}
                                    className="b ph3 pv2 white input-reset ba b--black bg-transparent grow pointer f5 dib" 
                                    type="submit" 
                                    value="Sign in" />
                                </div>
                                {/* If Password is incorrect, show error message */}
                                {(this.state.passwordState === false) ? 
                                    <motion.p className="b ph3" animate={{ y: 5, scale: 1}} initial={{ scale:0}}>You have entered incorrect login details, please try again</motion.p>
                                    :
                                    null
                                }
                                <div className="">
                                    <p className="db fw6 pt2 lh-copy white f5">Don't have an account? </p>
                                    <input 
                                    // onClick={this.onSubmitRegisterNow}
                                    onClick={() => this.props.onRouteChange('register')}
                                    className="b ph3 pv2 white input-reset ba b--black bg-transparent grow pointer f5 dib" 
                                    type="submit" 
                                    value="Register Now" />
                                </div>
                            </div>
                        </main>
                    </article>
                    
                </div>
            {/* </div> */}
            </div>
        );
    }
}

export default SignIn;


// Best way to integrate 4K videos for free:
// Find 4K video on youtube 
// Download with 4K Video Downloader app, save in MKV format
// Trim video with Films & TV app