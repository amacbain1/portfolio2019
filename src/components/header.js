import React from 'react';
import './Header.scss';
import Scrollspy from 'react-scrollspy';

const Header = () => {

  return (
    <section id='header' className='sticky-top'>
      <div className='nav-bg'>

        <div className='top-stripe'>
          <span className='span'>aiyemacbain@gmail.com | exploresocalifornia@gmail.com</span>
        </div>

        <div className='container'>

          <nav className='navbar navbar-expand-sm nav-bg'>

            <div className='container'>
              <a href='/' className='logo'>Portfolio</a>
            </div>

            <div className='collapse navbar-collapse '>
              <Scrollspy items={['home', 'projects', 'contact']} currentClassName='is-current' className='navbar-nav'>
                <li className='nav-item color-change'>
                  <a href='#home' className='nav-link nav-color'>Home</a>
                </li>
                <li className='nav-item color-change'>
                  <a href='#projects' className='nav-link nav-color'>Projects</a>
                </li>
                <li className='nav-item'>
                  <button className='btn-nav'>
                    <a href='#contact' className='nav-link nav-color'>Contact</a>
                  </button>
                </li>
              </Scrollspy>
            </div>

          </nav>

        </div>

      </div>
    </section>
  )
}



export default Header;
