import React, { Component } from 'react';
import './Tabbar.scss';


class App extends Component {
    render() {
        return (
            <section className='tabbar bg-dark fixed-bottom d-sm-none' id='Tabbar'>
                <div className='top-stripe w-100'></div>
                <div className='container-fluid'>

                    <div className="column">
                        <ul className="nav nav-fill nav-pills">
                            <li className='nav-item'> <a href='#home' className='nav-link nav-color'>Top</a></li>
                            <li className='nav-item'> <a href='#home' className='nav-link nav-color'>Home</a></li>
                            <li className='nav-item'><a href='#projects' className='nav-link nav-color'>Projects</a></li>
                            <li className='nav-item'><a href='#contact' className='nav-link nav-color'>Contact</a></li>
                        </ul>
                    </div>


                </div>

            </section>
        );
    }
}

export default App;
