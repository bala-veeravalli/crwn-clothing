import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    let { currentUser } = this.state;
    return <Router>
      <div className="App">
        <Header currentUser={currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInSignUpPage}/>
        </Switch>
      </div>
    </Router>
  };
}

export default App;
