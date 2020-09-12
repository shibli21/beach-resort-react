import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {


    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet cinsectetur adipisicing eli. Magni , corporis!"
            },
            {
                icon: <FaHiking />,
                title: "Endless hiking",
                info: "Lorem ipsum dolor sit amet cinsectetur adipisicing eli. Magni , corporis!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet cinsectetur adipisicing eli. Magni , corporis!"
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Lorem ipsum dolor sit amet cinsectetur adipisicing eli. Magni , corporis!"
            },
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6> {item.title}</h6>
                            <p> {item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

