import './App.css';
import React from 'react';
import Filter from './Components/Filter/Filter';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import FrenchVocabularyGame from './Components/FrenchVocabularyGame/FrenchVocabularyGame';
import ProgressionMode from './Components/ProgressionMode/ProgressionMode';


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
        entries: 0,
        progress: 0,
        joined: ''
      }
    }
  }

  // Have a function to load user data, this will include props for id, name etc...
  loadUser = (data) => {
    // console.log('data', data)
    this.setState({user: {
      id: data._id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      progress: data.progress,
      joined: data.joined
    }})
    // console.log('user', this.state.user)
  }


  increaseEntries = (user_id) => {
    // fetch(`http://localhost:3000/mongoentries/${user_id}`, {
    fetch(`https://learn-french-vocabulary-api-5d216bdc9555.herokuapp.com/mongoentries/${user_id}`, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json()) // Convert the response to JSON so we can use it in our app
    .then('entries:', console.log)
    .then(count => {
      // to avoid changing other paramters of user when we update entries we use Object.assign
      this.setState(Object.assign(this.state.user, { entries: count }))
    })
  }


  handleStateUpdate = (newValue) => {
    this.setState({ customList: newValue }, () => {
    });
    this.setState({ route: 'game'})
  };

  // Control sign in and sign out state
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ route: 'signin' }, () => {
        // console.log('state', this.state.route);
      });
    } else if (route === 'register') {
      this.setState({ route: 'register' });
    } else if (route === 'setup') {
        this.setState({ route: 'setup' });
    } else if (route === 'progressionMode') {
        this.setState({ route: 'progressionMode' });
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
          {this.state.route === 'signin' && <SignIn increaseEntries={this.increaseEntries} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'register' && <Register increaseEntries={this.increaseEntries} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'setup' && <Filter userDetails={user} customList={this.state.customList} onUpdateState={this.handleStateUpdate} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'game' && <FrenchVocabularyGame user={user} customList={this.state.customList} onRouteChange={this.onRouteChange}/>}
          {this.state.route === 'progressionMode' && <ProgressionMode user={user} customList={this.state.customList} onRouteChange={this.onRouteChange}/>}
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
