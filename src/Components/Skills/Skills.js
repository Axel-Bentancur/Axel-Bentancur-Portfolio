import React, { Component } from "react";
import SkillIconList from "./SkillIconList";
import SectionName from "../SectionName";

export default class Skills extends Component {
  render() {
    return (
      <div className="section-container">
        <SectionName
          position="text-center"
          color1="gray"
          color2="cian"
          color3="gray"
          sectionName="SKILLS"
        />
        <SkillIconList />
      </div>
    );
  }
}
