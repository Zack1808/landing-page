import React from 'react'
import { useInView } from 'react-intersection-observer';

// Importing the style file
import '../css/Slider.css';

// Creating the Slider component
const Slider = ({ imageSrc, title, subtitle, flipped }) => {

    const { ref, inView } = useInView({
        threshold: 0.3,
    })

    return (
        <div className={flipped ? (inView ? "slider-flipped-in-view" : "slider-flipped") : (inView ? "slider-in-view" : "slider")} ref={ref}>
            <img src={imageSrc} alt="slider-image" className='slider-image'/>
            <div className="slider-content">
                <h1 className='slider-title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default Slider