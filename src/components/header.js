import React, { Component } from 'react';
import './header.scss';


class Header extends Component {

  render() {

    return (
      <section id='header' className='sticky-top'>
        <div className="nav-bg">
          <div className='top-stripe'>
            <span className='span'>aiyemacbain@gmail.com | exploresocalifornia.com</span>
          </div>
          <div className='container'>
            <nav className='navbar navbar-expand-sm nav-bg navbar-inverse'>
              <div className=''>
                <a href='/' className='logo'>Portfolio</a>
              </div>
              <div className='float-sm-right'>
                <button
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target=".navbar-collapse">

                  <span class="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse'>
                  <ul className='navbar-nav'>
                    <li className='nav-item '>
                      <a href='/' className='nav-link nav-color'>Home</a>
                    </li>
                    <li className='nav-item'>
                      <a href='/' className='nav-link nav-color'>Projects</a>
                    </li>
                    <li className='nav-item'>
                      <button className='btn-nav'>
                        <a href='/' className='nav-link nav-color'>Contact</a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    )
  }

}

export default Header;
