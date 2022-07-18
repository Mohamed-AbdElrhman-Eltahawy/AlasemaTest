import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.scss"
import 'swiper/scss';

export default function Slider() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper"
        >
            <SwiperSlide>أسعار الذهب اليوم في مصر 16 يوليو 2022.>></SwiperSlide>
            <SwiperSlide>البنك الأهلي يضخ 12.34 مليار جنيه ضمن مبادرة التمويل العقاري لـ112.9 ألف عميل.

            </SwiperSlide>
            <SwiperSlide>نيوزلندا: تسجيل أكثر من 9 آلاف إصابة جديدة بكورونا خلال 24 ساعة</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    )
}
