import React, { Component } from 'react';
import './Home.scss';


class Home extends Component {

  render() {

    return (
      <section id='home'>
        <div className='container'>
          <div className='card-columns mx-auto'>


            <div className='card mx-2 card-img card-main'>

            </div>

            <div className='card mx-2 card-skills card-main text-center'>
              <h2 className='card-title text-white-50 m-3'>Front End Web Development</h2>
              <p className='card-body text-white-50'>HTML, CSS, Bootstrap, JavaScript, React, Git<br /><hr /><em style={{ fontFamily: 'Cinzel Decorative' }}>Amber</em> loves to collaborate and wishes she could install Git to manage her daily life.</p>

            </div>

            <div className='card mx-2 card-name card-main'>
              <div className='card-body px-3 py-1'>
                <h1 className='name'>
                  <hr />

                  <p className='first'>Amber</p><br />
                  <p className='middle'>Macbain</p><br />
                  <p className='last'>Stumpf</p>
                  <hr />

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
