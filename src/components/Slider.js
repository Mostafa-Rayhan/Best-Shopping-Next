"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {slide} from '../utils/data'
import Image from 'next/image'

const Slider = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        setSliders(slide.sliders);
    }, []);

  return (
    <div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
          
            {sliders.map((slider, index) => (
                <SwiperSlide key={index}>
                    <div>
                        <Image 
                            src={slider.image} 
                            alt={`Slide ${slider.id}`}
                            width={2000}
                            height={2000}
                            className="w-full max-h-[650px] object-cover"
                            layout="responsive"
                        />
                    </div> 
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default Slider