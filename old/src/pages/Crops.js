import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

export default class Crops extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Crops</title>
          <link rel="canonical" href="http://mysite.com/example" />
          {/* For SEO */}
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
                        <h1>Select Your Favourite Crops</h1>
                        <p>Earn YFETH tokens by staking YFETH/ETH V2 ELP Tokens. Note: Current APY will constantly change according to market supply & demand.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="stats">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps">
                          <div className="tag">
                            <div className="tag-wrap">
                              <h4><span>2.0x</span></h4>
                            </div>
                          </div>
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/yfeth-logo.svg")} alt="" />
                            </div>
                            <h4>YFETH Party!</h4>
                            <p>Deposit YFETH-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="tag">
                            <div className="tag-wrap">
                              <h4><span>2.5x</span></h4>
                            </div>
                          </div>
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-stats corps shadow-black">
                          <div className="logo-wrap">
                            <div className="icon-wrap">
                              <img src={require("../assets/img/bitto-stats.svg")} alt="" />
                            </div>
                            <h4>BITTO 2 da moon</h4>
                            <p>Deposit BITTO-ETH ELP
                              Earn YFETH</p>
                          </div>
                          
                          <div className="text-center">
                            <a href="/" className="bordered-btn blue">Select</a>
                          </div>
                          <div className="inner-box">
                            <div className="single-box">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <p>APY</p>
                                </div>
                                <div className="col-6 text-right">
                                  <p>97.20%</p>
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
            </div>
          </div>
        </section>
        {/* <!-- Crops end --> */}
      </div>
    )
  }
}