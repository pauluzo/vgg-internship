import React from 'react';
import Particles from 'react-particles-js';

export const Introduction = (props) => {
  return(
    <div className="intro">
      <div className="intro-div">
        <Particles
          className="particles"
          params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
          }}
        />
        <div className="row intro-div-row px-2">
          <div className="col-lg-6 intro-col1">
            <div className="intro-heading">
              <h1 className="text-center">
                {props.headerTitle}
              </h1>
              <p>
                {props.headerBody}
              </p>
              <a href="/registration-form" className="get-started-btn">{props.headerButton}</a>
            </div>
          </div>
          <div className="col-lg-6 intro-col1">
            <div className="intro-img" >
              <img src="https://i.ibb.co/rFhH2gW/ILLUSTRATION.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction
