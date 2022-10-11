import React from 'react';

// Importing the style file
import '../css/Hero.css';

// Creating the Hero component
const Hero = ({ imageSrc, title }) => {
    return (
        <div className='hero'>
            <img src={imageSrc} alt="hero-image" className='hero-image' />
            <h1 className='hero-title'>{title}</h1>
        </div>
    )
}

export default Hero;