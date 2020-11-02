import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Modal, Button, Navbar } from 'react-bootstrap'

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';


function toggleClass() {
  var element = document.getElementById("settings");

  if (element.classList) { 
    element.classList.toggle("active");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("active");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("active");
      element.className = classes.join(" "); 
  }
}
function toggleClassDropdown() {
  var element = document.getElementById("dropdown");

  if (element.classList) { 
    element.classList.toggle("active");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("active");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("active");
      element.className = classes.join(" "); 
  }
}

export default class HeaderExchange extends Component {
  
  state = {
    isOpen: false,
    isActive:false
  };


  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleToggle = () => this.setState({ isActive: true });

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
                <Navbar className="navbar navbar-expand-lg" expand="lg">
                  <Link className="navbar-brand" to="/">
                    <img src={require("../assets/img/logo.svg")} className="white" alt="YFSWAP" />
                    <img src={require("../assets/img/logo-dark.svg")} className="dark" alt="YFSWAP" />
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars"></i>
                    </span>
                  </Navbar.Toggle>

                  <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        <NavLink className="nav-link" to="/exchange" activeClassName="active">Exchange</NavLink>
                      </li>
                      <li className="nav-item opacity">
                        <NavLink className="nav-link" to="/vote"  activeClassName="active">Vote</NavLink>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item border-right-color">
                        <button className="balance-btn"
                          onClick={this.openModal} >
                          <span className="eth">0 ETH</span>
                          <span>0xD4fgh…UhG</span>
                          <img src={require("../assets/img/icon.svg")} alt="" />
                        </button>
                      </li>
                      <li className="nav-item">
                        <button className="transparent-btn" onClick={toggleClass}>
                          <img src={require("../assets/img/cog.svg")} alt="" />
                        </button>
                        <div className="settings" id="settings">
                          <h4>Transaction Settings</h4>
                          <h4 className="mb-3">Slippage tolerances<button className="tp-btn" onClick={this.closeModal} > <img src={require("../assets/img/what-sign.svg")} alt="" /></button></h4>
                          <div className="percent-select">
                            <button className="percent-btn">0.1%</button>
                            <button className="percent-btn">0.5%</button>
                            <button className="percent-btn">1%</button>
                            <button className="percent-btn selected">3.00%</button>
                          </div>
                          <h4 className="mb-3">Transaction dealine<button className="tp-btn" onClick={this.closeModal} > <img src={require("../assets/img/what-sign.svg")} alt="" /></button></h4>
                          <div className="percent-select">
                            <button className="percent-btn time">20</button> minutes
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <button className="transparent-btn"  onClick={toggleClassDropdown}>
                          <img src={require("../assets/img/dropdown.svg")} alt="" />
                        </button>
                        <div className="settings dropdown" id="dropdown">
                          <ul>
                            <li>
                              <a href="/"><img src={require("../assets/img/about.svg")} alt="About"/> About</a>
                              <a href="/"><img src={require("../assets/img/docs.svg")} alt="Docs"/> Docs</a>
                              <a href="/"><img src={require("../assets/img/code.svg")} alt="Code"/> Code</a>
                              <a href="/"><img src={require("../assets/img/analytics.svg")} alt="Analytics"/> Analytics</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Header end --> */}
        
        {/* My wallet Balance Start */}
          <Modal 
          size="lg"
          show={this.state.isOpen} onHide={this.closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="walletaccount"
          >
            <Modal.Body>
              <div className="wallet-body">
                <div className="wallet-top">
                  <h4 className="mb-3">Account</h4>
                  <button className="transparent-btn"
                    onClick={this.closeModal} >
                    <img src={require("../assets/img/close.svg")} alt="" />
                  </button>
                </div>
                <div className="modal-innerbox">
                  <div className="title">
                    <span>Connected to Metamask</span>
                    <button className="primary-btn blue sm">Change</button>
                  </div>
                  <div className="balance">
                    <img src={require("../assets/img/icon.svg")} alt="" /> <span>0xD4fgh…UhG</span>
                  </div>
                  <div className="btns">
                    <button className="transparent-btn">
                      <img src={require("../assets/img/copy.svg")} alt="" /> Copy address
                    </button>
                    <button className="transparent-btn">
                      <img src={require("../assets/img/view.svg")} alt="" /> View on Etherscan
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-bottom">
                <h4>Your transactions will appear here…</h4>
                <h4>Swap 0.492 ETH for 20 USDT</h4>
              </div>
            </Modal.Body>
          </Modal>
        {/* My wallet Balance Start */}
        
        {/* My wallet Balance Start */}
          <Modal 
          size="lg"
          show={this.state.isOpen} onHide={this.closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="walletaccount"
          >
            <Modal.Body>
              <div className="wallet-body">
                <div className="wallet-top">
                  <h4 className="mb-3">Account</h4>
                  <button className="transparent-btn"
                    onClick={this.closeModal} >
                    <img src={require("../assets/img/close.svg")} alt="" />
                  </button>
                </div>
                <div className="modal-innerbox">
                  <div className="title">
                    <span>Connected to Metamask</span>
                    <button className="primary-btn blue sm">Change</button>
                  </div>
                  <div className="balance">
                    <img src={require("../assets/img/icon.svg")} alt="" /> <span>0xD4fgh…UhG</span>
                  </div>
                  <div className="btns">
                    <button className="transparent-btn">
                      <img src={require("../assets/img/copy.svg")} alt="" /> Copy address
                    </button>
                    <button className="transparent-btn">
                      <img src={require("../assets/img/view.svg")} alt="" /> View on Etherscan
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-bottom">
                <h4>Your transactions will appear here…</h4>
              </div>
            </Modal.Body>
          </Modal>
        {/* My wallet Balance end */}

        {/* My wallet Transaction Start */}
          <Modal 
          size="lg"
          show={this.state.isOpen} onHide={this.closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="walletaccount"
          >
            <Modal.Body>
              <div className="wallet-body">
                <div className="wallet-top">
                  <h4 className="mb-3">Account</h4>
                  <button className="transparent-btn"
                    onClick={this.closeModal} >
                    <img src={require("../assets/img/close.svg")} alt="" />
                  </button>
                </div>
                <div className="modal-innerbox">
                  <div className="title">
                    <span>Connected to Metamask</span>
                    <button className="primary-btn blue sm">Change</button>
                  </div>
                  <div className="balance">
                    <img src={require("../assets/img/icon.svg")} alt="" /> <span>0xD4fgh…UhG</span>
                  </div>
                  <div className="btns">
                    <button className="transparent-btn">
                      <img src={require("../assets/img/copy.svg")} alt="" /> Copy address
                    </button>
                    <button className="transparent-btn">
                      <img src={require("../assets/img/view.svg")} alt="" /> View on Etherscan
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-bottom">
                <h4>Your transactions will appear here…</h4>
                <h4 className="blue">Swap 0.492 ETH for 20 USDT <img src={require("../assets/img/arrow-angle.svg")} alt="" /></h4>
                <button className="transparent-btn blue">
                  (Clear all)
                </button>
              </div>
            </Modal.Body>
          </Modal>
        {/* My wallet Transaction end */}
      </div>
    )
  }
}
