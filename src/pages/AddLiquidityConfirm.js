import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Tabs, Tab, Modal, Navbar} from 'react-bootstrap'

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class AddLiquidityConfirm extends Component {
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
                            <div className="inner-box mb-0">
                              <div className="wallet-top text-left inner-box m-0 pt-0 pb-0">
                                <h4 className="mb-3">You will receive</h4>
                                <button className="transparent-btn" >
                                  <img src={require("../assets/img/close.svg")} alt="" />
                                </button>
                              </div>
                              <div className="wallet-top text-left inner-box m-0 pb-0 mb-0">
                                <div className="amount">0.569844 <img src={require("../assets/img/etherum.svg")} alt="" /> <img src={require("../assets/img/yfbtc.svg")} alt="" /></div>
                                <h4 className="mb-3">ETH/YFBTC Pool Tokens</h4>
                                <div className="row align-items-center">
                                  <div className="col-12 text-left">
                                    <p className="balance small"><i>Output is estimated. If the price changes by more than 0.5% your transaction will revert.</i></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg inner-box pt-0">
                              <div className="single-box no-bd">
                                <div className="row align-items-end">
                                  <div className="col-6 text-left">
                                    <h4>ETH Deposited</h4>
                                  </div>
                                  <div className="col-6 text-right">
                                    <p className="balance"><img src={require("../assets/img/etherum.svg")} alt="yfeth" />0.5</p>
                                  </div>
                                </div>
                                <div className="row align-items-end">
                                  <div className="col-6 text-left">
                                    <h4>YFBTC Deposited</h4>
                                  </div>
                                  <div className="col-6 text-right">
                                    <p className="balance"><img src={require("../assets/img/yfbtc.svg")} alt="yfbtc" />0.569844</p>
                                  </div>
                                </div>
                                <div className="row align-items-end">
                                  <div className="col-6 text-left">
                                    <h4>Rates</h4>
                                  </div>
                                  <div className="col-6 text-right">
                                    <p className="balance">1 ETH = 1.14 YFBTC</p>
                                    <p className="balance">1 YFBTC = 0.8774 ETH</p>
                                  </div>
                                </div>
                                <div className="row align-items-end">
                                  <div className="col-6 text-left">
                                    <h4>Share of Pool :</h4>
                                  </div>
                                  <div className="col-6 text-right">
                                    <p className="balance">0.5193%</p>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center footer-btns mt-4">
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

   

