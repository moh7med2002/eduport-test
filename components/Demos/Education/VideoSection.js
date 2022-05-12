import Image from "next/dist/client/image"
import VideosPlay from "../../VideosPlay"
import { useState , useEffect} from "react";
import {FaPlay} from 'react-icons/fa'
export default function VideoeSection(){
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
    },[openVideo])
    return(
        <div className="py-[50px] bg-[#f5f7f9] relative">
            <div className="container xl:px-10 px-2 grid md:grid-cols-2 items-center gap-[30px] lg:gap-[50px]">
                <div>
                    <h2 className="font-bold  text-mainBlack text-[34px] lg:text-[44px] leading-[120%] xl:w-[72%]">
                        Study whenever you want&sbquo; from any place in the world.</h2>
                </div>
                <div className="text-center">
                    <div className="w-fit p-[6px] pb-[0px] bg-[#FFFFFF] rounded-[5px] mx-auto relative z-[1]">
                        <Image src={'/Images/trendeingCourse/7.jpg'} width="600px" height={"340px"} alt=""/>
                        <button className='w-[55px] h-[55px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]
                         absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay className="text-[20px]"/> </button>
                    </div>
                </div>
            </div>
            {openVideo && <VideosPlay clicked={()=>handleVideo('close')}/>}
            <figure className="absolute top-0 right-0 z-[0]">
		            <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
			            <path className="fill-blue" d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"></path>
		            </svg>
	        </figure>
            <figure className="absolute bottom-0 left-0 hidden lg:block">
		        <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
			        <path className="fill-yellow" d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"></path>
		        </svg>
	        </figure>
        </div>
    )
}