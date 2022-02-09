import './style.scss';
import React from 'react';

function HeroBanner() {

    const intro = "Une brève histoire du changement climatique";
    const webBy = "Contée par Laroussi Nabil";
    const [story, setStory] = React.useState(' '.repeat(intro.length));
    const [by, setBy] = React.useState(' '.repeat(webBy.length));

    const indexStory = React.useRef(0);
    const indexBy = React.useRef(0);

    function tick(toPrint, set, index) {
        let dash = ' '.repeat(toPrint.length - index.current - 1);
        let complete = toPrint[index.current] + dash;
        set(prev => prev.slice(0, index.current) + complete);
        index.current += 1;
    }

    React.useEffect(() => {
        if (indexStory.current < intro.length) {
            let addChar = setInterval(
                () => tick(intro, setStory, indexStory), 50
            );
            return () => clearInterval(addChar);
        }
    }, [story], tick)

    React.useEffect(() => {
        if ((indexStory.current === intro.length)
                && (indexBy.current < webBy.length)) {
            let addChar = setInterval(
                () => tick(webBy, setBy, indexBy), 75
            );
            return () => clearInterval(addChar);
        }
    }, [story, by], tick)

    return (
      <div id="heroContainer">
          <div className="navContainer">
              <nav>
                  <div className="navListContainer">
                      <ul>
                          <li className="navelem">Une brève histoire du climat</li>
                          <li className="navelem">Un monde fossile</li>
                          <li className="navelem">Qui suis-je ?</li>
                          <li className="navelem">Comment est fait ce site ?</li>
                      </ul>
                  </div>
              </nav>
          </div>

          <div id="introContainer">
              <h1 id="introText">
                  <pre>{story}</pre>
              </h1>
              <h2 id="by">
                  <pre>{by}</pre>
              </h2>
          </div>
      </div>
  );
}

export default HeroBanner;
