import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import API from "../../api/api";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./header.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Header = () => {
    const { showModal, agents } = useContext(AppContext);
    const [sprays, setSprays] = useState([]);

    useEffect(() => {
        const getSprays = async () => {
            const response = await API.fetchBundles();
            setSprays(response.data);
        };
        getSprays();
    }, []);

    return (
        <div className='header'>
            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={5}
                slidesPerView={12}
                onSwiper={(swiper) => (swiper.autoplay.running = true)}
            >
                {sprays.map((spray) => (
                    <SwiperSlide className='swiper__container' key={spray.uuid}>
                        <img src={spray.displayIcon} alt='' width='80%' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='search_button' onClick={showModal}>
                Search
            </button>
        </div>
    );
};

export default Header;
