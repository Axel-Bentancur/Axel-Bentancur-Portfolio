import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export default class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav  id='home'>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <div className="line"></div>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='menu-btn' onClick={this.handleClick}>
          <div className={this.state.clicked ? "menu-btn-burger open" : "menu-btn-burger"}>
          </div>
        </div>
      </nav>
    );
  }
}

