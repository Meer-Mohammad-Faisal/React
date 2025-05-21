import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/dashboard');
    }


  return (
    <div>
      about page
      <button onClick={handleClick}>
        move to Dashboard
      </button>
    </div>
  )
}

export default About
