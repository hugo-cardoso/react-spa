import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import Costumers from './pages/Costumers';
import Sidemenu from './Sidemenu';
import './index.css';
import './css/bulma.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
    <Router>
    <div>
        <Navbar />
        <div className="">
            <div className="columns">
              <div className="column is-narrow menuLeft">
                <div className="box sidemenu">

                    <Sidemenu />

                </div>
              </div>
              <div className="column">
                <div className="box view">
                    <div>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route path="/costumers" component={Costumers}/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </Router>,
  document.getElementById('root')
);
