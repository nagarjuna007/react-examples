import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import Api from './Webapi/Api';
import List from './Components/List';
import ListData from './PersonData/ListData';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div className="pt-3">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/api">API Calls</Link>
              </li>
               <li className="list-inline-item">
                <Link to="/list">React Examples</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/listData">List Data</Link>
              </li>
            </ul>

            <hr />
           <Route exact path="/api" component={Api} />
           <Route exact path="/list" component={List} />
           <Route exact path="/listData" component={ListData} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
