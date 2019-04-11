import React, { Component } from 'react';
import './Home.scss';


class Home extends Component {

  render() {

    return (
      <section id='home'>
        <div className='container'>
          <div className='card-columns'>

            <div className='card card-name card-main'>
              <div className='card-body px-3 py-1'>
                <h1 className='name'>
                  <hr />
                  <p className='first'>Amber </p><br />
                  <p className='middle'>Macbain </p><br />
                  <p className='last'>Stumpf</p>
                  <hr />
                </h1>
              </div>
            </div>

            <div className='card card-img card-main mx-auto'>

            </div>

            <div className='card card-skills card-main text-center mx-auto'>
              <h2 className='card-title text-white-50 m-3'>Front End Web Development</h2>
              <p className='card-body'>HTML, CSS, Bootstrap, JavaScript, React, Git</p>
              <hr />
              <p> <em style={{ fontFamily: 'Cinzel Decorative' }}>Amber</em> loves to collaborate and wishes she could install Git to manage her daily life.</p>

            </div>



          </div>
        </div>
      </section>


    )
  }

}

export default Home;
