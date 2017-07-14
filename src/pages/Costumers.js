import React, { Component } from 'react';
import Hero from "../Hero";

class Costumers extends Component {
  render() {
    return (
        <div>
	        <nav className="breadcrumb">
			  <ul>
			    <li><a>General</a></li>
			    <li className="is-active"><a>Costumers</a></li>
			  </ul>
			</nav>
		  <Hero text="Costumers"/>
		</div>
    );
  }
}

export default Costumers;
