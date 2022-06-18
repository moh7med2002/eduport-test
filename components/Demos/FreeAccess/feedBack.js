import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation,Autoplay } from "swiper";
import Image from "next/image";



export default function FeedBack(){
    const info =
    [
        {
            image:'/Images/trendeingCourse/n1.jpg',
            desc:"Make my life easier and organized conviction For every delay in they Extremity now strangers contained breakfast",
            name:'Lori Stevens',
            job:'Backend developer at google',
        },
        {
            image:'/Images/trendeingCourse/n2.jpg',
            desc:"Creating product become fun conviction For every delay in they Extremity now strangers contained breakfast",
            name:'Dennis Barrett',
            job:'Design lead at the agency',
        },
        {
            image:'/Images/trendeingCourse/n3.jpg',
            desc:"Conviction For every delay in they Extremity now strangers contained breakfast",
            name:'Carolyn Ortiz',
            job:'CEO of online shop',
        }
    ];


    const myJsx=info.map((data,index)=>{
        return <SwiperSlide key={index="xak"}>
            <div>
                <p className=" text-second text-[18px] sm:text-xl mb-4">&quot;{data.desc}&quot;</p>
                <div className="flex items-center gap-x-3">
                    <Image src={data.image} alt="" width={"50px"} height="50px" className=" rounded-full"/>
                    <div>
                        <h5 className="text-mainBlack text-[15px] font-bold">{data.name}</h5>
                        <p className="text-second text-[14px]">{data.job}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    })

    return (
        <div className="pb-[50px] pt-[100px]">
            <div className=" container px-2 xl:px-10">
                <h3 className='sm:text-[40px] text-[28px] font-bold text-mainBlack leading-[120%] mb-4 text-center'>
                    What people say about us</h3>
                <p className="text-second leading-[120%] text-[15px] text-center w-[810px] mx-auto max-w-full">
                    Happiness prosperous impression had conviction For every delay in they Extremity now strangers contained breakfast him discourse 
                    additions Sincerity collected contented led now perpetual extremely forfeited</p>

                <div className="mt-10 lg:px-16">
                <Swiper
                
                spaceBetween={10}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
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
                modules={[Navigation,Autoplay]}
                className="mySwiper"
            >
                {myJsx}
            </Swiper>
                </div>
            </div>
        </div>
    )
}