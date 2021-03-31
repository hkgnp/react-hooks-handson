import React from 'react';

// include the react router DOM stuff
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/thank-you">
            <ThankYou />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Switch>
        <div style={{ backgroundColor: 'grey' }}>(c) Trent Global 2021</div>
      </div>
    </Router>
  );
}

export default App;
