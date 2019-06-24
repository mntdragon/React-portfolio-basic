import React, { Component } from "react";

var firebase = require("firebase");
var uuid = require("uuid");

var config = {
  apiKey: "AIzaSyApF2_Si-avJNrOHskVhVqIi9zLWKyGD6I",
  authDomain: "usurvey-fc7eb.firebaseapp.com",
  databaseURL: "https://usurvey-fc7eb.firebaseio.com",
  projectId: "usurvey-fc7eb",
  storageBucket: "usurvey-fc7eb.appspot.com",
  messagingSenderId: "877484439246",
  appId: "1:877484439246:web:64a977c1330ff0ce"
};

firebase.initializeApp(config);

class uSurvey extends Component {

    nameSubmit(){
        var userName = this.refs.name.value;
    this.setState({userName: userName}, function(){
      console.log(this.state);
    });
    }

    answerSelected(event){
        var answers = this.state.answers;
        if(event.target.name === 'answer1'){
          answers.answer1 = event.target.value;
        } else if(event.target.name === 'answer2'){
          answers.answer2 = event.target.value;
        } else if(event.target.name === 'answer3'){
          answers.answer3 = event.target.value;
        }
    
        this.setState({answers: answers}, function(){
          console.log(this.state);
        });
      }
    
      questionSubmit(){
        firebase.database().ref('uSurvey/'+this.state.uid).set({
          userName: this.state.userName,
          answers: this.state.answers
        });
        this.setState({isSubmitted: true});
      }

  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      userName: "",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  render() {
    var userName;
    var questions;

    if(this.state.userName === '' && this.state.isSubmitted === false){
        userName = <div>
          <h1>Hey Student, please let us know your name: </h1>
          <form onSubmit={this.nameSubmit}>
            <input className="namy" type="text" placeholder="Enter your name" ref="name" />
          </form>
        </div>;
        questions = ''
      } else if (this.state.userName !== '' && this.state.isSubmitted === false){
        userName = <h1>Welcome to U-Survey, {this.state.userName}</h1>;
          questions = <div>
            <h2>Here are some questions: </h2>
            <form onSubmit={this.questionSubmit}>
              <div className="card">
                <label>What kind of courses you like the most: </label> 
                <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology <br/>
                <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design <br/>
                <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing <br/>
              </div>
              <div className="card">
                <label>Your current position: </label> 
                <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student <br/>
                <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} />in-job <br/>
                <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} />looking-job <br/>
              </div>
              <div className="card">
                <label>Is online learning helpful:  </label>
                <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />yes <br/>
                <input type="radio" name="answer3" value="no" onChange={this.answerSelected} />no <br/>
                <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe <br/>
              </div>
              <input className="feedback-button" type="submit" value="submit" />
            </form>
          </div>
      } else if(this.state.isSubmitted === true){
        userName = <h1>Thanks, {this.state.userName}</h1>
      }
    
    return (
      <div id="uSurvey">

      <h1>This Survey will store the data in Firebase Real time database: </h1> <br />
        {userName}
        -----------------------------------
        {questions}
      </div>
    );
  }
}

export default uSurvey;
