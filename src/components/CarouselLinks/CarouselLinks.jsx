import PropTypes from 'prop-types';

const CarouselLinks = ({name, coverURL}) => {
    return (
        <div 
            className='card-body w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center relative'
            style={{backgroundImage: `url(${coverURL})`}} 
        >
            <div className='absolute w-full h-full bg-black opacity-20'></div>
            <div className='absolute w-full h-full flex justify-center items-center text-center text-shadow'>{name}</div>
        </div>
    )
}

CarouselLinks.propTypes = {
    name: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
};

export default CarouselLinks