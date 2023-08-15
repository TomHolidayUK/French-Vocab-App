import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            Name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({Email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({Password: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({Name: event.target.value})
    }

    onSubmitRegister = () => {
        // fetch('http://localhost:3000/register', {
           fetch('https://nameless-savannah-12192-f4ca04c7a238.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password,
                name: this.state.Name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('setup');
                }
            })
      };

    handleKeyPress = (event) => {
    if (event.key === "Enter") {
    this.onSubmitRegister()};
    };


    render() {
        return(
            <div className="background-image4">
                <nav style={{display: 'flex ', justifyContent: 'flex-end'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p onClick={() => this.props.onRouteChange('signout')} className='f4 link dim white underline ph3 pointer'>Sign Out</p>
                    </div>
                </nav>
                <div className="center-content">
                    <h2 className="white">Register for free to learn French Vocabulary</h2>
                    {/* <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"> */}
                    <article className="register-box bg-opacity-15 br3 ba near-white b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                        <main className="pa4 white-80">
                            <div className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    {/* <legend className="f2 fw4 ph0 mh0">Register</legend> */}
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                                        <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name" 
                                        onChange={this.onNameChange}
                                        // onKeyDown={this.handleKeyPress}
                                        style={{ border: '1px solid white' }}
                                        />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                        <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        onChange={this.onEmailChange}
                                        // onKeyDown={this.handleKeyPress}
                                        style={{ border: '1px solid white' }}
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                        <input 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" 
                                        type="password" 
                                        name="password"  
                                        id="password" 
                                        onChange={this.onPasswordChange}
                                        onKeyDown={this.handleKeyPress}
                                        style={{ border: '1px solid white' }}
                                        />
                                    </div>
                                </fieldset>
                                <div className="">
                                    <input 
                                    onClick={this.onSubmitRegister}
                                    className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f5 dib" 
                                    type="submit" 
                                    value="Register" />
                                </div>
                            </div>
                        </main>
                    </article>
                </div>
            </div>
        );
    }
}

export default Register;