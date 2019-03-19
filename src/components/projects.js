import React, { Component } from 'react';
import './Projects.scss';





class Projects extends Component {

  render() {
    return (
      <section id='projects'>


        <div className='container'>

          <div className='card project'>
            <div className='projects-title card-text d-flex justify-content-between align-items-center'>
              <h3 className='m-2'>Projects</h3>

              <p className='text-white-50 mr-2'>To see additional projects visit me on <a href='https://github.com/amacbain1'>GitHub</a></p>
            </div>
          </div>

          <div className='card-columns'>

            <div className='card card-main project-1 text-center col-md-4'>
              <a href='https://github.com/amacbain1/astumpf-arcade-game'>
                <div className='overlay'>
                  <p className="text card-text">Ladybugs! Arcade Game Clone<br /> Visit and play on GitHub</p>
                </div>
              </a>
            </div>


            <div className='card card-main project-3 text-center col-md-4'>
              <a href='https://github.com/amacbain1/Neighborhood-map-project7'>
                <div className='overlay'>
                  <p className="text card-text">Neighborhood Map<br />Built with React<br />Visit on Github</p>
                </div>
              </a>
            </div>



            <div className='card card-main project-4 text-center col-md-4'>
              <a href='http://www.exploresocalifornia.com/'>
                <div className='overlay'>
                  <p className="text">Explore Southern California with me<br />Built with Weebly<br />Visit me at exploresocalifornia.com</p>
                </div>
              </a>
            </div>

          </div>



        </div>

      </section >

    )






  }
}

export default Projects
