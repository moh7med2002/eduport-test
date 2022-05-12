import BoxOne from "./BoxOne";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import BoxTwo from "./BoxTwo";
export default function MainLandSwiper(){
    return(
        <div className="mt-[10px] pb-[50px]">
            <div className="container xl:px-10 px-2">
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><BoxOne/></SwiperSlide>
        <SwiperSlide><BoxTwo/></SwiperSlide>
      </Swiper>
            </div>
        </div>
    )
}