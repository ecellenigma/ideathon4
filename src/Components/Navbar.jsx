import logo from '../Assets/logo.svg';
import enigma_logo from '../Assets/enigma_logo.svg'
import './Navbar.css';
import { useState } from 'react';

function BasicExample() {

const [color,setColor] = useState(false)
const changeColor = () => {
  if (window.scrollY >= 100){
    setColor(true)
  }
  else{
    setColor(false)
  }
}

window.addEventListener('scroll',changeColor)
  return (
<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary" id={color ? 'bg-color' : 'bg'}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#home"><img src={logo} alt="" className='ideathon-logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tracks">Tracks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#faqs">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  <a class="navbar-brand" href="https://www.ecellnmit.in"><img src={enigma_logo} alt="" className='enigma-logo'/></a>
</nav>
  );
}

export default BasicExample;