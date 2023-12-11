import { useState } from 'react';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import IconThreeDots from '../Icons/IconThreeDots/IconThreeDots';
import IconXMark from '../Icons/IconXMark/IconXMark';

const Navbar = () => {

  let [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show)
  }

  return (
    <nav className="navbar top-0 fixed z-50 inline-flex bg-gradient-to-r from-blue-400 bg-cyan-700 p-2 w-full">
      <div className='me-auto'>
        <img className='h-8 mx-4 aspect-square inline-block' src="https://i.postimg.cc/QMYfcPkT/mytinerary-logo.png" alt="logo" />
        <span className='text-white text-lg font-semibold text-shadow'>MyTinerary</span>
      </div>

      <div className='navMenu hidden sm:inline'>
        <NavbarMenu />
      </div>
      {show ? <NavbarMenu /> : null}
      <button className='menuBtn inline-flex sm:hidden w-6 justify-center items-center' onClick={handleShowMenu}>
        {show ? <IconXMark /> : <IconThreeDots />}
      </button>
    </nav>
  )
}
export default Navbar