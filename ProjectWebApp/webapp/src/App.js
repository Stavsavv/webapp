import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Partners from './pages/partners';
import Products from './pages/products';
import About from './components/About/index';
import LogIn from './components/Login/index';
import Register from './components/Register/index';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/partners">
        <Partners />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Router>
  );
}

export default App;
