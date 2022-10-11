import React from 'react'

// Importing the style file
import '../css/Slider.css';

// Creating the Slider component
const Slider = ({ imageSrc, title, subtitle, flipped }) => {

    return (
        <div className={flipped ? "slider-flipped" : "slider"}>
            <img src={imageSrc} alt="slider-image" className='slider-image'/>
            <div className="slider-content">
                <h1 className='slider-title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default Slider