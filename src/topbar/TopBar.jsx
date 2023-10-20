import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import './topbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [menuOpen, setMenuOpen] = useState(false)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
     <Link to='intro' smooth={true} className='title'>
                Portfolio Website
           </Link>
           <div className='menu' onClick={() => {
               setMenuOpen(!menuOpen)
           }}>
          <span></span>
          <span></span>
          <span></span>
           </div>
      
      <ul className={menuOpen ? "open" : ""}> 
          <li>
          <Link to='intro' smooth={true} >
                Intro
           </Link>
          </li>
          <li>
          <Link to='about' smooth={true} >
                Information
           </Link>
          </li> 
          <li>
          <Link to='preface' smooth={true} >
                Preface
           </Link>
          </li>
          {/* <li>
          <Link to='attitude' smooth={true} >
                Attitude
           </Link>
          </li> */}
           <li>
           <Link to='education' smooth={true} >
                Education
           </Link>
           </li>   
          <li>
          <Link to='experience' smooth={true} >
                Experience
           </Link>
          </li>
          <li>
          <Link to='skill' smooth={true} >
                Skills
           </Link>
          </li> 
          <li>
          <Link to='contact' smooth={true} >
                Contact
           </Link>
          </li> 

    </ul>
      

      
    </nav>
  )
}