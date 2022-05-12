import { useCallback, useEffect, useState } from "react"
import { popularCourses } from "../../../data/popularData"
import Image from "next/image";
import {AiOutlineHeart,AiFillHeart,AiFillStar,AiOutlineStar,AiOutlineClockCircle} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import{BiTable} from 'react-icons/bi'
import {motion} from 'framer-motion'
export default function PopularCourses(){
    const[wordFilter,setWordFilter]=useState('webdesign');
    const [filteredData,setFilterData]=useState(popularCourses.filter(course=>course.type===wordFilter));

    let FilterJsx=filteredData.map(course=>{
        
        const style={
            color:course.level==="Beginner"?"#0cbc87": course.level==="Intermediate"?"#17a2b8":"#6f42c1",
            backgroundColor:course.level==="Beginner"?"#0cbc871a": course.level==="Intermediate"?"#17a2b81a":"#6f42c11a"
        }

        return <motion.div key={course.id+"moh"} className="bg-white mainShadow rounded-[8px]"  initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.5}}>
                    <Image src={course.img} width="600px" height={"450px"} className=" rounded-t-[8px]" alt=""/>
                    <div className="px-[20px]">
                    <div className="pt-[12px] pb-[15px] min-h-[220px]">
                        <div className="flex justify-between items-center mb-[12px]">
                            <span style={style} className="text-[13px] p-[4px] font-bold rounded-[4px]">{course.level}</span>
                            {course.favuroite?<AiFillHeart className="text-[#dc3545] text-[18px]"/>:<AiOutlineHeart className="text-[18px]"/>}
                        </div>
                        <h3 className=" text-mainBlack font-[600] text-[23px] leading-[30px] mb-[8px]">{course.title}</h3>
                        <p className=" text-second text-[14px] mb-[8px]">{course.detail}</p>
                        <div className="flex  gap-[10px] items-center">
                            {createRate(parseFloat(course.rate))}
                            <span className=" text-second">{course.rate} / 5.0</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="py-[12px] flex justify-between">
                        <p className="flex gap-[5px] items-center text-mainBlack"><AiOutlineClockCircle className="text-[#dc3545] text-[18px]"/> {course.time}</p>
                        <p className="flex gap-[5px] items-center text-mainBlack"><BiTable className="text-[#fd7e14]"/> {course.lectureNumber}  lectures</p>
                    </div>
                    </div>
                </motion.div>
    });
    useEffect(()=>{
        setFilterData(popularCourses.filter(course=>course.type===wordFilter));
    },[wordFilter]);

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
            <h2 className="text-[#24292d] text-[36px] sm:text-[46px] font-bold sm:leading-[63px] leading-[40px] mb-[10px] text-center">
                Most Popular Courses
            </h2>
            <p className="text-center text-second mb-[25px]">
                Choose from hundreds of courses from specialist organizations</p>
            <div className="container px-2 xl:px-10 ">
                <div className="bg-[#066ac91a] p-[20px] rounded-[8px] flex sm:justify-center flex-wrap gap-[10px]">
                    <button className={`text-blue px-[16px] py-[8px] rounded-[5px] sm:mr-12 ${wordFilter==="webdesign"&&"activeBtn"} duration-500`}
                    onClick={()=>setWordFilter('webdesign')}>Web Design</button>
                    <button className={`text-blue px-[16px] py-[8px] rounded-[5px] sm:mr-12 ${wordFilter==="development"&&"activeBtn"} duration-500`}
                    onClick={()=>setWordFilter('development')}>Development</button>
                    <button className={`text-blue px-[16px] py-[8px] rounded-[5px] sm:mr-12 ${wordFilter==="graphicdesign"&&"activeBtn"} duration-500`}
                    onClick={()=>setWordFilter('graphicdesign')}>Graphic Design</button>
                    <button className={`text-blue px-[16px] py-[8px] rounded-[5px] sm:mr-12 ${wordFilter==="marketing"&&"activeBtn"} duration-500`}
                    onClick={()=>setWordFilter('marketing')}>Marketing</button>
                    <button className={`text-blue px-[16px] py-[8px] rounded-[5px] sm:mr-12 ${wordFilter==="finance"&&"activeBtn"} duration-500`}
                    onClick={()=>setWordFilter('finance')}>Finance</button>
                </div>
                <div className="my-[25px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[25px]">
                    {FilterJsx}
                </div>
            </div>
        </div>
    )
}