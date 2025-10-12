import PropTypes from 'prop-types';
import { Link as Anchor } from "react-router-dom"
import '../../../node_modules/atropos/atropos.css'

const CityCard = ({ _id, name, coverURL, description }) => {
    return (
        <div className=''>
            <div className='flex flex-wrap border border-stone-400 hover:shadow-lg rounded-lg p-2'>
                <div className='w-full lg:w-4/12 bg-cover bg-center h-56 rounded-lg' style={{ backgroundImage: `url(${coverURL})` }}></div>
                <div className='flex flex-col w-full lg:w-8/12 px-2'>
                    <h3 className='font-bold text-lg'>{name}</h3>
                    <p className='grow text-sm'>{description}</p>
                    <Anchor key={_id} to={`/cities/${_id}`}>
                        <button className='mt-4 h-8 text-white rounded-lg bg-gradient-to-r from-purple-500 bg-purple-400 hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700 w-full'>More INFO</button>
                    </Anchor>
                </div>

            </div>
        </div>
    )
}

CityCard.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    coverURLtiny: PropTypes.string.isRequired,
};

export default CityCard