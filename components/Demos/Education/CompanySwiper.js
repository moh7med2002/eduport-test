import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";
import Image from "next/image";

export default function CompanySwiper({isBlur}){
    const data=[
        {
            id:"1-img",
            img:"/Images/companys/android.svg"
        },
        {
            id:"2-img",
            img:"/Images/companys/coca-cola.svg"
        },
        {
            id:"3-img",
            img:"/Images/companys/envato.svg"
        },
        {
            id:"4-img",
            img:"/Images/companys/google.svg"
        },
        {
            id:"5-img",
            img:"/Images/companys/linkedin.svg"
        },
        {
            id:"6-img",
            img:"/Images/companys/microsoft.svg"
        },
        {
            id:"7-img",
            img:"/Images/companys/netflix.svg"
        }
    ]

    let MyJsx=data.map(box=>{
        return <SwiperSlide key={box.id}>
            <Image src={box.img} width="160px" height={"40px"} alt="" className={`${isBlur&&'grayscale'} duration-300 hover:grayscale-0`}/>
        </SwiperSlide>
    })
    return(
        <div className={`mt-[60px] container xl:px-10 px-2 ${!isBlur&&"my-[50px]"}`}>
            
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {MyJsx}
      </Swiper>
        </div>
    )
}