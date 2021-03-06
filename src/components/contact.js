import React, { Component } from 'react'
import './Contact.scss'


class Contact extends Component {
    render() {


        return (
            <section id='contact'>
                <div className=''>
                    <div className='card-columns d-flex justify-content-between text-center'>
                        <div className='container align-items-center'>

                            <div className='card contact-card p-2 m-5'>
                                <hr />
                                <p>Reach out to me at aiyemacbain@gmail.com</p>
                                <p>
                                    <a href='https://www.linkedin.com/in/amber-macbain-0b8422170/'>LinkedIn </a>
                                    <a href='https://github.com/amacbain1'>GitHub </a>
                                    <a href='http://www.exploresocalifornia.com/contact.html'>ExploreSoCalifornia </a>
                                    <a href='https://www.ledkyb.com/'>Ledkyb Studios</a>
                                </p>
                                <hr />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact