import React, { Component } from 'react';
import Hero from "../Hero";

class Dashboard extends Component {
  render() {
    return (
    	<div>
	        <nav className="breadcrumb">
			  <ul>
			    <li><a>General</a></li>
			    <li className="is-active"><a>Dashboard</a></li>
			  </ul>
			</nav>
		  <Hero text="Dashboard"/>
		</div>
    );
  }
}

export default Dashboard;
