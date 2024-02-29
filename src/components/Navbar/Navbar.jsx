import { useState } from "react";
import { Link as Anchor } from 'react-router-dom';
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { IconXMark, IconThreeDots } from "../Icons/Icons";

const Navbar = () => {
  let [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="navbar top-0 fixed z-50 bg-gradient-to-br from-blue-400 bg-cyan-700 w-full">
      <div className="wrapper">
        <div className="flex justify-between p-2">
          <div>
            <Anchor to={'/'}>
              <img
                className="h-8 mx-4 aspect-square inline-block"
                src="https://i.postimg.cc/QMYfcPkT/mytinerary-logo.png"
                alt="logo"
              />
            </Anchor>
            <span className="text-white text-lg font-semibold text-shadow">
              ItineraryHub
            </span>
          </div>

          <div>
            <div className="navMenu hidden sm:inline">
              <NavbarMenu />
            </div>
            {show ? <NavbarMenu /> : null}
            <button
              className="menuBtn inline-flex sm:hidden w-6 justify-center items-center"
              onClick={handleShowMenu}
            >
              {show ? <IconXMark /> : <IconThreeDots />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
