import PropTypes from 'prop-types';

import './CitiesLinks.css'


const CitiesLinks = ({name, coverURL}) => {
    return (
        <div 
            className='h-full bg-cover bg-center bg-no-repeat text-6xl text-center text-cyan-50 text-shadow flex justify-center items-center'
            style={{backgroundImage: `url(${coverURL})`}} 
        >{name}
        </div>
    )
}

CitiesLinks.propTypes = {
    name: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
};

export default CitiesLinks