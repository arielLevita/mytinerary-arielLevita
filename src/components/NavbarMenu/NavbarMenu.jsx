import { Link as Anchor } from 'react-router-dom';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

import './NavbarMenu.css';

const NavbarMenu = () => {

    const links = [
        { key: 1, title: 'Home', to: '/' },
        { key: 2, title: 'Cities', to: '/cities' },
        { key: 3, title: 'Stays', to: '/stays' },
        { key: 4, title: 'Car rentals', to: '/car-rentals' }
    ]

    return (
        <div className='fullMenu'>
            <div className='links text-white'>
                {links.map((link) => (<NavbarLinks key={link.key} title={link.title} to={link.to} />))}
            </div>
            <div className="user">
                <Anchor to='/login' className=" bg-gradient-to-r from-purple-500 bg-purple-400 mx-2 px-3 py-1 text-sm shadow-sm font-medium tracking-wider  text-white rounded-full hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700">Login</Anchor>
                <img className='h-8 mx-2 aspect-square' src="https://i.postimg.cc/9MLsQhpR/blank-avatar.png" alt="blank avatar" />
            </div>
        </div>
    )
}

export default NavbarMenu