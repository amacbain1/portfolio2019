import React, { Component} from 'react';
import './Projects.scss';

const projects = [
    {
        'id': 1,
        'name': 'Ladybugs! Arcade Game Clone', 
        'url': 'https://github.com/amacbain1/astumpf-arcade-game',
        'text': 'Visit and play on GitHub'
    },
    {
        'id': 2,
        'name': 'Neighborhood Map', 
        'url': 'https://github.com/amacbain1/Neighborhood-map-project7',
        'text': 'Visit on GitHub' 
    },
    {
        'id': 3,
        'name': 'Explore Southern California with me', 
        'url': 'http://www.exploresocalifornia.com/',
        'text': 'Blogging about places Built with Weebly'   
    }
]

class Project extends Component {

    render(){
        return(
            <div className='card card-main project-4 text-center col-md-4 mx-auto' id={this.id}>
              <a href={this.url}>
                <div className='overlay'>
                  <div className='text card-text'>
                    <h6 name={this.name}>{projects.name}</h6>
                    <hr />
                    <p text={this.text}>{projects.text}</p>
                  </div>
                </div>
              </a>
            </div>
        )
    }
}

export default Project;