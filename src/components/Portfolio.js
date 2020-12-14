import walkscreen from '../assets/walk-with-me-screen.png';
import roscoescreen from '../assets/roscoe-screen.png';
import dryftscreen from '../assets/dryft-screen.png';
import myndexscreen from '../assets/myndex-screen.png';
import rescuelink from '../assets/rescue-link.svg';
import roscoelink from '../assets/roscoe-link.svg';
import dryftlink from '../assets/dryft-link.svg';
import myndexlink from '../assets/myndex-link.svg';

let Portfolio = () => {
  return(
    <div id="projects">
      <div className="project">
        <div className="show"><img src={walkscreen} className="screen-shot" /></div>
        <div className="tell">
          <div className="apptext">
            <h2>walk-with-me</h2>
            <p>"Walk With Me" is a Node.js/Express application, built with a partner that allows users to sign up to walk dogs at RescuePup, our fictional dog shelter.</p>
          </div>
          <div className="applinks">
            <div className="deployed">
              <p>deployed:</p>
              <a href="https://sheltered-bastion-54041.herokuapp.com" target="_blank">
                <img src={rescuelink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              <p>repo:</p>
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
            <p>Myndex is an application built with React, Express, Node.js and MongoDB that integrates the Tradier API to allow users to create and monitor custom stock market indeces</p>
          </div>
          <div className="applinks">
            <div className="deployed">
              <p>deployed:</p>
              <a href="https://secure-lowlands-61590.herokuapp.com/">
                <img src={myndexlink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              <p>repo:</p>
              <a href="https://github.com/jedgodsey/walk-with-me" target="_blank">
                <i className="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="show"><img src={dryftscreen} className="screen-shot" /></div>
        <div className="tell">
          <div className="apptext">
            <h2>DRYFT</h2>
            <p>Dryft is a Python application using Django and PostgresQL that allows travelers to blog and share pictures about their favorite places</p>
          </div>
          <div className="applinks">
            <div className="deployed">
              <p>deployed:</p>
              <a href="https://dryft.herokuapp.com/" target="_blank">
                <img src={dryftlink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              <p>repo:</p>
              <a href="https://github.com/jedgodsey/walk-with-me" target="_blank">
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
            <p>My Friend Roscoe is a simple 'Tamagotchi' type game based on the user's relationship with a digital urban raccoon.</p>
          </div>
          <div className="applinks">
            <div className="deployed">
              <p>deployed:</p>
              <a href="https://jedgodsey.github.io/my-friend-roscoe/" target="_blank">
                <img src={roscoelink} className="link-logo" />
              </a>
            </div>
            <div className="repo">
              <p>repo:</p>
              <a href="https://github.com/jedgodsey/walk-with-me" target="_blank">
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
