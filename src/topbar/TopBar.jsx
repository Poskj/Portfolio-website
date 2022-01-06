import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import './topbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


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
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
           <Link to='intro' smooth={true} className='items'>
                Intro
           </Link>
           <Link to='about' smooth={true} className='items'>
                Information
           </Link>
           <Link to='preface' smooth={true} className='items'>
                Preface
           </Link>
           <Link to='attitude' smooth={true} className='items'>
                Attitude
           </Link>
           <Link to='education' smooth={true} className='items'>
                Education
           </Link>
           <Link to='experience' smooth={true} className='items'>
                Experience
           </Link>
           <Link to='skill' smooth={true} className='items'>
                Skills
           </Link>

    </ul>
      )}

      <button onClick={toggleNav} className="btn">menu</button>
    </nav>
  )
}