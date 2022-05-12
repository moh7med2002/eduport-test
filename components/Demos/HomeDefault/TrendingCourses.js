import {trendingCourses} from '../../../data/trendingData'
import Image from 'next/image'
import {AiFillStar,AiOutlineClockCircle} from 'react-icons/ai'
import {BiTable} from 'react-icons/bi'
import {BsBookmark,BsFillCartFill} from 'react-icons/bs'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";
import { useEffect, useState } from 'react'

export default function TrendingCourses(){
    const[trendingData,setTrendingData]=useState([]);
    
    useEffect(()=>{
        setTrendingData(trendingCourses);
    },[]);

    let swiperJsx=trendingData.map(course=>{
        return(
            <SwiperSlide key={course.id}>
                <div className='rounded-[10px] border border-[#0000001a] group'>
                    <Image src={course.img} width={"650px"} height={"450px"} className=" rounded-t-[10px]" alt=''/>
                    <div className='px-[15px] mb-[12px] mt-[12px] flex items-center justify-between'>
                        <div>
                        <span className="text-[13px] p-[4px] font-[500] rounded-[4px] text-blue bg-[#066ac91a] mr-[10px]">{course.type}</span>
                        <span className="text-[13px] p-[4px] font-[500] rounded-[4px] text-[#fff] bg-[black] mr-[10px]">{course.level}</span>
                        </div>
                        <BsBookmark className='cursor-pointer hover:text-blue'/>
                    </div>
                    <h4 className=" text-mainBlack font-[600] text-[22px] leading-[30px] mb-[8px] px-[15px]">
                        {course.title}</h4>
                    <div className='px-[15px] flex items-center justify-between mb-[0px]'>
                        <div className='flex items-center gap-[5px]'>
                            <span className='flex items-center text-yellow'>{`${course.courseRate}`} <AiFillStar className='text-[20px] ml-[2px]'/></span> 
                            <small className=' text-second'>({course.peoplesRate})</small></div>
                        <div>
                            <span className='text-[15px]'>{course.students}</span> <small className=' text-second'>(Student)</small>
                        </div>
                    </div>
                    <div className="py-[12px] flex  items-center gap-[15px] px-[15px]">
                        <p className="flex gap-[5px] items-center text-mainBlack"><AiOutlineClockCircle className="text-[#dc3545] text-[18px]"/> {course.time}</p>
                        <p className="flex gap-[5px] items-center text-mainBlack"><BiTable className="text-[#fd7e14]"/> {course.lectureNumber}  lectures</p>
                    </div>
                    <hr className='mx-[15px] my-[10px]'/>
                    <div>
                        <div className='px-[15px] py-[10px] flex justify-between items-center'>
                            <div className='flex items-center gap-[5px]'>
                                <Image src={course.teacherImage} width={"40px"} height="40px" alt=''/>
                                <span className='text-base'>{course.teacherName}</span>
                            </div>
                            <div>
                                <span className='text-green font-bold text-[26px] group-hover:hidden duration-300'>
                                    {typeof course.salary==="number" ? "$ "+course.salary:"Free"}</span>
                                <span className='text-[14px] text-green bg-[#0cbc871a]  items-center p-[5px] hidden group-hover:flex duration-300
                                hover:text-[#ffffff] hover:bg-green cursor-pointer rounded'>
                                    <BsFillCartFill className='mr-[5px]'/> <span>Add to cart</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
    return(
        <div className="pb-[50px] pt-[70px]">
            <div className="container xl:px-10 px-2">
                <h2 className="text-[#24292d] text-[36px] sm:text-[46px] font-bold sm:leading-[63px] leading-[40px] mb-[10px] text-center">
                    Our Trending Courses</h2>
                <p className="text-center text-second mb-[25px]">
                    Check out most 🔥 courses in the market</p>

                <Swiper
                
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {swiperJsx}
                </Swiper>
            </div>
        </div>
    )
}