import React, { Component } from 'react';
import './projects.scss';





class Projects extends Component {

  render() {
    return (
      <div id='projects'>


        <div className='container'>

          <div className='card col-lg-6 project'>
            <div className='projects-title justify-content'>
              <h3 className='mb-0 text-center align-bottom'>Projects</h3>
            </div>
          </div>

          <div className='card-columns'>
            <div className='card card-main project-1'>
              <div className='overlay'>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus tempore tenetur, sit fugiat animi.</p>
              </div>
            </div>


            <div className='card card-main project-2'>
              <div className='overlay'>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus itaque officia blanditiis odio fuga voluptates.</p>
              </div>
            </div>

            <div className='card card-main project-3'>
              <div className='overlay'>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa amet perferendis exercitationem? Quia, aliquid soluta?</p>
              </div>
            </div>
          </div>


        </div>

      </div>

    )






  }
}

export default Projects
