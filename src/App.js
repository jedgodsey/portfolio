import React, {Component} from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import logo from './assets/logo.svg'

class App extends Component {
  state = {
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4',
    view: 'about'
  }

  handleAboutClick = () => {
    this.setState({
      videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4',
      view: 'about'
    })
  }

  handlePortfolioClick = () => {
    this.setState({
      videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-haze-across-the-desert-22146-large.mp4',
      view: 'portfolio'
    })
  }

  handleContactClick = () => {
    this.setState({
      videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4',
      view: 'contact'
    })
  }

  showView = () => {
    switch (this.state.view) {
      case 'about':
        return (<About />)
      case 'portfolio':
        return (<Portfolio />)
      case 'contact':
        return (<Contact />)
      default:
        return (<About />)
    }
  }



  render () {
    console.log('state: ', this.state.videoURL)
    return (
      <>
        <div id="background">
          <video key={this.state.videoURL} id="background-video" loop autoPlay muted>
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
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
                <div onClick={this.handleAboutClick} className="select"><h1>About Me</h1></div>
                <div onClick={this.handlePortfolioClick} className="select"><h1>Portfolio</h1></div>
                <div className="select"><h1><a href="https://drive.google.com/file/d/1ZN1Cvj2rtAE64ZDMZImtJz3q9WrfM4FR/view?usp=sharing">Experience</a></h1></div>
                <div onClick={this.handleContactClick}className="select"><h1>Contact</h1></div>
              </nav>
            </div>
          </header>
          <main>
            <div className="content">
              {this.showView()}
            </div>            
          </main>
        </div>
      </>
    )
  }
};

export default App;
