import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sliding from "./Sliding";
export default class lightbox extends Component {
  constructor(props) {
    super(props);
    this.slideshowGallery = React.createRef();

    /*
     * width/height will be this.ratioWH = 3 / 2
     */
    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];

    this.updateDimensions = this.updateDimensions.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(index) {
    this.slideshowGallery.current.setSlideIndex(index);
    this.modalElm.style.visibility = "visible";
  }

  hideModal() {
    this.modalElm.style.visibility = "hidden";
  }
  updateDimensions() {
    const height =
      this.containerElm.offsetWidth / this.props.input.length / this.ratioWH;
    this.containerElm.style.height = `${height}px`;
  }

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector(".container");
    this.modalElm = this.rootElm.querySelector(".modal");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /*
   * When Component deleted from HTML
   * Cancel event
   */

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div id="lightbox">
        <div className="container">
          {this.props.input.map((image, index) => {
            return (
              <div
                key={index}
                className="image-wrapper"
                style={{
                  width: `${(1 / this.props.input.length) * 100}%`,
                  height: `100%`
                }}
              >
                <img
                  className="image"
                  src={image.src}
                  alt={image.caption}
                  onClick={() => this.showModal(index)}
                />
              </div>
            );
          })}
        </div>

        <div className="modal">
          <span className="close" onClick={() => this.hideModal()}>
            ×
          </span>
          <div className="modal-content">
            <Sliding
              ref={this.slideshowGallery}
              input={this.props.input}
              ratio={this.props.ratio}
              mode={`manual`}
            />
          </div>
        </div>
      </div>
    );
  }
}
