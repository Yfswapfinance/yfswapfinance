import React, { Component } from 'react'

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer start --> */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="socials-icon">
                  <a href="/" target="_blank" rel="noopener noreferrer"><img src={require("../assets/img/ethersan-logo.svg")} alt="" /></a>
                  <a href="https://medium.com/@yfswap" target="_blank" rel="noopener noreferrer"><img src={require("../assets/img/medium.svg")} alt="" /></a>
                  <a href="https://t.me/yfswap" target="_blank"  rel="noopener noreferrer"><img src={require("../assets/img/telegram.svg")} alt="" /></a>
                  <a href="https://github.com/abanshinoburu" target="_blank" rel="noopener noreferrer"><img src={require("../assets/img/github.svg")} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer end --> */}
      </div>
    )
  }
}
