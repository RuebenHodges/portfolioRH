import './App.css';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Footnotes from './components/footnotes';
import reactLogo from './assets/react.png';
import 'animate.css';
import 'aos/dist/aos.css';  // Import the CSS styles
//personal pictures
import pfp from './assets/unnamed.jpg';
import pfp2 from './assets/unnamed2.jpg';
//skills sections
import htmlCss from './assets/htmlCss.png';
import javaLogo from './assets/Java-logo.png';
import jsLogo from './assets/JavaScript-logo.png';
import sqlLogo from './assets/sql.png';

function HireMe() {
 
  return (
    <div className="App">
      <Navbar/>
      <body>
    
      </body> 
      <Footnotes/>
    </div>
  );
}

export default HireMe;
