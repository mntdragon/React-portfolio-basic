import React, {Component} from 'react';

class Intro extends Component {
render(){
    return(
        <section id="top" className="one dark cover">
        <div className="container">

            <header>
                <h2 className="alt">Hi! How are <strong>You</strong> ?<br />
 The website is designed with  <a href="http://reactjs.org">React</a> and HTML, CSS3
                .</h2>
                <p> A junior developer with HTML, CSS, SASS, Nodejs, Javascript, Typescript and PHP skills</p>
            </header>

            <footer>
                <a href="#portfolio" className="button scrolly">More</a>
            </footer>

        </div>
    </section>
    );
}
}

export default Intro;