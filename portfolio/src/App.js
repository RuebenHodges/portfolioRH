import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import pfp from './assets/pfp.png';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <body>
        <main>
          <img src={pfp}></img>
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
        </main>
      </body>
     
    </div>

  );
}

export default App;
