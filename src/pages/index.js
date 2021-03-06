import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/layout-temp'

// Logos
import logo from '../images/logo.png'
import bniLogo from '../images/bni-logo.jpeg'
import kjri from '../images/kjri.png'
import bkpm from '../images/bkpm.png'
import bi from '../images/bi.jpg'
import bri from '../images/bri.jpg'
import mandiri from '../images/mandiri.png'

import speakers from '../data/speakers'

export default class IndexPage extends React.Component {
  state = {
    showModal: false,
    speaker: {},
  }

  handleSpeakerClick = (speaker) => {
    this.setState({
      showModal: true,
      speaker,
    })
  }

  render() {
    const { showModal, speaker } = this.state;

    return (
      <Layout>
        <section id="hero" className="hero-section bg1 bg-cover window-height light-text">
          <div className="heading-block centered-block align-center">
              <div className="container">
                  <h1 className="extra-heading">BUSINESS FORUM ON</h1>
                  <h1 className="extra-heading yellow">TRADE, TOURISM & INVESTMENT</h1>
                  <h1 className="extra-heading">IN INDONESIA</h1>
                  <h4>Monday, 18 November 2019</h4>
                  <h4>Intercontinental Hotel Times Square</h4>
                  <h4>300 W 44th St, New York, NY, 10036</h4>
                  <h1>COMING SOON</h1>
                  <h6><Link to="/2018/">Check out our past event</Link></h6>
                      { /*<div className="btns-container">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.com/e/business-forum-on-trade-tourism-and-investment-in-indonesia-registration-50909800584" className="btn btn-md">REGISTER</a>
                  </div> */ }
              </div>
          </div>
        </section>
      </Layout>
    )
  }
}
