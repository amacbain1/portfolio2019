import React, { Component } from 'react';
import './home.scss';

class Home extends Component {

  render(){

    return (
      <div id='home' className='container'>

        <div className='row'>

          <div className='col-4 card mx-2 my-5 card-name'>
            <h1 className='px-1 py-3 name'>
              <span className='first'>Amber</span><br />
              <span className='middle'>Macbain</span><br />
              <span className='last'>Stumpf</span>
            </h1>
          </div>

          <div className='col-4 card mx-2 my-5 card-img'>
            <img />
          </div>

          <div className='col-4 card mx-2 my-5 card-skills'>
          </div>

        </div>

      </div>


    )
  }

}

export default Home;
