import React, {Component} from 'react';

class App extends Component {
  state = {
    videoURL: 'https://assets.mixkit.co/videos/preview/mixkit-winter-storm-over-a-small-town-15500-large.mp4'
  }

  render () {
    return (
      <>
        <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
        </video>
        <h1>IS THIS WORKING?</h1>
      </>
    )
  }
};

export default App;

// desert: https://assets.mixkit.co/videos/preview/mixkit-haze-across-the-desert-22146-large.mp4

// koi: https://assets.mixkit.co/videos/preview/mixkit-rain-splashing-on-a-fish-pond-28101-large.mp4

// rain on window: https://assets.mixkit.co/videos/preview/mixkit-window-on-a-rainy-day-2846-large.mp4
