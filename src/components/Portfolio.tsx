import walkscreen from '../assets/walk-with-me-screen.png';
import roscoescreen from '../assets/roscoe-screen.png';
import jsonscreen from '../assets/json-screen.png';
import myndexscreen from '../assets/myndex-screen.png';
import rescuelink from '../assets/rescue-link.svg';
import roscoelink from '../assets/roscoe-link.svg';
import jsonlink from '../assets/json-link.svg';
import myndexlink from '../assets/myndex-link.svg';
// const walkscreen = require('../assets/walk-with-me-screen.png') as string;
// const roscoescreen = require('../assets/roscoe-screen.png') as string;
// const jsonscreen = require('../assets/json-screen.png') as string;
// const myndexscreen = require('../assets/myndex-screen.png') as string;
// const rescuelink = require('../assets/rescue-link.svg') as string;
// const roscoelink = require('../assets/roscoe-link.svg') as string;
// const jsonlink = require('../assets/json-link.svg') as string;
// const myndexlink = require('../assets/myndex-link.svg') as string;

let Portfolio: React.FC = () => {
  return(
    
    <div id="projects">
      <div className="project">
        <div className="show"><img src={jsonscreen} className="screen-shot" /></div>
        <div className="tell">
          <div className="apptext">
            <h2>From the Slums of JSON</h2>
            REST API anyone can use for testing or mockup inspired by the Wu-Tang Clan. Uses Python, Django & PostgreSQL
          </div>
          <div className="applinks">
            <div className="deployed">
              deployed:
              <a href="https://slumsofjson.herokuapp.com/" target="_blank">
                <img src={jsonlink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              repo:
              <a href="https://github.com/jedgodsey/slumsofJSON" target="_blank">
                <i className="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="show"><img src={walkscreen} className="screen-shot" /></div>
        <div className="tell">
          <div className="apptext">
            <h2>walk-with-me</h2>
            A Node.js/Express application, built with a partner that allows users to sign up to walk dogs at RescuePup, our fictional dog shelter.
          </div>
          <div className="applinks">
            <div className="deployed">
              deployed:
              <a href="https://sheltered-bastion-54041.herokuapp.com" target="_blank">
                <img src={rescuelink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              repo:
              <a href="https://github.com/jedgodsey/walk-with-me" target="_blank">
                <i className="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="project">
        <div className="show"><img src={myndexscreen} className="screen-shot" /></div>
        <div className="tell">
          <div className="apptext">
            <h2>MYNDEX</h2>
            An application built with React, Express, Node.js & MongoDB that integrates the Tradier API to allow users to create and monitor custom stock market indices
          </div>
          <div className="applinks">
            <div className="deployed">
              deployed:
              <a href="https://secure-lowlands-61590.herokuapp.com/">
                <img src={myndexlink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              repo:
              <a href="https://github.com/jedgodsey/myndex-MERN" target="_blank">
                <i className="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="show"><img src={roscoescreen} className="screen-shot" /></div>
        <div className="tell">
          <div className="apptext">
            <h2>My Friend Roscoe</h2>
            Simple 'Tamagotchi' type game based on the user's relationship with a digital urban raccoon.
          </div>
          <div className="applinks">
            <div className="deployed">
              deployed:
              <a href="https://jedgodsey.github.io/my-friend-roscoe/" target="_blank">
                <img src={roscoelink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              repo:
              <a href="https://github.com/jedgodsey/my-friend-roscoe" target="_blank">
                <i className="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Portfolio;
