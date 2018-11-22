import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({  }) => (
     <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
      <div className="container">
        <div className="navbar-left"> 
        </div>
        <section className="navbar-mobile">
          <span className="navbar-divider d-mobile-none"></span>
          <ul className="nav nav-navbar">
              <a className="nav-link" href="">Magazine</a>           
              <a className="nav-link" href="">How it works</a>
          </ul>
        </section>
        <a className="btn  btn-red btn-round btn-success" href="">Join Now</a>
      </div>
    </nav>
)
