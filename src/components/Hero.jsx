import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from '../assets/img/building.jpg';
import Image2 from '../assets/img/office.jpg';
import Image3 from '../assets/img/office-2.jpg';

// import required modules
import { Navigation, Pagination } from "swiper";

const Hero = () => {
  return (
    <header className="w-screen h-1/2">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}   
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-screen max-h-[600px]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={Image1} className="w-screen h-80 sm:h-[600px] object-cover" />
            <div className="text-white backdrop-brightness-75 w-screen max-w-screen h-full absolute flex flex-col items-center justify-center bottom-0 text-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={Image2} className="w-screen h-80 sm:h-[600px] object-cover" />
            <div className="text-white backdrop-brightness-75 w-screen max-w-screen h-full absolute flex flex-col items-center justify-center bottom-0 text-center">
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={Image3} className="w-screen h-80 sm:h-[600px] object-cover" />
            <div className="text-white backdrop-brightness-75 w-screen max-w-screen h-full absolute flex flex-col items-center justify-center bottom-0 text-center">
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  )
}

export default Hero;