import React, { Component } from "react";
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyApF2_Si-avJNrOHskVhVqIi9zLWKyGD6I",
  authDomain: "usurvey-fc7eb.firebaseapp.com",
  databaseURL: "https://usurvey-fc7eb.firebaseio.com",
  projectId: "usurvey-fc7eb",
  storageBucket: "usurvey-fc7eb.appspot.com",
  messagingSenderId: "877484439246",
  appId: "1:877484439246:web:64a977c1330ff0ce"
};

class FirebaseLogin extends Component {

  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.then(user => {
      var lout = document.getElementById('logout');
      var sup = document.getElementById('signup');
      //Write a welcome message for user
      var err = "You are Login"
      lout.classList.remove('hide');
      sup.classList.add('hide');
      this.setState({err: err});
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  signup(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user => {
      console.log(user.user.email)
      var err = "Welcome "+ user.user.email;
      firebase.database().ref('users/'+user.user.userId).set({
        email: user.user.email
      });
      this.setState({err: err});
      
    });
    promise
    .catch(e => {
      var err = e.message;
      console.log(err);
      this.setState(({err: err}));
    });
  }

  logout(){
    firebase.auth().signOut();
    var lout = document.getElementById('logout');
    var lin = document.getElementById('login');
    var sup = document.getElementById('signup');
    var gg = document.getElementById('google');
    //Write a thanks message for user
    var err = "";
    this.setState({err: err});
    lout.classList.add('hide');
    lin.classList.remove('hide');
    sup.classList.remove('hide');
    gg.classList.remove('hide');
  }

  google(){
    console.log("I am in google method");

    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise.then( result => {
      var user = result.user;
      console.log(result);
      firebase.database().ref('users/'+user.uid).set({
        email: user.email,
        name: user.displayName
      });
      var err = "Welcome " + user.email;
      this.setState(({err: err}));
      var lout = document.getElementById('logout');
      var lin = document.getElementById('login');
    var sup = document.getElementById('signup');
    var gg = document.getElementById('google');
      lout.classList.remove('hide');
      lin.classList.add('hide');
      sup.classList.add('hide');
      gg.classList.add('hide');
    });
  
   
    promise.catch(e => {
      var msg = e.message;
      console.log(msg);
    });

  }
  constructor(props) {
    super(props);

    this.state = {
      err: ''
    };
  
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);

  }

  render() {
      
    return (
       <div id="firebaselogin">
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.err}</p>
        <button onClick={this.login} id="login">Log In</button>
        <button onClick={this.signup} id="signup">Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log out</button><br />
        <button onClick={this.google} id="google" className="google">Sign In with Google</button>
      </div>
    );
  }
}

export default FirebaseLogin;
