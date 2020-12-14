import walkscreen from '../assets/walk-with-me-screen.png';
import roscoescreen from '../assets/roscoe-screen.png';
import dryftscreen from '../assets/dryft-screen.png';
import myndexscreen from '../assets/myndex-screen.png';

let Portfolio = () => {
  return(
    <div id="projects">
      <div className="project">
        <div className="show"><img src={walkscreen} className="screen-shot" /></div>
        <div className="tell">
          <h3>walk-with-me</h3>
          <p>"Walk With Me" is a simple online application that allows users to sign up to walk dogs at RescuePup, our fictional dog shelter.</p>
        </div>
      </div>
      <div className="project">
        <div className="show"><img src={myndexscreen} className="screen-shot" /></div>
        <div className="tell">
          <h3>walk-with-me</h3>
          <p>"Walk With Me" is a simple online application that allows users to sign up to walk dogs at RescuePup, our fictional dog shelter.</p>
        </div>
      </div>
      <div className="project">
        <div className="show"><img src={dryftscreen} className="screen-shot" /></div>
        <div className="tell">
          <h3>walk-with-me</h3>
          <p>"Walk With Me" is a simple online application that allows users to sign up to walk dogs at RescuePup, our fictional dog shelter.</p>
        </div>
      </div>
      <div className="project">
        <div className="show"><img src={roscoescreen} className="screen-shot" /></div>
        <div className="tell">
          <h3>walk-with-me</h3>
          <p>"Walk With Me" is a simple online application that allows users to sign up to walk dogs at RescuePup, our fictional dog shelter.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
