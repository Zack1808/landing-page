import React from 'react'

// Importing the costume made components
import Hero from './Hero';

// Importing the images
import img1 from '../images/travel-01.jpg'

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {
  return (
    <div>
      <Hero imageSrc={img1} title="Travel made simple" />
    </div>
  )
}

export default App