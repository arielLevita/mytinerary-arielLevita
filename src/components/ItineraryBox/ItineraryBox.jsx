import IconHeart from "../Icons/IconHeart/IconHeart"


const ItineraryBox = () => {
    return (
        <div className="flex flex-col sm:flex-row mx-auto bg-purple-50 text-slate-800 p-2 rounded-xl shadow shadow-slate-400">
            <img src="https://i.postimg.cc/t4Pq0qvx/agra.jpg" alt="" className="sm:w-1/2 rounded-lg" />
            <div className="flex flex-col w-full p-2">
                <h3 className="text-2xl font-bold text-purple-800 mt-2 sm:mt-0">Nombre de itinerario</h3>
                <ul className="list-none">hashtags [map + props]
                    {/* acá va el mapeo de los hashtags. inline-flex align-center justify-start */}
                </ul>
                <div>
                    <span className="inline-flex">Price: [función]</span>
                    {/* {función de mostrar moneditas} */}
                </div>
                <div className="mb-8">
                    <span className="inline-flex">Duration: [data]</span>
                    {/* {función de mostrar duración} */}
                    <span className=""> days.</span>
                </div>
                <div className="mt-auto flex flex-row h-12">
                    <div className="flex flex-row">
                        <img src="https://i.postimg.cc/4yZCwNrG/dani-ricciardo.jpg" alt="" className="rounded-full me-1" />
                        <div className="flex flex-col justify-between">
                            <span className="text-xs">Daniel Ricciardo
                                {/* mostrar nombre del user */}
                            </span>
                            <button className="flex justify-around items-center border rounded-full shadow-slate-400 border-slate-300 text-xs p-1">
                                <IconHeart /> 0 Likes
                                {/* botón de likes */}
                            </button>
                        </div>
                    </div>
                    <button className="w-full h-full text-purple-700 uppercase text-right font-bold">
                        + view more
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ItineraryBox