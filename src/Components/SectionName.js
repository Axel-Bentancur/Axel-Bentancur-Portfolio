import React, { Component } from "react";

export default class SectionName extends Component {
  render() {
    return (
      <div className={`section-name ${this.props.position}`}>
        <span className={`section-text ${this.props.color1}`}>{`<`}</span>
        <span className={`section-text ${this.props.color2}`}>
          {this.props.sectionName}
        </span>
        <span className={`section-text ${this.props.color3}`}>{`/>`}</span>
      </div>
    );
  }
}
