import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class Farming extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Farming</title>
          <link rel="canonical" href="http://mysite.com/example" />
          {/* For SEO */}
        </Helmet>
        {/* <!-- Farming start --> */}
        <section className="hero-section section-block" id="top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <div className="farming-title">
                    <div className="logo">
                      <img src={require("../assets/img/farming-icon.png")} alt=""/>
                    </div>
                    <h1>Farming Is Ready</h1>
                    <p>Stake Uniswap LP tokens to claim your very own yummy YFBTC!</p>
                  </div>
                  <div className="stats">
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="single-stats p-0">
                          <div className="contents">
                            <div className="logo">
                              <img src={require("../assets/img/yfeth-logo.svg")} alt="" />
                              <div className="text">
                                <h4>Your YFETH Balance</h4>
                                <h2>LOCKED</h2>
                              </div>
                            </div>
                            <div className="bottom">
                              <div className="row">
                                <div className="col-7">
                                  <p>Pending Harvest</p>
                                </div>
                                <div className="col-5 text-right">
                                  <p>0.000 YFETH</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-stats p-0">
                          <div className="contents">
                            <div className="logo no-logo">
                              <div className="text">
                                <h4>Total YFETH Supply</h4>
                                <h2>LOCKED</h2>
                              </div>
                            </div>
                            <div className="bottom">
                              <div className="row">
                                <div className="col-7">
                                  <p>New rewards per block</p>
                                </div>
                                <div className="col-5 text-right">
                                  <p>100 YFETH</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-12 text-center mt-3">
                        <p> <span role="img" aria-label="">🏆</span> Pro Tip: BITTO-ETH SLP token pool yields 2.5x more token rewards per block.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-stats">
                          <div className="tag">
                            <div className="tag-wrap">
                              <h4><span>2.5x</span></h4>
                            </div>
                          </div>
                          <div className="content">
                            <div className="title bitto">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                              <h3>BITTO/ETH Stats</h3>
                            </div>
                            <div className="desc">
                              <p>========== <span>PRICES</span> ==========</p>
                              <p>1 YFETH = 5.00 $</p>
                              <p>1 BITTO = 0.70 $</p>
                              <br/>
                              <p>======== <span>YFETH REWARDS</span> ========</p>
                              <p>Hourly ROI: 0.26%</p>
                              <p>Daily ROI: 6.26%</p>
                              <p>Weekly ROI: 43.83%</p>
                              <p>APY: 2103.64%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-stats">
                          <div className="tag">
                            <div className="tag-wrap">
                              <h4><span>2.0x</span></h4>
                            </div>
                          </div>
                          <div className="content">
                            <div className="title">
                              <img src={require("../assets/img/yfeth-logo.svg")} alt="" />
                              <h3>YFETH/ETH Stats</h3>
                            </div>
                            <div className="desc">
                              <p>========== <span>PRICES</span> ==========</p>
                              <p>1 YFETH = 5.00 $</p>
                              <p>1 ETH = 350.00 $</p>
                              <br/>
                              <p>======== <span>YFETH REWARDS</span> ========</p>
                              <p> Hourly ROI: 0.21%</p>
                              <p>Daily ROI: 5.01%</p>
                              <p>Weekly ROI: 35.06%</p>
                              <p>APY: 1682.92%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-stats">
                          <div className="content">
                            <div className="title yfi">
                              <img src={require("../assets/img/yfi-stats.svg")} alt="" />
                              <h3>YFI/ETH Stats</h3>
                            </div>
                            <div className="desc">
                              <p>========== <span>PRICES</span> ==========</p>
                              <p>1 YFI = 20,000.00 $</p>
                              <p>1 ETH = 350.00 $</p>
                              <br/>
                              <p> ======== <span>YFETH REWARDS</span> ========</p>
                              <p>Hourly ROI: 0.1%</p>
                              <p>Daily ROI: 2.5%</p>
                              <p>Weekly ROI: 17.53%</p>
                              <p>APY: 841.46%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="/" className="bordered-btn"
                    ><img src={require("../assets/img/shovel.svg")} alt="" /> Choose Your Farm</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Farming end --> */}

      </div>
    )
  }
}
