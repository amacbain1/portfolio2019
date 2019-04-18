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

          <div className='card-columns project-cards'>

            <div className='card card-main project-1 text-center col-md-4  mx-auto'>
              <a href='https://github.com/amacbain1/astumpf-arcade-game'>
                <div className='overlay'>
                  <div className="text card-text">
                    <h6>Ladybugs! Arcade Game Clone</h6>
                    <hr />
                    <p>Visit and play on GitHub</p>
                  </div>
                </div>
              </a>
            </div>


            <div className='card card-main project-3 text-center col-md-4 mx-auto'>
              <a href='https://github.com/amacbain1/Neighborhood-map-project7'>
                <div className='overlay'>
                  <div className='text card-text'>
                    <h6>Neighborhood Map</h6>
                    <hr />
                    <p>Built with React<br />Visit on Github</p>
                  </div>
                </div>
              </a>
            </div>

            <div className='card card-main project-4 text-center col-md-4 mx-auto mb-4'>
              <a href='http://www.exploresocalifornia.com/'>
                <div className='overlay'>
                  <div className='text card-text'>
                    <h6>Explore Southern California with me</h6>
                    <hr />
                    <p >Blogging about places<br />Visit me at exploresocalifornia.com<br />Built with Weebly</p>
                  </div>
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
