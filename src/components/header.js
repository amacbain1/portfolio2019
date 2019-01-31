import React, { Component } from 'react';
import './header.scss';


class Header extends Component {

  render(){

    return (
      <div id='header'>
        <div className='top-stripe'>
          <span className='span'>aiyemacbain@gmail.com | exploresocalifornia.com</span>
        </div>
        <nav className='navbar navbar-expand-sm nav-bg'>

          <div className='container'>
            <a href='/' className='logo'>Portfolio</a>
          </div>
          <div className=''>
            <ul className='navbar-nav mr-auto'>
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

        </nav>
      </div>
    )
  }

}

export default Header;
