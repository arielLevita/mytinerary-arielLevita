import { Link as Anchor } from "react-router-dom"
import IconHeart from "../Icons/IconHeart/IconHeart"
import ItineraryPrice from "../ItineraryPrice/ItineraryPrice"

const ItineraryBox = ({_id, name, coverURL, duration, price, likes, userName, userPhoto}) => {
    return (
        <div className="flex flex-col w-full sm:flex-row mx-auto bg-purple-50 text-slate-800 p-2 rounded-xl shadow shadow-slate-400">
            <img src={coverURL} alt="" className="sm:w-1/2 rounded-lg" />
            <div className="flex flex-col w-full p-2 sm:w-1/2">
                <div className="flex flex-col flex-grow border-l-2 border-indigo-500 px-2">
                    <h3 className="text-2xl font-bold text-indigo-800 mt-2 sm:mt-0">{name}</h3>
                    <ul className="list-none text-xs italic">no alcancé a poner los hashtags.
                        {/* TODO acá va el mapeo de los hashtags. inline-flex align-center justify-start */}
                    </ul>
                    <div className="font-semibold"> Price: 
                        <ItineraryPrice price={price} />
                    </div>
                    <div>
                        <span className="inline-flex font-semibold">Duration: {duration}.</span>
                    </div>
                </div>
                <div className="inline-flex h-16 border-t-2 border-r-2 border-indigo-500 pt-2 px-4">
                    <div className="inline-flex w-full">
                        <img src={userPhoto} alt={userName} className="rounded-full me-1" />
                        <div className="flex flex-col justify-between">
                            <span className="text-xs font-semibold">{userName}</span>
                            <div className="w-24 flex justify-start items-center text-xs py-1">
                                <span className="mx-2"><IconHeart /></span> {likes.length} Likes
                            </div>
                        </div>
                        <Anchor className="ml-auto text-indigo-800 uppercase text-right font-bold my-auto" to={`/itineraries/${_id}`}>
                            + view more
                        </Anchor>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItineraryBox