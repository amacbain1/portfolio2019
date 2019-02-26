import React, { Component } from 'react';
import './home.scss';


class Home extends Component {

  render(){

    return (
      <section id='home'>
      <div className='container'>
        <div className='card-columns mx-auto'>


          <div className='card mx-2 card-img card-main'>

          </div>

          <div className='card mx-2 card-skills card-main'>
          </div>

          <div className='card mx-2 card-name card-main'>
            <div className='card-body px-3 py-1'>
              <h1 className='name'>
                <p className='first'>Amber</p><br />
                <p className='middle'>Macbain</p><br />
                <p className='last'>Stumpf</p>
              </h1>
            </div>

          </div>

        </div>
        </div>
      </section>


    )
  }

}

export default Home;
