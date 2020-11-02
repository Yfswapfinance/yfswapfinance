import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class Staking extends Component {
  render() {
    return (
      <div>
        
        <Helmet>
          <meta charSet="utf-8" />
          <title>Staking | YFswap.finance</title>
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
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <div className="row justify-content-center">
                      <div className="col-lg-7">
                        <div className="farming-title">
                          <div className="logo">
                            <img src={require("../assets/img/farming-icon.png")} alt="" />
                          </div>
                          <h1>Stake YFETH, get YFETH.</h1>
                          <p>Welcome to the Sushi Bar, stake YFETH to earn YFETH.</p>
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
                              <p>xYFETH (mining)</p>
                            </div>
                            
                            <div className="text-center">
                              <a href="/" className="bordered-btn blue opacity">Convert YFETH</a>
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
                              <p>YFETH Tokens Available</p>
                            </div>
                            
                            <div className="text-center">
                              <a href="/" className="bordered-btn blue">Approve YFETH</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-5 pt-3">
                <div className="col-lg-8 text-center">
                  <p className="primary"><span role="img" aria-label="">⭐️</span> YFSWAP will integrate yield farming, staking, and DEX exchange. The fees (0.3%) are distributed partly(0.05%) for users staking rewards. YFSwap will take 0.045% for BUY BACK YFETH, causing a positive price growth, whereas the rest of the 0.3% (0.205%) is shared with the LP provider.</p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Hero end --> */}
      </div>
    )
  }
}

   

