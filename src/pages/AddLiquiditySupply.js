import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Tabs, Tab, Modal, Navbar} from 'react-bootstrap'

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class AddLiquiditySupply extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <div>
        
        <Helmet>
          <meta charSet="utf-8" />
          <title>Exchange | YFswap.finance</title>
          <meta name="description" content="The First DeFi Version of Legacy Coins Such As BTC &amp; ETH. Introducing Dex, Yield farming, Decentralised Project" />
          <meta property="og:title" content="YFswap.finance"/>
          <meta property="og:description" content="The First DeFi Version of Legacy Coins Such As BTC &amp; ETH. Introducing Dex, Yield farming, Decentralised Project" />
          <meta property="og:url" content="https://www.yfswap.finance/"/>
          <meta property="og:site" content="yfswap.finance" />
          <meta property="og:image" content="https://i.imgur.com/QJdltz2.png" />
        </Helmet>
         {/* <!-- Hero start --> */}
          <section className="hero-section section-block" id="top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="hero-content text-center">
                    <div className="stats">
                      <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6">
                          <div className="single-card exchange-card">
                            <div className="title-box">
                              <button className="transparent-btn back">
                                <span><img src={require("../assets/img/back.svg")} alt="Back" /></span> 
                              </button>
                              <h4>Add Liquidity</h4>
                              <button className="transparent-btn what">
                                <span><img src={require("../assets/img/what-sign.svg")} alt="What" /></span> 
                              </button>
                            </div>
                            <div className="inner-box mb-0">
                              <div className="single-box">
                                <div className="row align-items-end">
                                  <div className="col-6 text-left">
                                    <h4>Input</h4>
                                    <input type="number" step="0.0000000000000000001" min="0" autoComplete="off" value="0.5" />
                                  </div>
                                  <div className="col-6 text-right">
                                    <p className="balance">Balance: <span id="ethBalance">0.00</span></p>
                                    <div className="icons">
                                      <button className="transparent-btn">
                                        <span><img src={require("../assets/img/max.svg")} alt="Yfteh" /></span> 
                                      </button>
                                      <button className="transparent-btn"  onClick={this.openModal}>
                                        <span><img src={require("../assets/img/etherum.svg")} alt="Yfteh" /></span> 
                                        <span className="coin-name">ETH</span>
                                        <span><img src={require("../assets/img/angle-down-sm.svg")} alt="Angle Down" /></span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center my-2">
                                <img src={require("../assets/img/plus.svg")} alt=""/>
                              </div>
                              <div className="single-box">
                                <div className="row align-items-end">
                                  <div className="col-6 text-left">
                                    <h4>Input</h4>
                                    <input type="number" step="0.0000000000000000001" min="0" autoComplete="off" value="0.569844" />
                                  </div>
                                  <div className="col-6 text-right">
                                    <p className="balance">Balance:</p>
                                    <div className="icons">
                                      <button className="transparent-btn">
                                        <span><img src={require("../assets/img/max.svg")} alt="Yfteh" /></span> 
                                      </button>
                                      <button className="transparent-btn"  onClick={this.openModal}>
                                        <span><img src={require("../assets/img/yfbtc.svg")} alt="YFBTC" /></span> 
                                        <span className="coin-name">YFBTC</span>
                                        <span><img src={require("../assets/img/angle-down-sm.svg")} alt="Angle Down" /></span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="single-box no-bd">
                                <div className="row align-items-end">
                                  <div className="col-12 text-left mb-2">
                                    <h4>Prices and pool share</h4>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-md-4 text-center">
                                    <h4 className="blue-title">1.13969</h4>
                                    <h4>YFBTC per ETH</h4>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <h4 className="blue-title">0.877433</h4>
                                    <h4>ETH per YFBTC</h4>
                                  </div>
                                  <div className="col-md-4 text-center">
                                    <h4 className="blue-title">0.52%</h4>
                                    <h4>Share of Pool</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center footer-btns">
                              <button className="bordered-btn gray red-btn full-width">Supply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Hero end --> */}

          {/* Select Token Start */}
          <Modal 
          size="lg"
          show={this.state.isOpen} onHide={this.closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="walletaccount selectcoin"
          >
            <Modal.Body>
              <div className="wallet-body">
                <div className="wallet-top">
                  <h4 className="mb-3">Select a token<button className="tp-btn" onClick={this.closeModal} > <img src={require("../assets/img/what-sign.svg")} alt="" /></button></h4>
                  <button className="transparent-btn"
                    onClick={this.closeModal} >
                    <img src={require("../assets/img/close.svg")} alt="" />
                  </button>
                </div>
                <div className="form-search">
                  <img src={require("../assets/img/search.svg")} alt="" />
                  <input type="search" placeholder="Search name or paste address" /> 
                </div>
                <div className="wallet-top">
                  <h4 className="mb-3">Token name</h4>
                  <button className="transparent-btn pr-0">
                    <img src={require("../assets/img/arrow-down-square.svg")} alt="" />
                  </button>
                </div>
                <div className="modal-items">
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/etherum.svg")} alt="Yfteh"/>ETH
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/wbtc.svg")} alt="WBTC"/>WBTC
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/etherum.svg")} alt="Yfteh"/>ETH
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/wbtc.svg")} alt="WBTC"/>WBTC
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/etherum.svg")} alt="Yfteh"/>ETH
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/wbtc.svg")} alt="WBTC"/>WBTC
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/etherum.svg")} alt="Yfteh"/>ETH
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/wbtc.svg")} alt="WBTC"/>WBTC
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/etherum.svg")} alt="Yfteh"/>ETH
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-6 text-left">
                      <p className="balance">
                        <img src={require("../assets/img/wbtc.svg")} alt="WBTC"/>WBTC
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="balance">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        {/* Select Token end */}
      </div>
    )
  }
}

   

