import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import reactLogo from './assets/react.png';
//personal pictures
import pfp from './assets/pfp.png';
import pfp2 from './assets/pfp2.png';
//skills sections
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
            <div className='introduction-container'>
              <div className='nameAndTitle'>
                <h1 className='name'>Rueben Hodges</h1>
                <h1 className='role'> Web Development</h1>
                <h1 className='role'>User-Centric Design</h1>
              </div>

              <img className='pfp' src={pfp}></img>

              <div className='alumni'>
                <h1 className='status'>Alumni</h1>
                <h1 className='uni'>University of Michigan - <span class="degree">Dearborn</span></h1>
                <h1 className='degree'>Bachelor's Software Engineering</h1>
              </div>
            </div>
          </div>

          <div className="aboutMe">
          <h1>Software Engineer Specializing in Innovative Web Development</h1>
            <div className='aboutMeContainer'>
              
              <img className='pfp2' src={pfp2}></img>
                <div className='textContainer'>
                  <p> 
                  Greetings! Im a recent graduate holding a Bachelor’s Degree in Software Engineering. 
                  I am passionate about creating user-centric solutions in web development. 
                  Through my academic studies and project work, 
                  I have gained a strong understanding of technologies such as Java, SQL, 
                  and modern web frameworks, which I use to build seamless and scalable websites. 
                  I am a team player who thrives on collaboration and welcomes challenges that help me to enhance my skills and contribute to the success of my team. 
                  Currently located in the Detroit Metropolitan Area, 
                  I am actively seeking opportunities where 
                  I can innovate, grow, and make a meaningful impact.</p>
                </div>
            </div>
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
