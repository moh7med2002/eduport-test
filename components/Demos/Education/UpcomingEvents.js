// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useState } from "react";
import { upComingEventsData } from "../../../data/upComingData";
import Image from "next/dist/client/image";
import {FaMapMarkerAlt} from "react-icons/fa"
import {BiTable} from 'react-icons/bi'
import {BsCircleFill} from 'react-icons/bs'
export default function UpComingEvents(){
    const[myData,setMyData]=useState(upComingEventsData);

    const myJsx=myData.map(data=>{
        return <SwiperSlide key={data.id}>
            <div>
                <div className="relative">
                <Image src={data.img} width="650px" height={"450px"} className="rounded-[10px]" alt=""/>
                <div>
                    {data.date==="Live"?
                    <div className="flex items-center bg-[#fff] rounded-[4px] absolute bottom-[25px] left-[20px] px-[10px] py-[4px] text-green">
                        <BsCircleFill className="text-[15px] mr-[5px]"/> <span className="text-[15px]">{data.date}</span></div>
                    :
                    <div className="flex items-center bg-[#fff] rounded-[4px] absolute bottom-[25px] left-[20px] px-[10px] py-[4px]">
                        <BiTable className="text-[20px] mr-[5px] text-orange"/> <span className="text-[14px] text-mainBlack">{data.date}</span></div>
                    }
                </div>
                </div>
                <h4 className="text-mainBlack font-semibold text-[21px] pl-[5px] pr-[20px] leading-[120%] my-[10px]">
                    {data.title}</h4>
                <div className="px-[5px] flex justify-between items-center mt-[10px]">
                    <div className="flex items-center text-second"><FaMapMarkerAlt className="mr-[7px]"/> {data.location}</div>
                    <button className="bg-[#066ac91a] text-blue text-[14px] w-[88px] h-[32px] rounded-[3px]
                    duration-300 hover:bg-blue hover:text-[#fff] ">Join Now</button>
                </div>
            </div>
        </SwiperSlide>
    })
    return(
        <div className="py-[60px]">
            <div className="container xl:px-10 px-2">
                <h3 className="sm:text-[36px] text-[28px] text-mainBlack font-bold mb-[35px] leading-[120%]">
                    Upcoming <span className="text-yellow">Education</span> Events</h3>
                    <Swiper
                
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                  }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {myJsx}
            </Swiper>
            </div>
        </div>
    )
}