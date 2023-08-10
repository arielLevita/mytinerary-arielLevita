import PropTypes from 'prop-types';

import { Link as Anchor } from 'react-router-dom';

const NavbarLinks = ({to, title}) => {
    return <Anchor className="navbar-link font-medium mx-4" to={to}>{title}</Anchor>
}

NavbarLinks.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavbarLinks