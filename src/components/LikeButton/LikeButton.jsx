import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getItineraryById } from "../../store/actions/itineraryActions.js";
import axios from 'axios';
import apiUrl from '../../api.js';
import { IconHeart } from "../Icons/Icons";

const LikeButton = () => {

    let { id } = useParams();
    const dispatch = useDispatch();
    const initialItinerary = useSelector((store) => store.itineraryReducer.itinerary);
    let [itinerary, setItinerary] = useState({initialItinerary})
    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    let [liked, setLiked] = useState(false);
    let [likeCounter, setLikeCounter] = useState(0);
    const [updatedLikesArray, setUpdatedLikesArray] = useState(null);

    const handleLikeClick = async () => {
        try {
            let updatedLikesArray;
            
            if ((itinerary.likes === undefined) || (!itinerary.likes)) {
                itinerary.likes = [];
            }
    
            if (itinerary.likes.includes(parsedUser.email)) {
                updatedLikesArray = itinerary.likes.filter(email => email !== parsedUser.email);
            } else {
                updatedLikesArray = [...itinerary.likes, parsedUser.email];
            }
    
            const putResponse = await axios.put(`${apiUrl}/itineraries/${itinerary._id}`, { likes: updatedLikesArray });
            if (putResponse.status === 200) {
                setUpdatedLikesArray(updatedLikesArray);
                setItinerary({ ...itinerary, likes: updatedLikesArray });
                setLiked(updatedLikesArray.includes(parsedUser.email));
                setLikeCounter(updatedLikesArray.length);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(getItineraryById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (initialItinerary) {
            setItinerary(initialItinerary);
        }
    }, [initialItinerary]);
    
    useEffect(() => {
        if (itinerary.likes && parsedUser) {
            setLiked(itinerary.likes.includes(parsedUser.email));
            setLikeCounter(itinerary.likes.length);
        }
    }, [itinerary, parsedUser]);

    useEffect(() => {
        if (updatedLikesArray) {
            setLiked(updatedLikesArray.includes(parsedUser.email));
            setLikeCounter(updatedLikesArray.length);
        }
    }, [updatedLikesArray, parsedUser]);

    return (
        <div>
            {user ? (
                <button className='w-fit flex justify-between items-center from-purple-400 bg-gradient-to-br to-violet-300 border rounded-full drop-shadow-md hover:bg-slate-500 border-slate-300 text-xs px-3 py-1' onClick={handleLikeClick} >
                    <IconHeart height={'1.7em'} liked={liked} />
                    <span className='font-semibold text-lg ml-4'>{likeCounter}</span>
                </button>
            ) : (
                <span className='w-fit flex justify-between items-center from-purple-400 bg-gradient-to-br to-violet-300 border rounded-full drop-shadow-md hover:bg-slate-500 border-slate-300 text-xs px-3 py-1'>
                    <IconHeart height={'1.7em'} />
                    <span className='font-semibold text-lg ml-4'>{itinerary.likes ? itinerary.likes.length : 0}</span>
                </span>
            )}
        </div>
    );
};

export default LikeButton;