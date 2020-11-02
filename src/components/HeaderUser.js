import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Modal, Button,Navbar } from 'react-bootstrap'

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';



export default class HeaderUser extends Component {
  
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

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
                      <li className="nav-item dark-switch">
                        <input type="checkbox" className="checkbox" id="chk" />
                        <label className="label" for="chk">
                          <i className="fas fa-moon"></i>
                          <i className="fas fa-sun"></i>
                          <div className="ball"></div>
                        </label>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link primary-btn"
                          onClick={this.openModal} >
                          My Wallet
                        </button>
                      </li>
                    </ul>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Header end --> */}
        
        {/* My Wallet Start */}
          <Modal 
          size="lg"
          show={this.state.isOpen} onHide={this.closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="my-account"
          >
            <Modal.Body>
            <div className="modal-title">
              <h4 className="mb-3">My Account</h4>
            </div>
            <div className="stats balance">
              <div className="single-stats corps harvest">
                <div className="logo-wrap">
                  <div className="icon-wrap">
                    <img src={require("../assets/img/yfeth-logo.svg")} alt="" />
                  </div>
                  <h4>0.000</h4>
                  <p>YFETH Balance</p>
                </div>
                
                <div className="text-center buttons-block">
                  <a href="/" className="bordered-btn transparent-btn shadow">View on Etherscan</a>
                  <a href="/" className="bordered-btn transparent-btn shadow">Sign out</a>
                  <Button onClick={this.closeModal} className="bordered-btn mt-4">Cancel</Button>
                </div>
              </div> 
            </div>
            </Modal.Body>
          </Modal>
        {/* My Wallet End */}
      </div>
    )
  }
}
