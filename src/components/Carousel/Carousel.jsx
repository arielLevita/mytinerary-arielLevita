import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import 'swiper/css';
import 'swiper/css/grid';

const Carousel = () => {

    const [itineraries, setItineraries] = useState();

    useEffect(() => {
        axios.get(`${apiUrl}/itineraries`)
            .then(response => setItineraries(response.data.itineraries))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            lazy= 'true'
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={24}
            modules={[Autoplay, Grid]}
            className="h-60 w-full"
        >
            {itineraries?.sort(() => 0.5 - Math.random()).slice(0, 24).map((itinerary) => (
                <SwiperSlide key={itinerary._id}>
                    <img 
                        src={itinerary.coverURL} 
                        alt={itinerary.name} 
                        loading='lazy' 
                        className='rounded-3xl'
                    />
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}

export default Carousel