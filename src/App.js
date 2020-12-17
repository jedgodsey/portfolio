import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import logo from './assets/logo.svg'

const App = () => {
  let [ vid, setVid ] = useState('https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4');

  let showView = () => {
    switch (vid) {
      case 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4':
        return (<About />)
      case 'https://assets.mixkit.co/videos/preview/mixkit-haze-across-the-desert-22146-large.mp4':
        return (<Portfolio />)
      case 'https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4':
        return (<Contact />)
      default:
        return (<About />)
    }
  }

  return (
    <>
      <div id="background">
        <video key={vid} id="background-video" loop autoPlay muted>
          <source src={vid} type="video/mp4" />
          <source src={vid} type="video/ogg" />
        </video>
      </div>
      <div id="content">
        <header>
          <div id="jed">
            <img src={logo} alt="Jed Logo" />
          </div>
          <div id="options">
            <div id="nav-background"></div>
            <nav>
              <div onClick={() => setVid('https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4')} className="select"><h1>About Me</h1></div>
              <div onClick={() => setVid('https://assets.mixkit.co/videos/preview/mixkit-haze-across-the-desert-22146-large.mp4')} className="select"><h1>Portfolio</h1></div>
              <div className="select"><h1><a href="https://drive.google.com/file/d/1ZN1Cvj2rtAE64ZDMZImtJz3q9WrfM4FR/view?usp=sharing" target="_blank">Experience</a></h1></div>
              <div onClick={() => setVid('https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4')}className="select"><h1>Contact</h1></div>
            </nav>
          </div>
        </header>
        <main>
          <div className="content">
            {showView()}
          </div>            
        </main>
      </div>
    </>
  )
};

export default App;
