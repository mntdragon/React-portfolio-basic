import React, { Component } from "react";
import axios from 'axios';


export default class ApiCall extends Component {

  componentWillMount(){
    this.getReddit();
  }

  
  getReddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    });
  }
  subrSumbit(){
    this.setState({isClear: false});
    var subr = this.refs.name.value;
    this.setState({subr: subr}, function(){
      console.log(this.state.subr);
      this.getReddit();
    });

  }

  clear(){
    this.setState({posts: []});
    this.setState({subr: ''});
    this.setState({isClear: true});
  }
  constructor(props){
    super(props);

    this.state = {
      posts:[],
      subr: '',
      isClear: false
    };
    this.subrSumbit = this.subrSumbit.bind(this);
    this.getReddit = this.getReddit.bind(this);
    this.clear = this.clear.bind(this);
  }

  render() {
    var subrInput;

    if(this.state.subr === ''){
      subrInput = <div>
        <h1>Let us know your favorite subreddit: </h1>
        <form onSubmit={this.subrSumbit}>
          <input className="subreddit" type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>;
    } else if (this.state.userName !== ''){
      subrInput = <div><h1>{`/r/${this.state.subr}`}</h1>
      <ul>
        {this.state.posts.map(post =>
       
          <li key={post.id}><a href={post.url}>{post.title}</a></li>
        )}
      </ul>
      <button onClick={this.clear} id="clear">Clear</button>
      </div>;
    } else if(this.state.isClear === true){
      subrInput = <div><h1>{`/r/${this.state.subr}`}</h1>
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
      <button onClick={this.clear} id="clear">Clear</button>
      </div>;
    }
    return(
  
        <div id="subreddit">
           {subrInput}
        </div>
    )
  }
}
