import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation,Autoplay } from "swiper";
import Image from "next/image";
export default function AcademyJobsSlider(){
    const myData=[
        {
            id:"1-job",
            img:"/Images/AcademyJobs/eng.svg",
            title:"Engineer"
        },
        {
            id:"2-job",
            img:"/Images/AcademyJobs/chem.svg",
            title:"Chemistry"
        },
        {
            id:"3-job",
            img:"/Images/AcademyJobs/phys.svg",
            title:"Physics"
        },
        {
            id:"4-job",
            img:"/Images/AcademyJobs/tech.svg",
            title:"Technology"
        },
        {
            id:"5-job",
            img:"/Images/AcademyJobs/heal.svg",
            title:"Health"
        },
        {
            id:"6-job",
            img:"/Images/AcademyJobs/bus.svg",
            title:"Business"
        }
    ]

    const myJsx=myData.map(data=>{
        return(
            <SwiperSlide key={data.id}>
                <div className="flex items-center bg-[#fff] rounded-[6px] px-[20px] py-[10px] justify-center gap-[5px] w-[180px]
                border border-[#0000001a]">
                    <Image src={data.img} width="50px" height={"40px"} alt=""/>
                    <h5 className="font-bold text-mainBlack text-[15px]">{data.title}</h5>
                </div>
            </SwiperSlide>
        )
    })
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2">
            <div className="bg-[#f5f7f9] rounded-lg py-[20px] sm:px-[20px] px-[10px]">
            <Swiper
                
                spaceBetween={20}
                loop={true}
                slidesPerView={2}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
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
        </div>
    )
}