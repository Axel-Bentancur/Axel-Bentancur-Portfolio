import React, { Component } from "react";
import "./Projects.css";
import { ReactComponent as GithubSvg } from "../Icons/github-original.svg";
import { ReactComponent as ExternalSvg } from "../Icons/external-link.svg";
import { ProjectList } from "./ProjectList";
import SectionName from "../SectionName";

export default class Projects extends Component {
  render() {
    return (
      <div className="section-container" id="projects">
        <SectionName
          position="text-right"
          color1="white"
          color2="cian"
          color3="white"
          sectionName="PROJECTS"
        />
        {ProjectList.map((item, index) => {
          return (
        <div className="project-container" key={index}>
            <div className="total-container">
            <img src={item.Img} alt={item.PName} className="imagen"/>
            <div className="text-content">
              <span className="project-title">{item.PName}</span>
              <p className="project-text">
              {item.Description}
              </p>
              <div className="project-icons">
                <a
                  href={item.GitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubSvg className="icons" />
                </a>
                <a
                  href={item.ExternalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalSvg className="icons" />
                </a>
              </div>
            </div>
            </div>
        </div>)})}
      </div>
    );
  }
}

/* {ProjectList.map((item, index) => {
          return (
            <div className="project-container" key={index}>
              <div className="bg-default-img">
                <div className="bg-default-img-2">
                <img src={item.Img} alt={item.PName} className="imagen" />
                </div>
              </div>
              <div className="web-info-box">
              <h2 className="web-name">{item.PName}</h2>
                <div className="web-info">
                  <p className="web-text">{item.Description}</p>
                </div>
              </div>
              <div className="project-icons">
                <a
                  href={item.GitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubSvg className="icons" />
                </a>
                <a
                  href={item.ExternalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalSvg className="icons" />
                </a>
              </div>
            </div>
          );
        })} */
