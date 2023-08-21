import PropTypes from 'prop-types';
import { Link as Anchor } from "react-router-dom"

const CityCard = ({_id, name, coverURL}) => {
    return (
        <div className='flex flex-col border rounded-md border-black border-opacity-50 shadow-lg'>
            <img className='w-full h-auto rounded-md p-1' src={coverURL} alt={name} />
            <h5 className='text-gray-600 font-medium my-1 mx-2'>{name}</h5>
            <Anchor className="bg-gradient-to-r from-purple-500 bg-purple-400 text-sm shadow-sm text-center font-medium tracking-wider  text-white rounded-md hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700 m-2 p-0.5" key={_id} to={`/cities/${_id}`}>Details
            </Anchor>
        </div>
    )
}

CityCard.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
};

export default CityCard