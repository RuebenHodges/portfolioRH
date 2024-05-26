import './App.css';
import './HireMe.css';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
//assets
import resume from './assets/resume.pdf';
import emailIcon from './assets/email-icon-122.png';

function HireMe() {
  return (
    <div className="App">
      <body>
        <main>
          <div className="contactMe">
          <h1>Want to get in Touch?</h1>
          <img className='email' src={emailIcon}/>

          <h3>best way to contact me is 
            <a className='socials' href="mailto:hodgesr@umich.edu"> Email </a>  or  
            <a className='socials' href='https://www.linkedin.com/in/ruebenhodges/'> linkedin </a></h3>
            <a href={resume} download={"RuebensResume"}>
            <button className="resumeButton" type='button'> Download Resume</button></a>
          </div>
        </main>
      </body>
    </div>
  );
}

export default HireMe;
