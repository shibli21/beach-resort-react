// eslint - disable
import React from 'react'
import { Hero } from '../Components/Hero'
import { Banner } from '../Components/Banner'
import { Link } from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';


export const Home = () => {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title='Luxurious rooms' subtitle='Delux rooms starting fat $299'>
                    <Link to='/rooms' className='btn-primary'>
                        our room
            </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            
        </div>
    )
}
