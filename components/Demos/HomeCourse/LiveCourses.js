// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Image from "next/image";
import {BsCircleFill} from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import VideosPlay from '../../VideosPlay';
import { useState,useEffect } from 'react';
export default function LiveCourses(){
    const Data=[
        {
            id:"1-live",
            img:"/Images/trendeingCourse/2.jpg",
            title:"Learn the French Language: Complete Course",
            numbers:"1k+"
        },
        {
            id:"2-live",
            img:"/Images/trendeingCourse/7.jpg",
            title:"Learn the French Language: Complete Course",
            numbers:"1k+"
        },
        {
            id:"3-live",
            img:"/Images/trendeingCourse/3.jpg",
            title:"Learn the French Language: Complete Course",
            numbers:"1k+"
        }
    ]

    let[openVideo,setOpenVideo]=useState(false);
    function handleVideo(type){
        if(type==="open"){
            setOpenVideo(true)
        }
        else if(type==="close"){
            setOpenVideo(false)
        }
    }
    useEffect(()=>{
            if(typeof window !=="undefined"){
                if(openVideo){
                    document.body.style.overflow="hidden"
                }
                else{
                    document.body.style.overflow="auto"
                }
            }
    },[openVideo]);
    const DataJsx=Data.map(data=>{
        return <SwiperSlide key={data.id}>
            <div className="w-fit p-[8px] rounded-[8px] bg-[#fff]  ml-[10px]">
                <div className='w-fit relative'>
                    <Image src={data.img} width="560px" height={"400px"} alt="" className="rounded-[6px]"/>
                        <button className='w-[55px] h-[55px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]
                         absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay className="text-[20px]"/> </button>
                    </div>
                <div className="px-[15px]">
                    <h4 className=" text-mainBlack font-bold text-[20px] leading-[120%] my-[10px]">{data.title}</h4>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex gap-[6px] items-center mb-[8px]">
                                <BsCircleFill className="text-green text-[13px]"/> <span className="font-[600] text-mainBlack text-[15px]">Live Students</span></div>
                            <ul className="flex pl-[10px]">
                                <li className=" mr-[-8px]">
                                    <Image src={"/Images/trendeingCourse/n1.jpg"} width="35px" height={"35px"} alt="" className="rounded-[50%]"/></li>
                                <li className=" mr-[-8px] z-[1] w-[35px] h-[35px] rounded-[50%] border-[2px] border-[#fff]">
                                    <Image src={"/Images/trendeingCourse/n4.jpg"} width="35px" height={"35px"} alt="" className="rounded-[50%]"/></li>
                                <li className=" mr-[-8px] z-[2] w-[35px] h-[35px] rounded-[50%] border-[2px] border-[#fff]">
                                    <Image src={"/Images/trendeingCourse/n5.jpg"} width="35px" height={"35px"} alt="" className="rounded-[50%]"/></li>
                                <li className=" mr-[-8px] z-[3] w-[35px] h-[35px] rounded-[50%] border-[2px] border-[#fff]">
                                    <Image src={"/Images/trendeingCourse/n3.jpg"} width="35px" height={"35px"} alt="" className="rounded-[50%]"/></li>
                                <li className="w-[35px] h-[35px] rounded-[50%] text-[#fff] bg-blue flex items-center justify-center mr-[-8px] z-[4] border-[2px] border-[#fff]">
                                    {data.numbers}</li>
                            </ul>
                        </div>
                        <button className="bg-green text-[#fff] w-[90px] h-[35px] rounded text-[14px]">Join now</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    })
    return(
        <div className="py-[50px] bg-[#f5f7f9] overflow-hidden">
            <div className="container xl:px-10 px-2 flex justify-between items-center flex-wrap">
                <div className="lg:w-[33%] md:w-[50%] w-[100%]">
                    <h3 className="text-mainBlack font-bold sm:text-[42px] text-[28px] leading-[120%] mb-[10px]">
                        Today&rsquo;s Top Free Live Courses</h3>
                    <p className="text-second text-[15px] mb-[20px]">
                        How promotion excellent curiosity yet attempted happiness prosperous impression had conviction For 
                        every delay death ask to style Me mean able my by in they Extremity now strangers contained.</p>
                    <button className="w-[180px] h-[40px] bg-orange text-[#fff] rounded-md duration-300 hover:opacity-90">
                        Get premium courses</button>
                </div>
                <div className="md:w-[50%] lg:w-[66%] w-[100%] md:mt-[0] mt-[40px]">
                <Swiper
                
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {DataJsx}
            </Swiper>
                </div>
            </div>
            {openVideo && <VideosPlay clicked={()=>handleVideo('close')}/>}
        </div>
    )
}