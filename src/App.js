import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
// Routes
import Routes from './Routes'
// Componants
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
// Constant
const customHistory = createBrowserHistory();
function App() {
    return (
      <Router history={customHistory}>
      <div className="app-main">
        <Header />
         <div className="main-route">
              <Routes />
            </div>
         <Footer />
      </div>
    </Router>
    )
}

export default App;
