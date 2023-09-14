import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { user_logout } from '../../store/actions/userActions';

import './NavbarMenu.css';

const NavbarMenu = () => {

    const user = useSelector(store => store.userReducer.user)
    const defaultPhoto = 'https://i.postimg.cc/yN3xNK4z/default-avatar.png';

    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            dispatch(user_logout(token, user));
        } catch (error) {
            console.log(error);
        }
    };

    const links = [
        { key: 1, title: 'Home', to: '/' },
        { key: 2, title: 'Cities', to: '/cities' },
    ]

    return (
        <div className='fullMenu'>
            <div className='links text-white'>
                {links.map((link) => (<NavbarLinks key={link.key} title={link.title} to={link.to} />))}
            </div>
            <div className="user">
                {
                    user
                        ? <Anchor onClick={handleLogout} to={'/'} className=" bg-gradient-to-r from-purple-500 bg-purple-400 shadow-slate-400 mx-2 px-3 py-1 text-sm shadow-sm font-medium tracking-wider  text-white rounded-full hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700">Logout</Anchor>
                        : <Anchor to='/signin' className=" bg-gradient-to-r from-purple-500 bg-purple-400 shadow-slate-400 mx-2 px-3 py-1 text-sm shadow-sm font-medium tracking-wider  text-white rounded-full hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700">SignIn</Anchor>
                }
                <img className='h-8 bg-white rounded-full mx-2 aspect-square' src={user ? user.photo : defaultPhoto} alt="blank avatar" />
            </div>
        </div>
    )
}

export default NavbarMenu