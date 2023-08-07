import PropTypes from 'prop-types';

import './CitiesLinks.css'


const CitiesLinks = ({name, coverURL}) => {
    return (
        <div 
            className='w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center relative'
            style={{backgroundImage: `url(${coverURL})`}} 
        >
            <div className='absolute w-full h-full bg-black opacity-20'></div>
            <div className='absolute w-full h-full flex justify-center items-center text-center text-shadow'>{name}</div>
        </div>
    )
}

CitiesLinks.propTypes = {
    name: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
};

export default CitiesLinks