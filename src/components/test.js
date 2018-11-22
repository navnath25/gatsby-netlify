import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
export default ({  }) => (

 <div>
 <Helmet
     links ={
          [
             {
        rel: "stylesheet",
        href: "https://s3-ap-southeast-2.amazonaws.com/beta1besuper/assets/css/page.min.css"
    },
    {
        rel: "stylesheet",
        href: "https://s3-ap-southeast-2.amazonaws.com/beta1besuper/assets/css/style.css"
    }
          ]
        }
        />
    <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
      <div className="container">
        <div className="navbar-left">
          <button className="navbar-toggler" type="button">&#9776;</button>
          <a className="navbar-brand" href="index.html">
             </a>
        </div>
        <section className="navbar-mobile">
          <span className="navbar-divider d-mobile-none"></span>
          <ul className="nav nav-navbar">
            <li className="nav-item">
              <a className="nav-link" href="Magazine.html">Magazine</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./faq.html">How it works</a>
            </li>
          </ul>
        </section>
        <a className="btn  btn-red btn-round btn-success" href="#">Join Now</a>
      </div>
    </nav> 
    <header className="header text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1>Magazine</h1>
                    <small>WELLBEING  |  TRAVEL  |  MONEY</small>
          </div>
        </div>
      </div>
    </header> 
    





      <footer className="footer text-white bg-img"   data-overlay="8">
        <div className="container py-7">
          <div className="row gap-y">

            <div className="col-6 col-md-4 col-xl-2">
              <h6 className="mb-4"><strong>Company</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">About us</a>
                <a className="nav-link" href="#">Careers</a>
                <a className="nav-link" href="#">Press</a>
                <a className="nav-link" href="#">Brand Guidelines</a>
              </div>
            </div>

            <div className="col-6 col-md-4 col-xl-2">
              <h6 className="mb-4"><strong>Product</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">Why TheThemeio?</a>
                <a className="nav-link" href="#">Success Stories</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link" href="#">Security</a>
              </div>
            </div>

            <div className="col-6 col-md-4 col-xl-2">
              <h6 className="mb-4"><strong>Resources</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">Freebies</a>
                <a className="nav-link" href="#">Partners</a>
                <a className="nav-link" href="#">Events</a>
                <a className="nav-link" href="#">Assets</a>
              </div>
            </div>

            <div className="col-6 col-md-4 col-xl-2">
              <h6 className="mb-4"><strong>Community</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">Blog</a>
                <a className="nav-link" href="#">Forums</a>
                <a className="nav-link" href="#">Meetups</a>
                <a className="nav-link" href="#">For Investors</a>
              </div>
            </div>

            <div className="col-6 col-md-4 col-xl-2">
              <h6 className="mb-4"><strong>Support</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">Help Center</a>
                <a className="nav-link" href="#">Guides</a>
                <a className="nav-link" href="#">API</a>
                <a className="nav-link" href="#">FAQ</a>
              </div>
            </div>

            <div className="col-6 col-md-4 col-xl-2">
              <h6 className="mb-4"><strong>Extras</strong></h6>
              <div className="nav flex-column">
                <a className="nav-link" href="#">Podcast</a>
                <a className="nav-link" href="#">Shop</a>
                <a className="nav-link" href="#">Licenses</a>
                <a className="nav-link" href="#">Become Affiliate</a>
              </div>
            </div>

          </div>
        </div>


        <div className="container">
          <div className="row gap-y">

            <div className="col-md-6 text-center text-md-left">
              <small className="opacity-70">© 2018 BeSuper. All rights reserved.</small>
            </div>

            <div className="col-md-6 text-center text-md-right">
              <div className="social">
                <a className="social-facebook" href="#"><i className="fa fa-facebook"></i></a>
                <a className="social-twitter" href="#"><i className="fa fa-twitter"></i></a>
                <a className="social-youtube" href="#"><i className="fa fa-youtube"></i></a>
                <a className="social-instagram" href="#"><i className="fa fa-instagram"></i></a>
              </div>
            </div>

          </div>
        </div>
      </footer>

       <Helmet
        script={[
        	{"src":"https://code.jquery.com/jquery-3.3.1.js", "type": "text/javascript"},
           {"src": "https://s3-ap-southeast-2.amazonaws.com/beta1besuper/assets/js/page.min.js", "type": "text/javascript"},
          {"src": "https://s3-ap-southeast-2.amazonaws.com/beta1besuper/assets/js/script.js", "type": "text/javascript"}
        ]}
        />
        </div>
)