import React, {Component} from 'react';

class App extends Component {
  state = {
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4'
  }

  handleAboutClick = () => {
    this.setState({
      videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4'
    })
  }

  handlePortfolioClick = () => {
    this.setState({
      videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-haze-across-the-desert-22146-large.mp4'
    })
  }

  handleContactClick = () => {
    this.setState({
      videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4'
    })
  }

  render () {
    console.log('state: ', this.state.videoURL)
    return (
      <>
        <div id="background">
          <video key={this.state.videoURL} id="background-video" loop autoPlay>
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
          </video>
        </div>
        <div id="content">
          <header>
            <div id="jed">
              JED
            </div>
            <div id="options">
              <div id="nav-background"></div>
              <nav>
                <div onClick={this.handleAboutClick}><h1>About Me</h1></div>
                <div onClick={this.handlePortfolioClick}><h1>Portfolio</h1></div>
                <div><h1><a href="http://www.msnlabs.com/img/resume-sample.pdf">Experience</a></h1></div>
                <div onClick={this.handleContactClick}><h1>Contact</h1></div>
              </nav>
            </div>
          </header>
        </div>
      </>
    )
  }
};

// class App extends Component {
//   state = {
//     videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4'
//   }

//     render () {
//         return (
//             <video id="background-video" loop autoPlay>
//                 <source src={this.state.videoURL} type="video/mp4" />
//                 <source src={this.state.videoURL} type="video/ogg" />
//                 Your browser does not support the video tag.
//             </video>
//         )
//     }
// };

export default App;

// desert: https://assets.mixkit.co/videos/preview/mixkit-haze-across-the-desert-22146-large.mp4

// koi: https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4

// rain on window: https://assets.mixkit.co/videos/preview/mixkit-window-on-a-rainy-day-2846-large.mp4
