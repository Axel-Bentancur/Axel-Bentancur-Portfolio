import React, { Component } from "react";
import "./SkillIconList.css";
import { ReactComponent as Html5Svg } from "../Icons/html5-plain.svg";
import { ReactComponent as Css3Svg } from "../Icons/css3-plain.svg";
import { ReactComponent as BootstrapSvg } from "../Icons/bootstrap-plain.svg";
import { ReactComponent as JavascriptSvg } from "../Icons/javascript-plain.svg";
import { ReactComponent as JquerySvg } from "../Icons/jquery-plain.svg";
import { ReactComponent as ReactSvg } from "../Icons/react-original.svg";
import { ReactComponent as GitSvg } from "../Icons/git-original.svg";
import { ReactComponent as NodejsSvg } from "../Icons/nodejs-plain.svg";
import { ReactComponent as MongoSvg } from "../Icons/mongodb-plain.svg";
import { ReactComponent as PhotoshopSvg } from "../Icons/photoshop-plain.svg";
import { ReactComponent as SassSvg } from "../Icons/sass-original.svg";

export default class SkillIconList extends Component {
  render() {
    return (
        <div className="skill">
          <Html5Svg className="skill-icons html" title="Html5" />
          <Css3Svg className="skill-icons css" title="Css3" />
          <BootstrapSvg className="skill-icons boots" title="Bootstrap" />
          <JavascriptSvg className="skill-icons js" title="JavaScript" />
          <JquerySvg className="skill-icons jq" title="JQuery" />
          <ReactSvg className="skill-icons react" title="React" />
          <GitSvg className="skill-icons git" title="Git" />
          <NodejsSvg className="skill-icons node" title="Node.Js" />
          <MongoSvg className="skill-icons mongo" title="MongoDB" />
          <PhotoshopSvg className="skill-icons photo" title="Photoshop" />
          <SassSvg className="skill-icons sass" title="Sass" />
        </div>
    );
  }
}
