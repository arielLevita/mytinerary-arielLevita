/* eslint-disable react-hooks/rules-of-hooks */
import { useParams, Link as Anchor } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const citiesDetails = () => {

    let { id } = useParams()

    const [cities, setCities] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/cities/${id}`)
            .then(response => setCities(response.data.city))
            .catch(error => { console.log(error) })
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center bg-purple-50 mt-12">
            {/* <img src={cities?.coverURL} alt={cities?.name} /> */}

            <div className='w-full h-72 bg-cover bg-center bg-no-repeat flex justify-center items-center relative' style={{backgroundImage: `url(${cities?.coverURL})`}} >
                <div className='absolute w-full h-full bg-black opacity-20'></div>
                <div className='absolute w-full h-full flex justify-center items-center text-center font-bold text-5xl md:text-7xl lg:text-8xl text-shadow'>{cities?.name}</div>
            </div>

            <img src="https://i.postimg.cc/3RNDjW4Q/Under-Construction-Transparent.png" alt="web site under construction" className="max-w-xs aspect-square" />
            <Anchor to='/cities' className='bg-purple-700 shadow-sm font-semibold text-base md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white pt-1.5 md:pb-2 px-3 my-4'> Go back </Anchor>
        </div>
    )
}

export default citiesDetails