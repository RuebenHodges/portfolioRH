import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import reactLogo from './assets/react.png';
import htmlCss from './assets/htmlCss.png';
import javaLogo from './assets/Java-logo.png';
import jsLogo from './assets/JavaScript-logo.png';
import sqlLogo from './assets/sql.png';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <body>
        <main>
          <div className="introduction">
            <h1>RuebenHodges</h1>
          </div>
          <div className="aboutMe">
            <h1>Software Engineer Specializing in Innovative Web Development</h1>
            <p> 
            Greetings!Im a recent graduate holding a Bachelor’s Degree in Software Engineering. 
            I am passionate about creating user-centric solutions in web development. 
            Through my academic studies and project work, 
            I have gained a strong understanding of technologies such as Java, SQL, 
            and modern web frameworks, which I use to build seamless and scalable websites. 
            I am a team player who thrives on collaboration and welcomes challenges that help me to enhance my skills and contribute to the success of my team. 
            Currently located in the Detroit Metropolitan Area, 
            I am actively seeking opportunities where 
            I can innovate, grow, and make a meaningful impact.</p>
          </div>
            <div className="introduction">
              <h1>Skills & Technolgies</h1>
              <div className='SkillsContatiner'>
                <div className='captionContainer'>
                  <img className ='skillLogos' src={reactLogo}></img>
                  <figcaption>React</figcaption>
                </div>
                <div className='captionContainer'>
                  <img className ='skillLogos' src={htmlCss}></img>
                  <figcaption>HTML</figcaption>
                </div>
                <div className='captionContainer'>
                  <img className ='skillLogos' src={javaLogo}></img>
                  <figcaption>Java</figcaption>
                </div>
                <div className='captionContainer'>
                  <img className ='skillLogos' src={jsLogo}></img>
                  <figcaption>Javascript</figcaption>
                </div>
                <div className='captionContainer'>
                  <img className ='skillLogos' src={sqlLogo}></img>
                  <figcaption>Sql</figcaption>
              </div>
            </div>
           

          </div>
        </main>
      </body> 
    </div>

  );
}

export default App;
