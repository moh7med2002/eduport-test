import Image from "next/image"
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {MdOutlineMenuBook} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'
import { useState } from "react"
import { CountUp } from "use-count-up"
export default function AcademyLanding(){
    const[str,setStr]=useState("");
    function deleteString(){
        setStr('');
    }
    return(
        <div>
            <div className="container xl:px-10 px-2 grid lg:grid-cols-2 items-center py-[50px] gap-[50px]">
            <div>
                <span className="text-blue text-[15px] font-[600] bg-[#066ac91a] px-[20px] py-[6px] inline-block rounded-md lg:mb-[20px] mb-[12px]">
                    Get started with Eduport</span>
                <h2 className="text-mainBlack leading-[120%] text-[30px] mt-[20px] md:mt-[0] md:text-[58px] font-bold w-[100%] lg:w-[400px] mb-[12px]">
                    Develop the skillset &amp; your Bright Future</h2>
                <p className="text-second  w-[100%] lg:w-[400px] text-[14px] mb-[20px]">
                    The most reliable online courses and certifications in marketing,
                    information technology, programming, and data science.</p>
                <form className="w-[100%] border lg:w-[500px] flex items-center py-[7px] rounded-md gap-[5px]">
                    <input type={"text"} placeholder="Find your course" className="flex-1 pl-[10px] outline-none" value={str} onChange={(e)=>setStr(e.target.value)}/>
                    {
                        str.length>0&&
                        <span className=" inline-block mr-[10px] cursor-pointer" onClick={deleteString}>
                            <IoMdClose className="text-blue font-bold text-[18px]"/></span>
                    }
                    <span className="w-[50px] h-[40px] bg-blue flex items-center justify-center rounded-[5px] text-white mr-[10px]
                    duration-300 hover:opacity-95 cursor-pointer">
                        <BsSearch className="font-bold text-[20px]"/></span>
                </form>
                <div className="mt-[20px] flex  lg:w-[500px] w-[100%]">
                    <div className="flex gap-[10px] items-center w-[50%]">
                        <div className="bg-[#fd7e171a] w-[55px] h-[55px] rounded-[5px] flex justify-center items-center mr-[5px]">
                            <MdOutlineMenuBook className="text-orange text-[30px]"/></div>
                        <div>
                            <h4 className="text-mainBlack font-bold text-[26px]"><CountUp isCounting start={0} end={600} duration={7}/>+</h4>
                            <p className="text-second text-[15px]">Online Courses</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center w-[50%]">
                        <div className="bg-[#17a2b81a] w-[55px] h-[55px] rounded-[5px] flex justify-center items-center mr-[5px]">
                            <FaUniversity className="text-info text-[30px]"/></div>
                        <div>
                            <h4 className="text-mainBlack font-bold text-[26px]"><CountUp isCounting start={0} end={400} duration={7}/>+</h4>
                            <p className="text-second text-[15px]">Universities</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                <div className="p-[10px] relative ">
                    <div className="bg-yellow h-[200px] sm:h-[300px] absolute bottom-[13px] w-[100%] left-[0%] z-[-1] rounded-[8px]
                    border-[5px] border-[#fff] mainShadow">
                    </div>
                    <Image src={'/Images/academyLand.png'} width="600px" height={"380px"} alt=""/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}