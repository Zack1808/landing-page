import React from 'react'

// Importing the costume made components
import Hero from './Hero';
import Slider from './Slider';
import Navbar from './Navbar';

// Importing the images
import img1 from '../images/travel-01.jpg'
import img2 from '../images/travel-02.jpg'
import img3 from '../images/travel-03.jpg'

// Importing the style file
import '../css/App.css';

// Array that will contain the links
const navbarLinks = [
  {url: "#", title: "Home"},
  {url: "#", title: "Trips"},
  {url: "#", title: "Rewards"}
]

// Creating the App component
const App = () => {
  return (
    <div>
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={img1} title="Travel made simple." />
      <Slider imageSrc={img2} title="Be an explorer!" subtitle="Our platform offers a wide variety of unique locations!" />
      <Slider imageSrc={img3} title="Memories for a lifetime!" subtitle="Your dream vacation is only a few clicks away!" flipped />
    </div>
  )
}

export default App