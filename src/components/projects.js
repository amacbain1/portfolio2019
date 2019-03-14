import React, { Component } from 'react';
import './Projects.scss';





class Projects extends Component {

  render() {
    return (
      <section id='projects'>


        <div className='container'>

          <div className='card  project'>
            <div className='projects-title'>
              <h3 className='mb-0 text-center align-bottom'>Projects</h3>
            </div>
          </div>

          <div className='card-columns'>

            <div className='card card-main project-1 text-center col-md-4'>
              <div className='overlay'>
                <p className="text card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus tempore tenetur, sit fugiat animi.</p>
              </div>
            </div>


            <div className='card card-main project-3 text-center col-md-4'>
              <div className='overlay'>
                <p className="text card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus itaque officia blanditiis odio fuga voluptates.</p>
              </div>
            </div>



            <div className='card card-main project-4 text-center col-md-4'>
              <div className='overlay'>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus itaque officia blanditiis odio fuga voluptates.</p>
              </div>
            </div>

          </div>



        </div>

      </section>

    )






  }
}

export default Projects
