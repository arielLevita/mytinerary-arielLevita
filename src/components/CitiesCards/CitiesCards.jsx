/* eslint-disable react/jsx-key */
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CityCard from "../CityCard/CityCard.jsx";
import IconMagnifyingGlass from '../Icons/IconMagnifyingGlass/IconMagnifyingGlass';
import HandleNotFound from "../HandleNotFound/HandleNotFound.jsx";
import './CitiesCards.css'

const CitiesCards = () => {

    const [cities, setCities] = useState();

    let inputSearch = useRef();

    useEffect(() => {
        axios.get('http://localhost:3000/api/cities')
            .then(response => setCities(response.data.cities))
            .catch(err => console.log(err))
    }, []);

    const handleSearch = async () =>{

        const name = inputSearch.current.value;

        try{
            const response = await axios.get(`http://localhost:3000/api/cities?name=${name}`)
            setCities(response.data.cities);
        }catch (error){
            if(error.response.status === 404) {
                console.log('City not found');
                setCities([]);
            } else {
                console.log(error)
            }
        }
    }

    return (
        <>
            <div className="flex items-center justify-center my-4">
                <div className="flex items-center max-w-md mx-auto bg-white border border-gray-300 rounded-lg">
                    <div className="w-full">
                        <input
                            ref={inputSearch}
                            type="search"
                            className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                            placeholder="search"
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleSearch}
                            type="submit"
                            className='flex items-center justify-center w-8 h-8 text-white rounded-r-lg bg-gradient-to-r from-purple-500 bg-purple-400 hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700'>
                            <IconMagnifyingGlass />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">

                {
                    cities?.length > 0
                    ? cities?.slice(0, 15).map((city) => (
                            <CityCard key={city._id} _id={city._id} name={city.name} coverURL={city.coverURL}/>
                    ))
                    : <HandleNotFound />
                }
            </div>
        </>
    )
}

export default CitiesCards