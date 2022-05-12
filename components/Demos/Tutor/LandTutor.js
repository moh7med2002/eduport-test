import {GrLocationPin} from 'react-icons/gr'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Autoplay, Navigation } from "swiper";
export default function LandTutor(){
    const localData=[
        {
            id:"1-tut",
            img:"/Images/trendeingCourse/n1.jpg",
            name:"Jacqueline Miller",
            job:"Student",
            description:"Make my life easier and organized conviction For every delay in they Extremity now strangers contained breakfast"
        },
        {
            id:"2-tut",
            img:"/Images/trendeingCourse/n2.jpg",
            name:"Dennis Barrett",
            job:"Student",
            description:"Creating product become fun conviction For every delay in they Extremity."
        }
    ]

    const DataJsx=localData.map((data)=>{
        return <SwiperSlide key={data.id}>
            <div className='flex items-center gap-[10px]'>
                <div className=''>
                    <Image src={data.img} alt="" width={"64px"} height="64px" className=' rounded-full'/>
                </div>
                <div className='flex-1'>
                    <p className=' text-second text-[15px]'>&quot;{data.description}&quot;</p>
                    <h6 className='font-bold text-mainBlack'>{data.name} <small className=' text-second font-[400]'>({data.job})</small></h6>
                </div>
            </div>
        </SwiperSlide>
    })
    return(
        <div className='py-[50px] overflow-hidden'>
            <div className="container xl:px-10 px-2 ">
                <div className='flex justify-between items-center flex-wrap'>
                <div className='lg:w-[49%] w-[100%] lg:mb-[0] mb-[30px]'>
                    <div className='flex text-mainBlack items-center mb-[12px]'>
                        <GrLocationPin className='text-[20px]'/>
                        <p className='font-bold'>St Joseph, Eugene, Oregon, USA</p>
                    </div>
                    <h2 className='text-mainBlack font-bold leading-[120%] lg:text-[65px] md:text-[44px] text-[28px] mb-[20px]'>
                        Academia tuition classes</h2>
                    <p className='text-second text-[18px] pr-[20px] mb-[15px]'>
                        We are so eager to be working with kids and making a difference in their careers. Being a mentor is what we have always wanted to be.</p>
                <div className='my-[15px]'>
                <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay:1500,
                    disableOnInteraction:false
                }}
                modules={[Autoplay]}
                className="mySwiper"
                >
                {DataJsx}
            </Swiper>
            
                </div>
                    <button className='bg-blue text-[#fff] w-[115px] h-[38px] rounded duration-300 hover:scale-105 mt-[0px]'>Contact me!</button>
                </div>

                <div className='lg:w-[49%] w-[100%]'>
                    <div>
                        <Image src={'/Images/tutor/land.jpg'} alt="" width={"660px"} height="580px" className='rounded-[8px]'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}