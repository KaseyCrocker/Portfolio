import React from 'react';


function About() {
    return (
        <div>
        <section className="hero">
          <h1 className="subtitle">Space!</h1>
        </section>
        <section id="about-me" className="me">
          <h1>ABOUT ME</h1>
          <div>
            <img
              id="headshot"
              src={require(`../../assets/headshot.jpg`)}
              alt="headshot"
            />
            <div>
            butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel meggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft
            </div>
          </div>
        </section>
        </div>
    );
}

export default About;