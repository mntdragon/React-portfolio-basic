import React, {Component} from 'react';
import Timer from "./components/Timer.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectSale from "./components/sale/ProjectSale";
import FirebaseLogin from "./components/login/FirebaseLogin.js";
import uSurvey from "./components/uSurvey.js";
import ApiCall from "./components/ApiCall.js";
import Slideshow from "./components/slideshow/Slideshow";
class Portfolio extends Component {
render(){
    return(
        <Router>
        <section id="portfolio" className="two">
        <div className="container">

            <header>
                <h2>Portfolio</h2>
            </header>

            <p>There are some small projects. Feel relax and stay till. Try as much as you can.</p>

            <div className="row">
                <div className="col-4 col-12-mobile">
                    <article className="item">
                       <Timer start={Date.now()}/>
                    </article>
                    <article className="item">
                        <a href="#" className="image fit"><img src="images/pic09.jpg" alt="" /></a>
                        <header>
                            <h3><Link to="/ProjectSale">Pick and Poo</Link></h3>
                        </header>
                    </article>
                </div>
                <div className="col-4 col-12-mobile">
                    <article className="item">
                        <a href="#" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
                        <header>
                            <h3><Link to="/uSurvey">uSurvey</Link></h3>
                        </header>
                    </article>
                    <article className="item">
                        <a href="#" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
                        <header>
                            <h3><Link to="/FirebaseLogin">Firebase Login</Link></h3>
                        </header>
                    </article>
                </div>
                <div className="col-4 col-12-mobile">
                    <article className="item">
                        <a href="#" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
                        <header>
                            <h3><Link to="/ApiCall">Get SubReddits</Link></h3>
                        </header>
                    </article>
                    <article className="item">
                        <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                        <header>
                            <h3><Link to="/Slideshow">Slideshow</Link></h3>
                        </header>
                    </article>
                </div>
            </div>

        </div>
    </section>
    <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/ProjectSale" component={ProjectSale} />
          <Route path="/uSurvey" component={uSurvey} />
          <Route path="/FirebaseLogin" component={FirebaseLogin} />
          <Route path="/ApiCall" component={ApiCall} />
          <Route path="/Slideshow" component={Slideshow} />
      
    </Router>

  
    );
}
}
function Home() {
    return (
      <div>
        
      </div>
    );
  }
  

  
  
export default Portfolio;