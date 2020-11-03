import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import { ReactComponent as GithubSvg } from "../Icons/github-original.svg";
import { ReactComponent as LinkedinSvg } from "../Icons/linkedin-original.svg";
import { ReactComponent as PdfSvg } from "../Icons/pdf.svg";
import {TimelineLite, Power3 } from "gsap";

function HomePage(){
   let t1 = new TimelineLite({delay: 0.3})
   useEffect(()=>{
    t1.from('.text-info',{x:-50, opacity:0, ease: Power3.easeOut, delay: 0.2}, 'Start');
   })
    return (
      <>
        <Navbar />
        <div className="home-section">
          <div className="text-container">
            <span className="bg-text">DEVE_</span>
            <span className="bg-text">LOPER</span>
            <div
              className="text-info">
              <h3>
                Hello<span className="point">.</span>
              </h3>
              <h3>I am Axel</h3>
            </div>
          </div>
          <div className="social-media">
            <div className="middleline"></div>
            <div className="social-icon">
              <a
                href="https://github.com/Axel-Bentancur"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <GithubSvg
                  className="home-icons"
                  href="https://github.com/Axel-Bentancur"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1piw3MKn50ngJCZSE5U0uk-5E87-7O6hT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="icon-link"
              >
                <PdfSvg className="home-icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/axel-bentancur-9b1487161/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <LinkedinSvg className="home-icons" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
export default HomePage;
