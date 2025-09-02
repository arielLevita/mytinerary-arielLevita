/* import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Thumbs } from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import 'swiper/css';
import 'swiper/css/grid';

const Carousel = () => {

    const [itineraries, setItineraries] = useState();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/itineraries`)
            .then(response => setItineraries(response.data.itineraries.sort(() => 0.5 - Math.random()).slice(0, 24)))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='pt-5 overflow-x-hidden'>
            <div className='flex flex-col md:flex-row mb-4'>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-2'>Popular itineraries</h2>
                    <p className='font-semibold text-indigo-700 mb-4'>Find you perfect destination</p>
                </div>

                <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    className='w-full md:w-1/2'
                >
                    {itineraries?.slice(0, -3).map((itinerary) => (
                        <SwiperSlide key={itinerary._id}>
                            <img
                                src={itinerary.coverURL}
                                alt={itinerary.name}
                                loading='lazy'
                                className='rounded-3xl aspect-video'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                lazy='true'
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
                modules={[Autoplay, Grid, Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress={true}
                className="h-60 w-full"
            >
                {itineraries?.map((itinerary) => (
                    <SwiperSlide key={itinerary._id}>
                        <img
                            src={itinerary.coverURLtiny}
                            alt={itinerary.name}
                            loading='lazy'
                            className='rounded-3xl'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel; */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import 'swiper/css';
import 'swiper/css/grid';

const Carousel = () => {

    const [itineraries, setItineraries] = useState();
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        axios.get(`${apiUrl}/itineraries`)
            .then(response => setItineraries(response.data.itineraries.sort(() => 0.5 - Math.random()).slice(0, 12)))
            .catch(err => console.log(err))
    }, []);

    const handleImageLoad = (id) => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
    };

    return (
        <div>
            <div className='mb-6'>
                <h2 className='text-2xl md:text-4xl text-center font-semibold mb-2'>Popular itineraries</h2>
                <p className='font-semibold text-center text-indigo-700 mb-4'>Find you perfect destination</p>
            </div>

            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                lazy='true'
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
                {itineraries?.map((itinerary) => (
                    <SwiperSlide key={itinerary._id}>
                        <div className="relative h-full w-full rounded-3xl overflow-hidden">
                            {/* Image Placeholder (shows while loading) */}
                            {!loadedImages[itinerary._id] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                                    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                            
                            {/* Actual Image */}
                            <img
                                src={itinerary.coverURLtiny}
                                alt={itinerary.name}
                                loading='lazy'
                                className={`rounded-3xl w-full h-full object-cover transition-opacity duration-300 ${
                                    loadedImages[itinerary._id] ? 'opacity-100' : 'opacity-0'
                                }`}
                                onLoad={() => handleImageLoad(itinerary._id)}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel