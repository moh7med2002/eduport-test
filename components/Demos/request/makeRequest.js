import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";
import {FaCheckCircle} from 'react-icons/fa'
import Image from "next/image";
export default function MakeRequest(){
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
            <Image src={box.img} width="160px" height={"40px"} alt="" className={`grayscale duration-300 hover:grayscale-0`}/>
        </SwiperSlide>
    })
    return(
        <div className=" py-[50px]">
            <div className=" container px-2 xl:px-10 flex lg:flex-row flex-col gap-8">

                <div className="lg:w-[50%] w-[100%]">
                    <h3 className=' font-bold text-mainBlack leading-[130%] text-[40px] sm:text-[40px] md:text-[46px]'>
                        Request a Demo
                    </h3>
                    <p className=" text-second text-[15px] my-4 leading-[120%]">
                    Let&rsquo;s find out the demo. The 1-hour demo will provide Happiness prosperous impression had conviction For every 
                    delay in their Extremity now, strangers
                    </p>
                    <h4 className=' font-bold text-mainBlack leading-[130%] text-[22px] sm:text-[22px] md:text-[26px] mt-8'>
                    What you will get inside the demo?
                    </h4>
                    <div className='mt-4'>
                        <div className='flex items-center my-3'>
                            <FaCheckCircle className=' text-green'/>
                            <p className='ml-2 text-second text-[15px]'>An overview of the platform and its features</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <FaCheckCircle className=' text-green'/>
                            <p className='ml-2 text-second text-[15px]'>Share few success stories with you</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <FaCheckCircle className=' text-green'/>
                            <p className='ml-2 text-second text-[15px]'>Actionable learning functionality</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <FaCheckCircle className=' text-green'/>
                            <p className='ml-2 text-second text-[15px]'>No communication gap</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <FaCheckCircle className=' text-green'/>
                            <p className='ml-2 text-second text-[15px]'>Better addressable of group level issue</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <FaCheckCircle className=' text-green'/>
                            <p className='ml-2 text-second text-[15px]'>Unlimited access to 5K+ Courses</p>
                        </div>
                    </div>


                    <h5 className=' font-bold text-mainBlack leading-[130%] text-[22px] sm:text-[22px] md:text-[24px] mt-12 mb-5'>
                        Trusted by</h5>
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {MyJsx}
      </Swiper>
                </div>

                <div className="lg:w-[50%] w-[100%]">
                    <form className=' bg-mainBlack px-9 py-6'>
                        <h3 className=' font-bold text-[#ffffff] leading-[130%] text-[22px] sm:text-[22px] md:text-[30px] mt-8 mb-4'>
                            Fill out the form below</h3>
                    <div className='grid  sm:grid-cols-2 gap-[20px] mb-5'>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>First name <span className='text-red'>*</span></label>
                                <input type={"text"} name="firstName" className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66] 
                                focus:outline-none w-[100%] bg-[#ffffff1a]'/>
                            </div>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Last name <span className='text-red'>*</span></label>
                                <input type={"text"} name="lastName"className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66]
                                focus:outline-none w-[100%] bg-[#ffffff1a]'/>
                            </div>
                        </div>

                        <div className='grid  sm:grid-cols-2 gap-[20px] mb-5'>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Email <span className='text-red'>*</span></label>
                                <input type={"text"} name="firstName" className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66] 
                                focus:outline-none w-[100%] bg-[#ffffff1a]'/>
                            </div>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Phone number <span className='text-red'>*</span></label>
                                <input type={"text"} name="lastName"className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66] 
                                focus:outline-none w-[100%] bg-[#ffffff1a]'/>
                            </div>
                        </div>

                        <div className='grid  sm:grid-cols-2 gap-[20px] mb-5'>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>City <span className='text-red'>*</span></label>
                                <input type={"text"} name="firstName" className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66] 
                                focus:outline-none w-[100%] bg-[#ffffff1a]'/>
                            </div>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>First language  <span className='text-red'>*</span></label>
                                <input type={"text"} name="lastName"className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66] 
                                focus:outline-none w-[100%] bg-[#ffffff1a]'/>
                            </div>
                        </div>

                        <div className='mt-[20px]'>
                            <label className='text-second text-[15px] mb-[8px] inline-block'>Additional note(s)</label>
                            <textarea className='border border-[#ffffff1a] rounded px-[10px] py-[7px] focus:border-[#ffffff66]  h-[90px]
                                focus:outline-none w-[100%] bg-[#ffffff1a]'></textarea>
                        </div>

                        <button className='bg-blue inline-block h-[44px] rounded mt-[10px] w-[100%] text-[#ffffff] text-[18px]'>Request a demo</button>
                        <p className=' text-second text-[14px] mt-[10px]'>
                            Field required with <span className='text-red'>*</span> are required to complete the demo request</p>
                    </form>
                </div>
            </div>
        </div>
    )
}