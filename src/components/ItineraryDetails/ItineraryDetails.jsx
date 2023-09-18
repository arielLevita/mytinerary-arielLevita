/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItineraryById } from "../../store/actions/itineraryActions.js";
// import IconHeart from "../Icons/IconHeart/IconHeart.jsx";
import ItineraryPrice from "../ItineraryPrice/ItineraryPrice.jsx";
import HandleNotFound from "../HandleNotFound/HandleNotFound.jsx";
import GoBackButton from "../GoBackButton/GoBackButton.jsx";
import LikeButton from "../LikeButton/LikeButton.jsx";


const ItineraryDetails = () => {

    let { id } = useParams();

    const dispatch = useDispatch();

    const itinerary = useSelector((store) => store.itineraryReducer.itinerary);

    useEffect(() => {
        dispatch(getItineraryById(id));
    }, [dispatch, id]);


    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-blue-100 mt-12">
            <div className='w-full h-80 bg-cover bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${itinerary?.coverURL})` }} >
                {/* <div className='absolute w-full h-full bg-black opacity-20'></div> */}
            </div>
            <div className='p-4'>
                <h1 className='w-full text-indigo-800 text-center font-bold text-2xl md:text-4xl lg:text-5xl p-4'>{itinerary?.name}</h1>

                <div className="h-8 flex items-center border-t border-s border-slate-400 py-6 px-4 mb-8">
                    <img src={itinerary.user?.photo} alt={itinerary.user?.name} className="h-8 rounded-full me-2" />
                    <div className="flex items-center">
                        <span className="font-semibold me-2">by {itinerary.user?.name}</span>
                        <LikeButton />
                    </div>
                </div>

                <div className="mb-2">
                    <div className='w-full border rounded-2xl shadow bg-purple-50 shadow-indigo-400 mx-auto py-2 px-16 text-center font-semibold md:text-xl lg:text-2xl'>
                        <span>Price: <ItineraryPrice price={itinerary?.price} /></span>
                        <p>Duration: {itinerary?.duration}.</p>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='mb-2 mx-auto py-8 px-16'>
                        <h3 className='w-full text-center font-semibold text-xl md:text-3xl lg:text-4xl mb-4'>Activities:</h3>
                        <ul className='list-disc font-semibold md:text-xl lg:text-2xl'>
                            {
                                itinerary.activities?.length > 0
                                    ? itinerary.activities?.map((activity, index) => (<li key={index} className="sm:py-2">{activity}</li>))
                                    : <HandleNotFound />
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='border bg-purple-50 rounded-2xl shadow shadow-indigo-400 mb-12 mx-auto py-2 px-4'>
                        <h3 className='w-full text-center font-semibold text-xl md:text-3xl lg:text-4xl'>Coments:</h3>
                    </div>
                </div>
            </div>

            <GoBackButton />
        </div>
    )
}

export default ItineraryDetails