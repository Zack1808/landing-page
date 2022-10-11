import React from 'react'

// Importing the costume made components
import Hero from './Hero';
import Slider from './Slider';

// Importing the images
import img1 from '../images/travel-01.jpg'
import img2 from '../images/travel-02.jpg'
import img3 from '../images/travel-03.jpg'

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {
  return (
    <div>
      <Hero imageSrc={img1} title="Travel made simple." />
      <Slider imageSrc={img2} title="Be an explorer!" subtitle="Our platform offers a wide variety of unique locations!" />
      <Slider imageSrc={img1} title="Be an explorer!" subtitle="Our platform offers a wide variety of unique locations!" flipped />
    </div>
  )
}

export default App