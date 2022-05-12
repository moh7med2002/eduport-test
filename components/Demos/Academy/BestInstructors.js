import { InstructorsObject } from "../../../data/InstructorsData"
import { useState } from "react"
import Image from "next/image";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import {FaUserGraduate,FaTasks} from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
export default function BestInstructors(){
    const[myData,setData]=useState(InstructorsObject);
    function createRate(rate){
        let arr=[];
        rate=5-rate;
        let rate1=rate%1;
        let rate2=parseInt(rate/1);
        let count= rate1===0?rate2:1+rate2;
        let full=5-count;
        for(let i=0;i<full;i++){
            arr.push(1);
        }
        if(rate1!==0){
            arr.push(0.5);
        }
        for(let i=0;i<rate2;i++){
            arr.push(0);
        }
        const style={
            color:" #f7c32e"
        }
        return <ul className="flex hap-[5px]">
                {arr.map((val,index)=>{
                    return <li key={index+"star"}>
                        {val===1?<AiFillStar style={style} className="text-[16px]"/>
                        :val===0.5?<BsStarHalf style={style} className="text-[14px]"/>:<AiOutlineStar  style={style}  className="text-[16px]"/>}
                        </li>
                })}
        </ul>
    }
    const myJsx=myData.map(data=>{
        return(
            <SwiperSlide key={data.id}>
                <div className="text-center">
                <div className="relative">
                    <Image src={data.img} width="380px" height={"300px"} alt="" className="rounded-[8px]"/>
                    <div className=" absolute bottom-5 right-4 flex justify-end items-center gap-[5px]">
                        <div className="flex items-center text-[#fff] bg-info rounded px-[5px] py-[2px] gap-[6px]">
                            <FaUserGraduate className="text-[12px]"/> <span className="text-[13px]">{data.students}</span>
                        </div>
                        <div className="flex items-center text-[#fff] bg-orange rounded px-[5px] py-[2px] gap-[6px]">
                            <FaTasks className="text-[12px]"/> <span className="text-[13px]">{data.task}</span>
                        </div>
                    </div>
                </div>
                <h4 className="font-bold text-mainBlack text-[20px] mb-[4px]">{data.name}</h4>
                <p className="text-second text-[15px]">{data.job}</p>
                <div className="flex justify-center items-center mt-[8px]">
                    <span className="text-[15px] inline-block mr-[5px]">{data.rate}/5.0</span>
                    {createRate(parseFloat(data.rate))}
                </div>
            </div>
            </SwiperSlide>
        )
    })

    return(
        <div className="py-[50px]">
            <div className=" container xl:px-10 px-2">
                <h3 className="text-mainBlack font-bold sm:text-[42px] text-[28px] leading-[120%] mb-[10px]">
                    Our Best Instructors</h3>
                <p className="text-second text-[15px] mb-[20px]">
                    Boost up your knowledge with industries experts</p>
                    <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                  }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {myJsx}
            </Swiper>
            </div>
        </div>
    )
}