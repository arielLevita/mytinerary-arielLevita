import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Grid } from 'swiper/modules';
import CitiesLinks from '../CitiesLinks/CitiesLinks';

import './Carousel.css'
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {

    const cities = [
        {key: 1, name: 'Agra', coverURL: 'https://i.postimg.cc/t4Pq0qvx/agra.jpg'},
        {key: 2, name: 'Alesund', coverURL: 'https://i.postimg.cc/XvbV4RtD/alesund.jpg'},
        {key: 3, name: 'Athens', coverURL: 'https://i.postimg.cc/k5v74jmM/athens.jpg'},
        {key: 4, name: 'Barcelona', coverURL: 'https://i.postimg.cc/3Rb54Vbh/barcelona.jpg'},
        {key: 5, name: 'Beijing', coverURL: 'https://i.postimg.cc/nrgJ5gv2/beijing.jpg'},
        {key: 6, name: 'Cairo', coverURL: 'https://i.postimg.cc/02hkHMnv/cairo.jpg'},
        {key: 7, name: 'Dubai', coverURL: 'https://i.postimg.cc/908MfLyw/dubai.jpg'},
        {key: 8, name: 'Iguazú', coverURL: 'https://i.postimg.cc/N06jXs1c/iguazu.jpg'},
        {key: 9, name: 'Las vegas', coverURL: 'https://i.postimg.cc/HkGmtGWs/las-vegas.jpg'},
        {key: 10, name: 'London', coverURL: 'https://i.postimg.cc/sDGySfrN/london.jpg'},
        {key: 11, name: 'Moscow', coverURL: 'https://i.postimg.cc/QC9LpmRT/moscow.jpg'},
        {key: 12, name: 'New York', coverURL: 'https://i.postimg.cc/ZqHhZC8C/new-york.jpg'},
        {key: 13, name: 'Paris', coverURL: 'https://i.postimg.cc/FzJqfRLb/paris.jpg'},
        {key: 14, name: 'Petra', coverURL: 'https://i.postimg.cc/NFW3bTcP/petra.jpg'},
        {key: 15, name: 'Pisa', coverURL: 'https://i.postimg.cc/NLqnRc63/pisa.jpg'},
        {key: 16, name: 'Reikiavik', coverURL: 'https://i.postimg.cc/QN2NfK03/reikiavik.jpg'},
        {key: 17, name: 'Rio do Janeiro', coverURL: 'https://i.postimg.cc/x1Yf2rwp/rio-de-janeiro.jpg'},
        {key: 18, name: 'Rome', coverURL: 'https://i.postimg.cc/28nkMjKB/rome.jpg'},
        {key: 19, name: 'Sydeney', coverURL: 'https://i.postimg.cc/wxyT5Q52/sydney.jpg'},
        {key: 20, name: 'Tokio', coverURL: 'https://i.postimg.cc/dVBqQHvs/tokio.jpg'},
    ];

    return (
        <Swiper
            slidesPerView={2}
            navigation
            grid={{
                rows: 2,
            }}
            spaceBetween={0}
            pagination={{
                a11y: true,
                clickable: true,
            }}
            modules={[Navigation, A11y, Grid, Pagination]}
            className="mySwiper h-screen"
        >
            {cities.map((city) => (
                <SwiperSlide key={city.key}>
                    <CitiesLinks name={city.name} coverURL={city.coverURL}/>
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}

export default Carousel