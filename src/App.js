import './App.css';
import React from 'react';
import Filter from './Components/Filter/Filter';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
// import pic from './Background/1.jpg';
// import pic2 from './Background/14.jpg';
// import pic3 from './Background/4.jpg';
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
      isSignedIn: false
    };
  }

  // handleStateUpdate = (newValue) => {
  //   this.setState({ customList: newValue });
  //   console.log('custom list in app.js', this.state.customList)
  // };

  handleStateUpdate = (newValue) => {
    this.setState({ customList: newValue }, () => {
    });
    this.setState({ route: 'game'})
  };

  //  // Control sign in and sign out state
  //  onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     console.log('hello')
  //     this.setState({ route: 'signin' }, () => {
  //       console.log('state', this.state.route);
  //     });
  //   }
  //   else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }

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
    const { route } = this.state;
    return (
      <div className='App' 
      // style={{ backgroundImage: `url(${pic})`,backgroundRepeat: 'no-repeat', backgroundSize:"contain"}}
      >
      <div>
        {/* <ParticlesBg type="circle" bg={true} /> */}
        {/* {this.state.route === 'signin' && <h1>Sign In Page</h1>} */}
        {this.state.route === 'signin' && <SignIn onRouteChange={this.onRouteChange}/>}
        {this.state.route === 'register' && <Register onRouteChange={this.onRouteChange}/>}
        {this.state.route === 'setup' && <Filter customList={this.state.customList} onUpdateState={this.handleStateUpdate} onRouteChange={this.onRouteChange}/>}
        {this.state.route === 'game' && <FrenchVocabularyGame customList={this.state.customList} onRouteChange={this.onRouteChange}/>}
        <div className="fixed-bottom-right">Made by Tom Holiday</div>
      </div>
      </div>
    );
  }
}

// Best backgrounds: 3, 8, 9?, 10, 11?, 12?, 13?, 14, 16?

export default App;
