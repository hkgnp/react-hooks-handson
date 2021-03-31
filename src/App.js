import React from 'react';
// include the react router DOM stuff
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import Posts from './pages/Posts';
import ProductContext from './ProductContext';
import ProductListing from './pages/ProductListing';
import Context from './Context';
import StudentsListing from './StudentsListing';

export default class App extends React.Component {
  state = {
    products: [
      { id: 1, product_name: 'Anvils', cost: 9.99 },
      { id: 2, product_name: 'Hammers', cost: 9.99 },
      { id: 3, product_name: 'Nails', cost: 9.99 },
    ],
    students: [
      { id: 1, yearOfStudy: '2021', gender: 'male', graduated: false },
      { id: 2, yearOfStudy: '2020', gender: 'female', graduated: false },
      { id: 3, yearOfStudy: '2019', gender: 'male', graduated: true },
    ],
  };

  render() {
    // Add in the context
    const context = {
      products: () => {
        return this.state.products;
      },
      students: () => {
        return this.state.students;
      },
      addStudent: (
        newStudentId,
        newStudentYear,
        newStudentGender,
        newStudentGraduated
      ) => {
        const clone = [...this.state.students];
        clone.push({
          id: newStudentId,
          yearOfStudy: newStudentYear,
          gender: newStudentGender,
          graduated: newStudentGraduated,
        });

        this.setState({
          students: clone,
        });
      },
      deleteStudent: (deleteId) => {
        const clone = [...this.state.students];
        clone.splice(
          clone.findIndex(({ id }) => id === deleteId),
          1
        );
        this.setState({
          students: clone,
        });
      },
    };

    return (
      <React.Fragment>
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
            <Context.Provider value={context}>
              {/* <ProductListing /> */}
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
                <Route exact path="/students">
                  <StudentsListing />
                </Route>
              </Switch>
            </Context.Provider>
            {/* <div style={{ backgroundColor: 'grey' }}>
                (c) Trent Global 2021
              </div> */}
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
