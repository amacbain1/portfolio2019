import React, { Component } from 'react';
import './projects.scss';
import ladybug from './../../src/images/ladybug_game.png';
import neighborhood_map from './../../src/images/neighborhood_map.png';
import team_page from './../../src/images/team_screenshot.png';



class Projects extends Component {

  render(){
    return (
      <div id='projects'>


        <div className='container'>
            <div className='card-columns'>
              <div className='card projects-title mt-4'>
                <h3 className='mb-0 text-center align-bottom'>Projects</h3>
              </div>

              <div className='card project-1'>
                <figure className='card-img'>
                  <img src={ ladybug } alt='Ladybug game image'/>
                </figure>
              </div>

              <div className='card project-2'>
                <figure className='card-img'>
                  <img src={ team_page } alt='Ledkyb team image'/>
                </figure>
              </div>

              <div className='card project-3'>
                <figure className='card-img'>
                  <img src={ neighborhood_map } alt='Neighborhood map project image'/>
                </figure>
              </div>
          </div>

        </div>


      </div>
    )






  }
}

export default Projects
