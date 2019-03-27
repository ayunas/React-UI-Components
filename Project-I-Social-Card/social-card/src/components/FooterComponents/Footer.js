import React from 'react';
import './Footer.css';
import SpeechBubble from './speech-bubble.png'

const Footer = () => {
    
    return (
        <footer>
            <div class='image'>
                <img class='chat' src={SpeechBubble}/>
                <img class='retweet' src={require('./retweet.png')}/>
                <img class='like' src={require('./like.png')}/>
                <img class='message' src={require('./envelope.png')}/>
            </div>
        </footer>
    )   
}

export default Footer;

