import React from 'react'


const Header = () => {
  return (
<nav>
    <NavContent/>
</nav>
  )
}
const NavContent=()=> (
<>
<h2>Prince Pal</h2>
  <div> 
      <a href="#home">Home</a>
    <a href="#work">Work</a>
    <a href="#servies">Services</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    
    </div>
    <a href="mailto:princepal9120@gmail.com">
  <button>Email</button>
    </a>
</>

)

export default Header