import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { carouselList } from "../utils/data";

const Carousel = () => {
  return (
    <header className="w-screen h-1/2">
      <Swiper
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
        {carouselList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <img src={`../${item.image}`} className="w-screen h-80 sm:h-[600px] object-cover" alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  )
}

export default Carousel;