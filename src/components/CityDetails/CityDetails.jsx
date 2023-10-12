/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityById } from "../../store/actions/cityActions.js";
import { getItinerariesByCityId } from "../../store/actions/itineraryActions.js";
import ItineraryBox from "../ItineraryBox/ItineraryBox";
import HandleNotFound from "../HandleNotFound/HandleNotFound.jsx";
import GoBackButton from "../GoBackButton/GoBackButton.jsx";

const citiesDetails = () => {

    let { id } = useParams();

    const dispatch = useDispatch();
    
    const city = useSelector((store) => store.cityReducer.city);
    const itineraries = useSelector((store) => store.itineraryReducer.itineraries);

    useEffect(() => {
        dispatch(getCityById(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getItinerariesByCityId(id));
    }, [dispatch, id]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-blue-100 mt-12">

            <div className='w-full h-72 bg-cover bg-center bg-no-repeat flex justify-center items-center relative' style={{backgroundImage: `url(${city?.coverURL})`}} >
                <div className='absolute w-full h-full bg-black opacity-20'></div>
                <div className='absolute w-full h-full flex justify-center items-center text-white text-center font-semibold text-5xl md:text-7xl lg:text-8xl text-shadow'>{city?.name}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                {
                    itineraries?.length > 0
                    ? itineraries?.map((itinerary) => (
                            <ItineraryBox key={itinerary._id} _id={itinerary._id} name={itinerary.name} coverURL={itinerary.coverURL} duration={itinerary.duration} price={itinerary.price} likes={itinerary.likes} userName={itinerary.user?.name} userPhoto={itinerary.user?.photo}/>
                    ))
                    : <HandleNotFound />
                }
            </div>

            <GoBackButton />
        </div>
    )
}

export default citiesDetails