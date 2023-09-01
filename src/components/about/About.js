import React from 'react'
import carnet from '../../images/fotocarnet.jpeg';
import "./About.css"
function About() {
  return (
    <div>
      <img className='carnet' src={carnet} alt="carnet" />
      <h1>I'm not afraid of computers taking over the world.</h1>
      <h3> - Thom Yorke</h3>
    </div>
  )
}

export default About