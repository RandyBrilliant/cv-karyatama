import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from '../assets/img/1.jpg';
import Image2 from '../assets/img/2.jpg';
import Image4 from '../assets/img/4.jpg';

// import required modules
import { Navigation, Pagination } from "swiper";

const Hero = () => {
  return (
    <header className="w-screen h-1/2">
      <div className="w-screen h-80 sm:h-[600px] z-10 backdrop-brightness-75 absolute top-0 left-0"></div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-screen max-h-[600px]"
      >
        <SwiperSlide>
        <img src={Image1} className="w-screen h-80 sm:h-[600px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} className="w-screen h-80 sm:h-[600px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} className="w-screen h-80 sm:h-[600px] object-cover"/>
        </SwiperSlide>
      </Swiper>
    </header>
  )
}

export default Hero;