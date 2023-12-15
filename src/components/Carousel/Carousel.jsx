/* The code is a React component called `Carousel` that uses the Swiper library to create a
carousel/slider of cities. */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y, Grid } from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselLinks from '../CarouselLinks/CarouselLinks';
import apiUrl from '../../api';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {

    const [cities, setCities] = useState();

    useEffect(() => {
        axios.get(`${apiUrl}/cities`)
            .then(response => setCities(response.data.cities))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            navigation
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
            spaceBetween={0}
            pagination={{
                a11y: true,
                clickable: true,
            }}
            modules={[Autoplay, Navigation, A11y, Grid, Pagination]}
            className="mySwiper w-full h-48"
        >
            {cities?.slice(0, 12).map((city) => (
                <SwiperSlide key={city._id}>
                    <CarouselLinks name={city.name} coverURL={city.coverURL}/>
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}

export default Carousel