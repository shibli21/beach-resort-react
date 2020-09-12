// eslint - disable
import React, { Component } from 'react'
import { Hero } from '../Components/Hero'
import {Link} from 'react-router-dom'
import { Banner } from '../Components/Banner'
export default class Error extends Component {
    render() {
        return (
            <div>
                <Hero >
                    <Banner title ='404' subtitle='page not found'>
                        <Link to='/' className='btn-primary'>Home</Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}
