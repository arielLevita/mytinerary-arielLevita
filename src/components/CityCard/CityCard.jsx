import PropTypes from 'prop-types';
import { Link as Anchor } from "react-router-dom"
import Atropos from 'atropos/react';
import IconInfoCircle from '../Icons/IconInfoCircle/IconInfoCircle';
import '../../../node_modules/atropos/atropos.css'

const CityCard = ({_id, name, coverURL}) => {
    return (
        <div className='hover:shadow-2xl'>
            <Atropos
                shadow={false}
            >
                <img src={coverURL} alt={name} className='relative' data-atropos-offset="0" />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center' data-atropos-offset="2">
                    <h4 className='text-white text-shadow text-3xl'>{name}</h4>
                </div>
                <Anchor className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-500 bg-purple-400 text-sm text-center font-medium tracking-wider  text-white rounded-md shadow-lg hover:bg-purple-700 p-2 font-mono" key={_id} to={`/cities/${_id}`} data-atropos-offset="4">
                    <IconInfoCircle />
                </Anchor>
            </Atropos>
        </div>
    )
}

CityCard.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
};

export default CityCard