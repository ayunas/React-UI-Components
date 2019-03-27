import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';


const CardContainer = () => {
    
    return (
        <section>
            <a href='http://reactjs.org' class='card-banner' target='_blank'><CardBanner /></a>
            <CardContent />
        </section>
    )
    
}

export default CardContainer;

