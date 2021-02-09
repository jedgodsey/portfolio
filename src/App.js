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
      case 'https://storage.coverr.co/videos/PMVhqGEtrFe6M28NtL4LTP7MKO01LeL01G?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjA4MjM1NDIzfQ.pnH_km0f62MsJguUc_0vynHk7HZttzWemSKrv6Zf9Ac':
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
              <div onClick={() => setVid('https://storage.coverr.co/videos/PMVhqGEtrFe6M28NtL4LTP7MKO01LeL01G?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjA4MjM1NDIzfQ.pnH_km0f62MsJguUc_0vynHk7HZttzWemSKrv6Zf9Ac')} className="select"><h1>Portfolio</h1></div>
              <div className="select"><h1><a href="https://drive.google.com/file/d/1naspm0F4GDw0hj9KiJWh5oMAdWFmPg5H/view?usp=sharing" target="_blank" rel="noreferrer">Experience</a></h1></div>
              <div onClick={() => setVid('https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4')}className="select"><h1>Contact</h1></div>
            </nav>
          </div>
        </header>
        <main>
          <div className="content">
            <div id="spacer">
              {showView()}
            </div>
          </div>            
        </main>
      </div>
    </>
  )
};

export default App;
