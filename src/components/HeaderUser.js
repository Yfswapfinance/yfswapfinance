import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        
        {/* <!-- Header start --> */}
        <header>
          {/* Topbar start */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <p>
                    <span role="img" aria-label="siren">🚨</span> YFswap is an experiment in Legacy Token Farming. DYOR.
                    <a href="https://medium.com/@yfswap" target="_blank" rel="noopener noreferrer">Learn More</a>. <span role="img" aria-label="siren">🚨</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar end */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                    <img src={require("../assets/img/logo.svg")} className="white" alt="YFSWAP" />
                    <img src={require("../assets/img/logo-dark.svg")} className="dark" alt="YFSWAP" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars"></i>
                    </span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/"  activeClassName="active">Home </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/menu" activeClassName="active">Menu <span role="img" aria-label="">🔥</span></NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/staking" activeClassName="active">Staking</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/harvestpartytwo" activeClassName="active">Exchange</NavLink>
                      </li>
                      <li className="nav-item opacity">
                        <NavLink className="nav-link" to="/about"  activeClassName="active">Vote</NavLink>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dark-switch">
                        <input type="checkbox" className="checkbox" id="chk" />
                        <label className="label" for="chk">
                          <i className="fas fa-moon"></i>
                          <i className="fas fa-sun"></i>
                          <div className="ball"></div>
                        </label>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link primary-btn"
                          href="/"
                          >Connect Your Wallet</a
                        >
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Header end --> */}
      </div>
    )
  }
}
