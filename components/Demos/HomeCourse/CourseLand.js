import {BsSearch} from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image';
import VideosPlay from '../../VideosPlay';
import { useState,useEffect } from 'react';
import {IoMdClose} from 'react-icons/io'
export default function CourseLand(){
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
    const[str,setStr]=useState("");
    function deleteString(){
        setStr('');
    }
    return(
        <div className='py-[50px] relative overflow-hidden'>
            <div className="container xl:px-10 px-2">
                <div className='lg:w-[80%] mx-auto relative'>
                    <h2 className='text-[#24292d] text-[32px] sm:text-[46px] font-bold leading-[120%] mb-[20px] text-center lg:w-[80%] mx-auto w-[100%]'>
                        Education, talents, and career opportunities. All in one place.</h2>
                    <p className='text-second leading-[120%] text-center lg:w-[80%] mx-auto w-[100%] mb-[20px]'>
                        Get inspired and discover something new today. Grow your skill with the most reliable online courses and 
                        certifications in marketing, information technology, programming, and data science.</p>
                    <form className="max-w-[100%] w-[600px] mx-auto flex items-center py-[7px] rounded-md gap-[5px] bg-white mb-[40px] mainShadow">
                        <input type={"text"} placeholder="Find your course" className="flex-1 pl-[10px] outline-none"
                        value={str} onChange={(e)=>setStr(e.target.value)}/>
                        {
                        str.length>0&&
                        <span className=" inline-block mr-[10px] cursor-pointer" onClick={deleteString}>
                            <IoMdClose className="text-blue font-bold text-[18px]"/></span>
                        }
                    <span className="w-[50px] h-[40px] bg-blue flex items-center justify-center rounded-[5px] text-white mr-[10px]
                    duration-300 hover:opacity-95 cursor-pointer">
                        <BsSearch className="font-bold text-[20px]"/></span>
                </form>
                    <div className='w-fit relative p-[8px] pb-[0] rounded-lg bg-[#fff] mainShadow mx-auto'>
                    <Image src={'/Images/coursePageLand.jpg'} width="820px" height={"330px"} alt=""/>
                        <button className='w-[55px] h-[55px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]
                         absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay className="text-[20px]"/> </button>
                    </div>
                    <figure className="absolute top-0 left-0 hidden md:block">	
					<svg width="22px" height="22px" viewBox="0 0 22 22">
						<polygon className="fill-orange" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "></polygon>
					</svg>
				    </figure>
                    <figure className="absolute top-0 left-[100%] translate-x-[-50%]  hidden md:block">
					<svg width="27px" height="27px">
						<path className="fill-[#6f42c1]" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"></path>
					</svg>
				</figure>
                </div>
            </div>
            {openVideo && <VideosPlay clicked={()=>handleVideo('close')}/>}
            <div className='bg-[#f5f7f9] w-[100%] h-[80%] absolute top-0 left-0 z-[-1]'></div>
        </div>
    )
}