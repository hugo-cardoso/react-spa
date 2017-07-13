import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import Costumers from './pages/Costumers';
import Sidemenu from './Sidemenu';
import './index.css';
import './css/bulma.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <div>
        <Navbar />
        <div className="">
            <div className="columns">
              <div className="column is-narrow">
                <div className="box sidemenu">

                    <Sidemenu/>

                </div>
              </div>
              <div className="column">
                <div className="box view">
                <BrowserRouter>
                    <div>
                    <Route path="/" component={Dashboard}/>
                    <Route path="/costumers" component={Costumers}/>
                    </div>
                </BrowserRouter>
                </div>
              </div>
            </div>
        </div>
    </div>,
  document.getElementById('root')
);
