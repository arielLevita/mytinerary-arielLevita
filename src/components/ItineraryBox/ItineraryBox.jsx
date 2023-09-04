import { Link as Anchor } from "react-router-dom"
import IconHeart from "../Icons/IconHeart/IconHeart"
import ItineraryPrice from "../ItineraryPrice/ItineraryPrice"


const ItineraryBox = ({_id, name, coverURL, duration, price, userName, userPhoto}) => {
    return (
        <div className="flex flex-col sm:flex-row mx-auto bg-purple-50 text-slate-800 p-2 rounded-xl shadow shadow-slate-400">
            <img src={coverURL} alt="" className="sm:w-1/2 rounded-lg" />
            <div className="flex flex-col w-full p-2">
                <h3 className="text-2xl font-bold text-purple-800 mt-2 sm:mt-0">{name}</h3>
                <ul className="list-none text-xs italic">no alcancé a poner los hashtags.
                    {/* acá va el mapeo de los hashtags. inline-flex align-center justify-start */}
                </ul>
                <div className="font-semibold"> Price: 
                    <ItineraryPrice price={price} />
                </div>
                <div className="mb-8">
                    <span className="inline-flex font-semibold">Duration: {duration}.</span>
                </div>
                <div className="mt-auto flex flex-row h-12">
                    <div className="flex flex-row">
                        <img src={userPhoto} alt={userName} className="rounded-full me-1" />
                        <div className="flex flex-col justify-between">
                            <span className="text-xs font-semibold">{userName}</span>
                            <button className="flex justify-around items-center border rounded-full shadow-slate-400 border-slate-300 text-xs p-1">
                                <IconHeart /> 0 Likes
                                {/* botón de likes */}
                            </button>
                        </div>
                    </div>
                    <Anchor className="w-full h-full text-purple-700 uppercase text-right font-bold" to={`/itineraries/${_id}`}>
                        + view more
                    </Anchor>
                </div>
            </div>

        </div>
    )
}

export default ItineraryBox