import PropTypes from 'prop-types';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

Main.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Main