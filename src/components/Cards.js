import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/6.jpg"
                            text="Explore the hidden waterfull deep inside the Amazon Jungle"
                            label='Adventure'
                            path="/services"
                        />
                         <CardItem 
                            src="/images/7.jpg"
                            text="Explore the hidden waterfull deep inside the Amazon Jungle"
                            label='Luxury'
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/15.jpg"
                            text="Explore the hidden waterfull deep inside the Amazon Jungle"
                            label='Adventure'
                            path="/services"
                        />
                         <CardItem 
                            src="/images/13.jpg"
                            text="Explore the hidden waterfull deep inside the Amazon Jungle"
                            label='Luxury'
                            path="/services"
                        />
                         <CardItem 
                            src="/images/17.jpg"
                            text="Explore the hidden waterfull deep inside the Amazon Jungle"
                            label='Luxury'
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
