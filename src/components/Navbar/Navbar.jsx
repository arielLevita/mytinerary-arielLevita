import { useState } from 'react';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import './Navbar.css'

const Navbar = () => {

  let [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show)
  }

  return (
    <nav className="navbar z-50 inline-flex bg-gradient-to-r from-blue-400 bg-cyan-700 p-2 w-full">
      <div className='me-auto'>
        <img className='h-8 mx-4 aspect-square inline-block' src="https://i.postimg.cc/QMYfcPkT/mytinerary-logo.png" alt="logo" />
        <span className='text-white font-semibold'>MyTinerary</span>
      </div>

      <div className='navMenu'>
        <NavbarMenu />
      </div>
      {show ? <NavbarMenu /> : null}
      <button className='menuBtn' onClick={handleShowMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='mx-2'>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </button>
    </nav>
  )
}
export default Navbar