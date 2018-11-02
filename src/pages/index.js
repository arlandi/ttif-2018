import React from 'react'

import Layout from '../components/layout'

// Logos
import logo from '../images/logo.png'
import bniLogo from '../images/bni-logo.jpeg'
import kjri from '../images/kjri.png'
import bkpm from '../images/bkpm.png'
import bi from '../images/bi.jpg'
import bri from '../images/bri.jpg'
import mandiri from '../images/mandiri.png'

// Speakers
import joseph from '../images/joseph.jpg'
import thomas from '../images/thomas.jpg'
import william from '../images/william.jpg'
// import shinto from '../images/shinto.jpg'
import fajrin from '../images/fajrin.jpg'
// import del from '../images/del.jpg'
import anne from '../images/anne.jpg'
// import mari from '../images/mari.jpg'

const IndexPage = () => (
  <Layout>
    <section id="hero" className="hero-section bg1 bg-cover window-height light-text">
      <div className="heading-block centered-block align-center">
          <div className="container">
              <h5 className="heading-alt"><span className="fas fa-calendar-alt base-clr-txt"></span>nov 8 <span className="fas fa-map-marker-alt base-clr-txt"></span>New York, NY</h5>
              <h1 className="extra-heading">Business Forum on Trade, Tourism & Investment in Indonesia</h1>
              <div className="btns-container">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.com/e/business-forum-on-trade-tourism-and-investment-in-indonesia-registration-50909800584" className="btn btn-md">REGISTER</a>
              </div>
          </div>
      </div>
    </section>

    <header className="header">
      <div className="header-wrapper">
        <div className="container">
          <div className="col-sm-3 col-xs-12 navigation-header">
            <a href="/" className="logo">
              <img src={logo} alt="VentCamp" />
            </a>
            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-controls="navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>
          <div className="col-sm-9 col-xs-12 navigation-container">
              <div id="navigation" className="navbar-collapse collapse">
                  <ul className="navigation-list pull-left light-text">
                      <li className="navigation-item"><a href="#about" className="navigation-link">About</a></li>
                      <li className="navigation-item"><a href="#speakers" className="navigation-link">Speakers</a></li>
                      <li className="navigation-item"><a href="#organizers" className="navigation-link">Organizers</a></li>
                      <li className="navigation-item"><a href="#agenda" className="navigation-link">Agenda</a></li>
                      <li className="navigation-item"><a href="#map" className="navigation-link">Location</a></li>
                  </ul>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.com/e/business-forum-on-trade-tourism-and-investment-in-indonesia-registration-50909800584" className="pull-right buy-btn">Register</a>
              </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" className="section pt-28">
      <div className="container">
        <div className="row align-center">
          <h3 className="main-headline mb-30">About</h3>
        </div>
        <p>The Business Forum on Trade, Tourism & Investment in Indonesia (BFTTII) is a high profile event dedicated to strengthen United States (US) and Indonesian economic ties by promoting trade, tourism and investment activities in Indonesia to US business communities. BFTTII provides vast opportunities for participants to gain valuable, first-hand insights on business and economic environments in Indonesia through its thematic sessions, which features high-ranking government officials and senior business executives. Participants also have the chance to schedule one-on-one meetings with US and Indonesian companies and government agencies to further discuss business opportunities in Indonesia.</p>
        <h4>About Indonesia:</h4>
        <p>Indonesia is the largest economy in Southeast Asia with over one-trillion dollars in gross domestic product (GDP). The country has been experiencing rapid economic growth over the past decade, primarily driven by its 260 million strong population base (4th in the world), robust domestic consumption, and increased productivity. Indonesia is a member of G20</p>
      </div>
    </section>

    <section className="bg-primary">
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="media">
                <div className="fas fa-map-marked-alt"></div>
                <div className="media-body">
                  <div className="heading-font">Intercontinental Hotel Times Square</div>
                  <div>300 West 44th Street, 10036, New York, NY</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <div className="fas fa-clock"></div>
                <div className="media-body">
                  <div className="heading-font">Thursday, November 8, 2018</div>
                  <div>9:00 AM to 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section id="speakers" className="section align-center">
      <div className="container">
        <h3 className="mb-60 main-headline">Speakers</h3>

        <div className="row">
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src={thomas} className="img-responsive" /></div>
              <h3 className="name">Thomas Trikasih Lembong</h3>
              <p className="text-alt"><small>Chairman<br/><br/>Indonesia Investment Coordinating Board</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Budi Bowoleksono</h3>
              <p className="text-alt"><small>Ambassador of the Republic of Indonesia to the United States of America</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Sri Sultan Hamengkubuwono X</h3>
              <p className="text-alt"><small>Governor<br/><br/>Special Region of Yogyakarta (DIY)</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">M. Noor Nugroho</h3>
              <p className="text-alt"><small>Deputy Director<br/><br/>Bank Indonesia</small></p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src={fajrin} className="img-responsive" /></div>
              <h3 className="name">Fajrin Rasyid</h3>
              <p className="text-alt"><small>Co-Founder<br/><br/>Bukalapak</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Arief Hidayat</h3>
              <p className="text-alt"><small>Head of Regional Government of the Special Region of Yogyakarta</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Eri Wibowo</h3>
              <p className="text-alt"><small>Head Division, Financing & Investment<br/><br/>PT Sarana Multi Infrastruktur</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Del Renigar</h3>
              <p className="text-alt"><small>Executive Director, Global Government Affairs & Policy<br/><br/>General Electric</small></p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src={anne} className="img-responsive" /></div>
              <h3 className="name">Anne Patricia Sutanto</h3>
              <p className="text-alt"><small>CEO<br/><br/>PT Pan Brothers Tbk</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Dr. Cris Kuntadi</h3>
              <p className="text-alt"><small>Commissioner<br/><br/>The Indonesian Railways Company</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src={joseph} className="img-responsive" /></div>
              <h3 className="name">Joseph Sahat Raja</h3>
              <p className="text-alt"><small>CEO<br/><br/>Telin</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src={william} className="img-responsive" /></div>
              <h3 className="name">William Pegues</h3>
              <p className="text-alt"><small>Director<br/><br/>Structured Finance & Insurance Overseas Private Investment Corporation</small></p>
            </div>
          </div>
          { /* <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src={mari} className="img-responsive" /></div>
              <h3 className="name">Mari Elka Pangestu</h3>
              <p className="text-alt"><small>Former Trade Minister of Republic of Indonesia</small></p>
            </div>
          </div>  */}
        </div>

        <div className="row">
          <div className="col-sm-3 col-sm-offset-15">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Shinto Nugroho</h3>
              <p className="text-alt"><small>Chief Policy and Government Relations<br/><br/>GO-JEK</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Cameron Hume</h3>
              <p className="text-alt"><small>Former United States Ambassador to Indonesia</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Wayne Forrest</h3>
              <p className="text-alt"><small>President<br/><br/>American Indonesian Chamber of Commerce</small></p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="organizers" className="section align-center">
      <div className="container">
        <h3 className="mb-60 main-headline">Organizers</h3>
      </div>
      <div className="sponsors">
        <div className="sponsor inline"><a href="https://www.kemlu.go.id/newyork/en/default.aspx"><img src={kjri} alt="" /></a></div>
      </div>
      <div className="sponsors">
        <div className="sponsor inline"><a href="https://www2.bkpm.go.id/"><img src={bkpm} alt="" /></a></div>
        <div className="sponsor inline"><a href="https://www.bi.go.id/id/Default.aspx"><img src={bi} alt="" /></a></div>
        <div className="sponsor inline"><a href="https://bri.co.id/"><img src={bri} alt="" /></a></div>
      </div>
      <div className="sponsors">
        <div className="sponsor inline"><a href="http://www.bni.co.id/id-id/"><img src={bniLogo} alt="" /></a></div>
        <div className="sponsor inline"><a href="https://www.bankmandiri.co.id/"><img src={mandiri} alt="" /></a></div>
      </div>
    </section>

    <section id="agenda" className="section mt-20">
      <div className="container">
        <div className="row align-center">
          <h3 className="mb-30 main-headline">Agenda</h3>
        </div>

        <div className="col-sm-10 col-sm-offset-1">
          <table className="table">
            <thead>
              <tr>
                <th width="150">Time</th>
                <th>Agenda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bb">8:30 - 9:00</td>
                <td className="bb">Registration</td>
              </tr>
              <tr>
                <td>9:00 - 12:00</td>
                <td className="bb">Opening Remarks by the Ambassador of the Republic of Indonesia to the United States<br/>Remarks by the Chairman of Indonesia Investment Coordinating Board</td>
              </tr>
              <tr>
                <td></td>
                <td className="bb">Coffee Break</td>
              </tr>
              <tr>
                <td className="bb"></td>
                <td className="bb">Session I <br/>Panel Discussion: “Enhancing Indonesian tourism and creative economy”</td>
              </tr>
              <tr>
                <td className="bb">12:00 - 12:45</td>
                <td className="bb">Networking Lunch</td>
              </tr>
              <tr>
                <td>12:45 - 16:00</td>
                <td className="bb">Session II
                    <br/>Panel Discussion: “Exploring infrastructure and tourism investment opportunities in Indonesia”
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="bb">Coffee Break</td>
              </tr>
              <tr>
                <td></td>
                <td className="bb">Session III
                    <br/>Panel discussion: “Investment on infrastructure & manufacturing industries in Indonesia
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="bb">Closing remarks by the Consulate General of the Republic of Indonesia in New York</td>
              </tr>
              <tr>
                <td></td>
                <td>Breakout Session</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

    <section id="sessions" className="section">
      <div className="container">
        <div className="row align-center">
          <h3 className="mb-60 main-headline">One-on-One Meetings</h3>
        </div>
        <p>BFTTI offers participants the chance to have one-on-one meetings with Indonesian companies and government agencies further discuss investment opportunities in Indonesia. Through these meetings, participants can have unparalleled insights to get specific answers pertaining to their business and investments which may include the but not limited to:</p>
        <ul>
          <li>Learning about business opportunities in Indonesia</li>
          <li>Assessing challenges in the market and business environment</li>
          <li>Understanding local regulations</li>
          <li>Finding out how we can help you to identify new business partners</li>
        </ul>
        <h5>Companies and Government Agencies:</h5>
        <ul>
          <li>General Electric</li>
          <li>Overseas Private Investment Corporation</li>
          <li>Telin (Telkom Indonesia) USA</li>
          <li>Special Region of Yogyakarta (DIY)</li>
          <li>PT Pan Brothers TbK</li>
          <li>PT Sarana Multi Infrastruktur</li>
          <li>Bukalapak</li>
          <li>Indonesia Investment Coordinating Board</li>
        </ul>
        <p>To schedule a one-on-one session, please send an email to <a href="mailto:economicny@gmail.com">economicny@gmail.com</a> and <a href="mailto:TTINewYork@gmail.com">TTINewYork@gmail.com</a></p>
      </div>
    </section>

    <section id="map" className="mt-60">
      <div className="contacts-wrapper">
        <iframe title="google-maps" className="map-frame" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=intercontinental%20hotel%20times%20square&key=AIzaSyCljp_s1lir-HRjlqpj4IdwCULGFtKnBBY" allowFullScreen></iframe>
        <div className="container contacts-on-map-container">
          <div className="contacts-on-map">
            <h3 className="main-headline mt-0">Location</h3>
            <div><i className="fas fa-map-marked-alt"></i>300 W 44th St, New York, NY 10036</div>
            <div><i className="fas fa-clock"></i>9:00 AM - 4:00 PM</div>
            <div><i className="fas fa-envelope"></i><a href="mailto:economicny@gmail.com">economicny@gmail.com</a></div>
            <div><i className="fas fa-envelope"></i><a href="mailto:TTINewYork@gmail.com">TTINewYork@gmail.com</a></div>
          </div>
        </div>
      </div>
    </section>

    <section className="footer">
      <div className="footer-base">
        <div className="container">
          <div className="col-md-6">
            <p className="text-alt"><small>All&nbsp;Rights Reserved ©&nbsp;2018</small></p>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
