import React, {Component} from 'react';

class Contact extends Component {
render(){
    return(
        <section id="contact" className="four">
        <div className="container">

            <header>
                <h2>Contact</h2>
            </header>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            <form method="post" action="#">
                <div className="row">
                    <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                    <div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                    <div className="col-12">
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                        <input type="button" value="Send Message" />
                    </div>
                </div>
            </form>

        </div>
    </section>
    );
}
}

export default Contact;