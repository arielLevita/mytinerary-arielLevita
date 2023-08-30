import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y, Grid } from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselLinks from '../CarouselLinks/CarouselLinks';

import './Carousel.css'
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {

    const [cities, setCities] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/api/cities')
            .then(response => setCities(response.data.cities))
            .catch(err => console.log(err))
    }, []);

    return (
        <Swiper
            slidesPerView={2}
            slidesPerGroup={2}
            navigation
            grid={{
                rows: 2,
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
            className="mySwiper w-full h-auto max-h-screen cHeight"
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