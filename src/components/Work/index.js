import React from "react";

function Portfolio() {
    return (
        <section id="work" className="section">
            <h1>PORTFOLIO</h1>
            <div className="links">
              <a href="/">
                <div className="work-img">
                  <div>
                    Self Report
                    <div>
                      MERN Stack
                    </div>
                  </div>
                </div>
              </a>
        
              <div className="work-img-others">
                <a href="https://intense-harbor-60080.herokuapp.com/">
                  <div id="led-wall" className="small-img">
                    <div>
                      Quick Track v2
                      <div>
                        MERN
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://xoerycaxo.github.io/Meal-Time-Roulette/">
                  <div id="calculator" className="small-img">
                    <div>
                      Meal Time Roulette
                      <div>
                        JavaScript/CSS/HTML
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://fast-tundra-42465.herokuapp.com/">
                  <div id="quick-track" className="small-img">
                    <div>
                      Quick Track
                      <div>
                        Full Stack
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://kaseycrocker.github.io/run-buddy/">
                  <div id="run-buddy" className="small-img">
                    <div>
                      Run Buddy
                      <div>
                        HTML/CSS
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </section>
    )
}

export default Portfolio;