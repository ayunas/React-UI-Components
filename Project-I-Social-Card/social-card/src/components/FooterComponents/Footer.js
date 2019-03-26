import React from 'react';
import './Footer.css';

const Footer = () => {
    
    return (
        <footer>
            <div class='image'>
                <img class='chat' src={require('./speech-bubble.png')}/>
                <img class='retweet' src={require('./retweet.png')}/>
                <img class='like' src={require('./like.png')}/>
                <img class='message' src={require('./envelope.png')}/>
            </div>
        </footer>
    )
    
}


export default Footer;

