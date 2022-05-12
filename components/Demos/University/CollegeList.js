import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation,Autoplay } from "swiper";
import Image from "next/image";
import { collegeListData } from "../../../data/CollegeList"
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf,BsCheckLg} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'

export default function CollegeList(){
    const myJsx=collegeListData.map(data=>{
        return <SwiperSlide key={data.id}>
            <div className="w-[400px] max-w-[100%] mx-auto border-[1px] border-[#0000001a] rounded-[6px] p-0 pb-[20px]">
                <div className="relative">
                    <Image src={data.img} alt="" width={"400px"} height="300px" className="rounded-t-[6px]"/>
                    <div className="flex justify-between items-center px-[20px] w-[100%] absolute left-0 bottom-[-28px] z-[1]">
                        <div className="bg-[#fff] mainShadow flex justify-center items-center p-[7px] pb-[0] rounded">
                            <Image src={data.uniLogo} alt="" width={"60px"} height="60px"/></div>
                        <div className={`${data.admission?"bg-green":"bg-red"} px-[12px] py-[3px] rounded text-[#fff]`}>
                        Admission {data.admission?"Open":"Closed"}</div>
                    </div>
                </div>
                <div className="mt-[50px] px-[20px] flex justify-between items-center">
                    <span className="bg-mainBlack text-[#fff] rounded text-[13px] px-[6px] py-[2px]">{data.scope}</span>
                    <div className="flex items-center">
                        {createRate(parseFloat(data.rate))}
                        <span className=" inline-block ml-[3px] text-[14px]">({data.rate})</span>
                    </div>
                </div>
                <h4 className="px-[20px] mt-[15px] text-mainBlack font-bold text-[21px] leading-[120%]">{data.title}</h4>
                <div className=" flex items-center px-[20px] mt-[15px] text-second">
                    <ImLocation className="mr-[5px]"/>
                    <p className="text-[16px]">{data.location}</p>
                </div>
                <ul className="mt-[15px] flex items-center px-[20px]">
                    {
                        data.subjects.map((da,index)=>{
                            const check=index===0?false:true;
                            return <li key={data.id+"kwkjn"} className={`text-[15px]  mx-[3px] px-[15px] relative before:w-[5px] before:h-[5px] before:rounded-[50%]
                            before:bg-second before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] ${!check&&"before:hidden"}
                            ${!check&& "pl-[0]"}`}>
                                {da}</li>
                        })
                    }
                </ul>
                <div className="px-[20px] mt-[20px] grid grid-cols-2 justify-between">
                    {
                        data.content.map((da,index)=>{
                            return <div key={index+'hxo'} className="flex items-center mb-[8px]">
                                <BsCheckLg className="text-green text-[15px] mr-[6px]"/>
                                <span className="text-second">{da}</span>
                            </div>
                        })
                    }
                </div>
                <button className="ml-[20px] mt-[10px] w-[120px] h-[40px] rounded-md  bg-[#066ac91a] text-blue duration-300 hover:bg-blue hover:text-[#fff]">
                    View more</button>
            </div>
        </SwiperSlide>
    });

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
            color:" #f7c32e",
            fontSize:"16px"
        }
        return <ul className="flex hap-[5px]">
                {arr.map((val,index)=>{
                    return <li key={index+"star"}>
                        {val===1?<AiFillStar style={style}/>:val===0.5?<BsStarHalf style={style}/>:<AiOutlineStar  style={style}/>}
                        </li>
                })}
        </ul>
    }

    return(
        <div className="py-[50px]">
            <div className=" container xl:px-10 px-2">
                <h2 className="sm:text-[36px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%]  text-center">
                    Top Listed College</h2>
                <p className="text-second text-center text-[16px] mb-[25px]">
                    Perceived end knowledge certainly day sweetness why cordially.</p>

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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
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