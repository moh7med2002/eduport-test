import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation,Autoplay } from "swiper";
import Image from "next/image";

export default function WeOffer(){
    const Data=[
        {
            id:"1-we",
            img:"/Images/abroad/1.jpg",
            title:"Duolingo English Test (DUOLINGO)"
        },
        {
            id:"2-we",
            img:"/Images/abroad/2.jpg",
            title:"Graduate Record Examination (GRE)"
        },
        {
            id:"3-we",
            img:"/Images/abroad/3.jpg",
            title:"Test of English as a Foreign Language (TOEFL)"
        },
        {
            id:"4-we",
            img:"/Images/abroad/2.jpg",
            title:"Graduate Record Examination (GRE)"
        },
        {
            id:"5-we",
            img:"/Images/abroad/4.jpg",
            title:"International English Language Testing System (IELTS)"
        }
    ];

    const myJsx=Data.map(data=>{
        return <SwiperSlide key={data.id}>
            <div className=" text-center">
                <Image src={data.img} alt="" height={"300px"} width="400px" className=" rounded-md"/>
                <h4 className="px-[10px] text-center font-semibold text-[20px] leading-[120%]">{data.title}</h4>
                <button className="bg-red text-[#fff] text-[15px] mt-[10px] px-3 py-[6px] rounded-[4px]">Enquire Now</button>
            </div>
        </SwiperSlide>
    })
    return (
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-8">
                <h3 className="font-bold text-mainBlack text-[32px] sm:text-[42px] text-center mb-[20px]">
                    What We Offer</h3>
                    <Swiper
                
                spaceBetween={20}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                navigation={true}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
            >
                {myJsx}
            </Swiper>
            </div>
        </div>
    )
}