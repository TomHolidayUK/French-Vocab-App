import './App.css';
import React from 'react';
import Filter from './Components/Filter/Filter';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import ParticlesBg from "particles-bg";
import FrenchVocabularyGame from './Components/FrenchVocabularyGame/FrenchVocabularyGame';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customList: [],
      route: 'signin',
      // route: 'register',
      // route: 'setup',
      // route: 'game',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        progress: 0,
        joined: ''
      }
    }
  }

  // Have a function to load user data, this will include props for id, name etc...
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      progress: data.progress,
      joined: data.joined
    }})
  }

  // // In order to communicate with the backend (server) from the front end we use fetch
  // componentDidMount() {
  //   fetch('http://localhost:3000/')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  handleStateUpdate = (newValue) => {
    this.setState({ customList: newValue }, () => {
    });
    this.setState({ route: 'game'})
  };

  // Control sign in and sign out state
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ route: 'signin' }, () => {
        console.log('state', this.state.route);
      });
    } else if (route === 'register') {
      this.setState({ route: 'register' });
    } else if (route === 'setup') {
        this.setState({ route: 'setup' });
    } else {
      this.setState({ route: route });
    }
  }

  render () {
    const { user } = this.state;
    return (
      <div className='App' 
        // style={{ backgroundImage: `url(${pic})`,backgroundRepeat: 'no-repeat', backgroundSize:"contain"}}
        >
        <div>
          {/* <ParticlesBg type="circle" bg={true} /> */}
          {/* {this.state.route === 'signin' && <h1>Sign In Page</h1>} */}
          {this.state.route === 'signin' && <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'register' && <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'setup' && <Filter name={user.name} customList={this.state.customList} onUpdateState={this.handleStateUpdate} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'game' && <FrenchVocabularyGame user={user} customList={this.state.customList} onRouteChange={this.onRouteChange}/>}
          <div className="footer">
            <div>Insta: tomholiday</div>
            <div className="footer-middle">Made by Tom Holiday</div>
            <div>Email: tom.holiday@mac.com</div>
          </div>
        </div>
      </div>
    );
  }
}

// Best backgrounds: 3, 8, 9?, 10, 11?, 12?, 13?, 14, 16?

export default App;
