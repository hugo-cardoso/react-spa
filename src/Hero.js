import React, { Component } from 'react';

class Hero extends Component {

    constructor(props){
        super();
        this.state = {text: props.text};
    }

    render() {
        let text = this.state.text;

        return (
          <div className="hero_page">
            <span>{text}</span>
          </div>
        );
        }
}

export default Hero;
