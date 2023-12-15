/* The code is a React component called "Cities". It imports necessary dependencies such as useEffect,
useRef, useDispatch, useSelector, and various components. */
/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter_cities, get_cities } from "../store/actions/cityActions.js";
import CityCard from "../components/CityCard/CityCard.jsx";
import IconMagnifyingGlass from '../components/Icons/IconMagnifyingGlass/IconMagnifyingGlass';
import HandleNotFound from "../components/HandleNotFound/HandleNotFound.jsx";

const Cities = () => {

    const cities = useSelector((store) => store.cityReducer.cities);
    const dispatch = useDispatch();
    let inputSearch = useRef();

    useEffect(() => {
        dispatch(get_cities())
    }, [dispatch]);

    /**
     * The handleSearch function dispatches an action to filter cities based on the value of an input
     * field.
     */
    const handleSearch = () => {
        dispatch(filter_cities({
            name: inputSearch.current.value
        }))
    }

    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center bg-blue-100 mt-12">
                <div id="citiesCards">
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

                    {/* TODO crear tarjeta con mayor cantidad de información para las pantallas de mayor resolución */}
                    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
                        {
                            cities?.length > 0
                            ? cities?.map((city) => (
                                <CityCard key={city._id} _id={city._id} name={city.name} coverURL={city.coverURL} />
                            ))
                            : <HandleNotFound />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities