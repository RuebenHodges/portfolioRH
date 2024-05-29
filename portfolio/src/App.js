import './App.css';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar.js';
//import AppRouter from './AppRouter.js';
import { Route, Routes } from 'react-router-dom';
import Footnotes from './components/footnotes.js';
import 'animate.css';
import 'aos/dist/aos.css';  // Import the CSS styles
import Projects from './projects.js';
import Contact from './HireMe.js';
import About from './About.js';
function App() {
 
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/portfolioRH" element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      <Footnotes/>
    </div>
  );
}

export default App;
