import React, { Component } from 'react';
import './Home.scss';


class Home extends Component {

  render() {
    const name = 'Amber'

    return (
      <section id='home'>
        <div className='container'>
          <div className='card-columns mx-auto'>


            <div className='card mx-2 card-img card-main'>

            </div>

            <div className='card mx-2 card-skills card-main text-center'>
              <h2 className='card-title text-white-50 m-3'>{name} lorem ipsum dolor sit amet.</h2>
              <p className='card-body text-white-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium necessitatibus minus animi unde possimus ullam similique commodi modi rerum temporibus!</p>
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
