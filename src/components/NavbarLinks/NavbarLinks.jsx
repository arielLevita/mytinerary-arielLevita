import PropTypes from 'prop-types';

const NavbarLinks = ({to, title}) => {
    return <a className="navbar-link font-medium mx-4" href={to}>{title}</a>
}

NavbarLinks.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavbarLinks