import { useState,useEffect } from "react";
import {ourTrendingCourse} from '../../../data/ourTrending'
import Image from "next/image";
import {FaUserGraduate,FaShoppingCart} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {BsFillCircleFill} from 'react-icons/bs'
export default function FeaturedCourses(){
    const [myData,setMyData]=useState(ourTrendingCourse);
    useEffect(()=>{
        setMyData(ourTrendingCourse);
    },[]);
    const DataJsx=myData.map(data=>{
        return <div key={data.id+"oioi"} className="bg-[#fff] mainShadow rounded-[10px] p-[8px] pb-[15px] relative group">
            <div className="relative ImageBefore rounded-t-[10px] h-fit">
                <Image src={data.img} width="800px" height={"490px"} className=" rounded-t-[10px]" alt=""/>
            </div>
            <div className="px-[20px]">
                <div  className="my-[10px] flex justify-between items-center pb-[10px]">
                    <div className="flex">
                        <div className="flex items-center mr-[12px]">
                            <span className="bg-[#fd7e141a] flex justify-center items-center w-[40px] h-[40px] rounded-[50%] mr-[8px]">
                                <FaUserGraduate className="text-orange text-[14px]"/></span>
                            <span className="text-[14px]">{data.students}</span>
                        </div>
                        <div className="flex items-center ">
                            <span className="bg-[#f7c32e1a] flex justify-center items-center w-[40px] h-[40px] rounded-[50%] mr-[8px]">
                                <AiFillStar className="text-yellow text-[18px]"/></span>
                            <span className="text-[14px]">{data.rate}</span>
                        </div>
                    </div>
                    <Image src={data.img_2} width="40px" height={"40px"} className="rounded-[50%]" alt=""/>
                </div>
                <hr/>
                <h4 className="font-bold text-mainBlack text-[16px] leading-[120%] my-[14px]">{data.title}</h4>
                <div className="flex justify-between items-center">
                    <div className="flex  justify-between items-center text-[13px] font-[600] bg-[#17a2b81a] text-info py-[3px] px-[5px] rounded-[5px]">
                        <BsFillCircleFill className="mr-[5px]"/> {data.jop}</div>
                    <div className="text-green font-bold text-[20px]">{data.salary}</div>
                </div>
            </div>
            <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FFFFFF] absolute top-[30px] right-[30px] z-[2] flex justify-center items-center translate-y-[40px]
             duration-300 opacity-0 group-hover:opacity-[1] group-hover:translate-y-0">
                <FaShoppingCart className="text-[14px] text-red"/>
            </div>
        </div>
    })
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2">
                <h3 className="text-mainBlack font-bold sm:text-[42px] text-[28px] leading-[120%] mb-[10px] text-center">
                    Featured Courses</h3>
                <p className="text-second text-[15px] mb-[20px] text-center">Explore top picks of the week</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                    {DataJsx}
                </div>
            </div>
        </div>
    )
}