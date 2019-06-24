import React, {Component} from 'react';
import LightBox from './LightBox';
import Sliding from './Sliding';


const images = [
  { src: 'https://www.creativeuncut.com/gallery-36/art/dmc5-lady-face.jpg', caption: "Lady" },
  { src: 'https://www.creativeuncut.com/gallery-36/art/dmc5-trish-face.jpg', caption: "Trish" },
  { src: 'https://www.creativeuncut.com/gallery-36/art/dmc5-nico-face.jpg', caption: "Nico" },
  { src: 'https://www.creativeuncut.com/gallery-36/art/dmc5-v-face.jpg', caption: "V" },
  { src: 'https://www.creativeuncut.com/gallery-36/art/dmc5-nero-face.jpg', caption: "Nero" },
  { src: 'https://www.creativeuncut.com/gallery-36/art/dmc5-dante-face.jpg', caption: "Dante" },
];

export default class Slideshow extends Component {
    render(){
    return (
        <div id="lp-slideshow">
            <h1>The Deveil May Cry 5 Characters Gallery</h1>
            <h3>The first slideshow, manually click to the next picture</h3>
          <Sliding 
            input={images}  
            ratio={`3:2`}
            mode={`manual`}
          />
  <h3>The second slideshow, automatically change to the next picture</h3>
          <Sliding 
            input={images}  
            ratio={`3:2`}
            mode={`automatic`}
            timeout={`2000`}
          />

    <h3>LightBox</h3>
        <p>Click on each image below to show the Slideshow Gallery.</p>

        <LightBox 
          input={images}  
          ratio={`3:2`}
        />
          
        </div>
      );
    }
}
