import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class YfethHarvestParty extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>YFETH Harvest Pary | YFswap.finance</title>
          <meta name="description" content="The First DeFi Version of Legacy Coins Such As BTC &amp; ETH. Introducing Dex, Yield farming, Decentralised Project" />
          <meta property="og:title" content="YFswap.finance"/>
          <meta property="og:description" content="The First DeFi Version of Legacy Coins Such As BTC &amp; ETH. Introducing Dex, Yield farming, Decentralised Project" />
          <meta property="og:url" content="https://www.yfswap.finance/"/>
          <meta property="og:site" content="yfswap.finance" />
          <meta property="og:image" content="https://i.imgur.com/QJdltz2.png" />
        </Helmet>
        {/* <!-- Harvest start --> */}
        <section className="hero-section section-block" id="top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="hero-content text-center">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <div className="farming-title">
                        <div className="logo mb-3">
                          <img src={require("../assets/img/yfeth-logo.svg")} alt="" />
                        </div>
                        <h1>Harvest Party!</h1>
                        <p>Deposit SUSHI-ETH SLP Tokens and earn SUSHI
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="stats">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps harvest">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/yfeth-logo.svg")} alt="" />
                            </div>
                            <h4>0.000</h4>
                            <p>YFETH Earned</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue opacity">Harvest</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps harvest">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/farming-icon.png")} alt="" />
                            </div>
                            <h4>0.000</h4>
                            <p>YFETH-ETH SLP Tokens Staked
                            </p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Approve YFETH-ETH SLP</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <p className="primary"><span role="img" aria-label="">⭐️</span> Every time you stake and unstake LP tokens, the contract will automagically harvest SUSHI rewards for you!
                </p>
                <a href="/" className="bordered-btn transparent-btn">YFETH-ETH SLP Info</a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Harvest end --> */}
      </div>
    )
  }
}

    
