import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';


const CardContainer = () => {
    
    return (
        <section>
            <CardBanner />
            <CardContent />
        </section>
    )
    
}

export default CardContainer;

