/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItineraryById } from "../store/actions/itineraryActions.js";
// import { IconHeart } from "../Icons/Icons";
import ItineraryPrice from "../components/ItineraryPrice/ItineraryPrice.jsx";
import HandleNotFound from "../components/HandleNotFound/HandleNotFound.jsx";
import GoBackButton from "../components/GoBackButton/GoBackButton.jsx";
import LikeButton from "../components/LikeButton/LikeButton.jsx";
import CommentsSection from "../components/CommentsSection/CommentsSection.jsx";
import BorderedHeadingThree from "../components/BorderedHeadingThree/BorderedHeadingThree.jsx";


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
            </div>
            <div className="wrapper flex flex-col items-center">
                <div className=''>
                    <h1 className='w-full text-blue-900 text-center md:text-left font-bold text-2xl md:text-6xl lg:text-7xl p-4'>{itinerary?.name}</h1>
                    <div className="h-8 flex items-center py-6 px-4 mb-4 md:mb-8">
                        <img src={itinerary.user?.photo} alt={itinerary.user?.name} className="h-8 rounded-full me-2" />
                        <div className="flex items-center">
                            <span className="font-semibold me-2">by {itinerary.user?.name}</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 md:border-r md:border-gray-500 md:border-opacity-25 px-4">
                            <div className="w-full mb-12">
                                <BorderedHeadingThree>
                                    <span>Price: <ItineraryPrice price={itinerary?.price} /></span>
                                    <span>Duration: {itinerary?.duration}.</span>
                                    <LikeButton />
                                </BorderedHeadingThree>
                            </div>
                            <div className='w-full mb-12'>
                                <BorderedHeadingThree>
                                    <h3>Activities:</h3>
                                </BorderedHeadingThree>
                                <div className='mb-2 mx-auto px-16'>
                                    <ul className='list-disc font-semibold md:text-xl'>
                                        {
                                            itinerary.activities?.length > 0
                                                ? itinerary.activities?.map((activity, index) => (<li key={index} className="sm:py-2">{activity}</li>))
                                                : <HandleNotFound />
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className='w-full'>
                                <div className="mb-4">
                                    <BorderedHeadingThree>
                                        <h3>Comments:</h3>
                                    </BorderedHeadingThree>
                                </div>
                                <div className="w-full">
                                    <CommentsSection itineraryId={id} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <GoBackButton />
            </div>
        </div>
    )
}

export default ItineraryDetails