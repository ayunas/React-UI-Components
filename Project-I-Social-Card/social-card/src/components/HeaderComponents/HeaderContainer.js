import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
    
    return (
        <header>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </header>
        
    );
} 


export default HeaderContainer;


