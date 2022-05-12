import Link from 'next/link'
import Image from 'next/image'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import { useState , useEffect, memo} from 'react'
import VideosPlay from '../../VideosPlay'
import HomeDefaultFeatures from './Features'
import PopularCourses from './PopularCourses'
import LikeFooter from './LikeFooter'
import TrendingCourses from './TrendingCourses'
import FeedBack from './FeedBack'

function HomeDefault(){
    console.log("home default");
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
        <div className='pt-[50px] overflow-hidden'>
            <div className='container px-2 xl:px-10 '>
            <div className='grid lg:grid-cols-2 items-center gap-[50px]'>
                <div>
                    <h2 className='text-[#24292d] text-[36px] sm:text-[56px] font-bold sm:leading-[63px] leading-[40px] mb-[20px] lg:text-left text-center'>
                        Limitless learning at your <span className='wordBg'>fingertips</span></h2>
                    <p className='text-[#747579] text-[18px] sm:text-[20px] font-normal mb-[20px] lg:text-left text-center'>
                        Online learning and teaching marketplace with 5K+ courses &amp; 10M students. 
                        Taught by experts to help you acquire new skills.</p>
                    <ul className='flex mb-[20px] lg:justify-start justify-center flex-wrap'>
                        <li className='flex items-center mr-[12px]'>
                            <BsFillPatchCheckFill className='mr-[5px]'/> <span className='text-[#747579]'>Learn with experts</span></li>
                        <li className='flex items-center mr-[12px]'>
                            <BsFillPatchCheckFill className='mr-[5px]'/> <span className='text-[#747579]'>Get certificate</span></li>
                        <li className='flex items-center mr-[12px]'>
                            <BsFillPatchCheckFill className='mr-[5px]'/> <span className='text-[#747579]'>Get membership</span></li>
                    </ul>
                    <div className='flex  items-center lg:justify-start justify-center sm:flex-row flex-col'>
                        <button className='text-[#d6293e] bg-[#d6293e1a] w-[130px] h-[50px] rounded-[8px] duration-300 hover:text-[white]
                         hover:bg-[#d6293e] sm:mb-[0] mb-[25px]'>
                            Get Started</button>
                        <div className='ml-[20px]'>
                                <div className=' cursor-pointer flex items-center gap-[20px]'>
                                    <button className='w-[40px] h-[40px] bg-[#066ac9] rounded-[50%] btnBlueShadow flex justify-center items-center text-white'
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay/> </button>
                                        <span className='font-[600] text-[14.5px] text-[#24292d]' onClick={()=>handleVideo('open')}>Watch video</span>
                                </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-center  mx-auto relative px-[40px]'>
                        <div className='ImageBg relative'>
                            <Image src={'/Images/student/07.png'} width={"386px"} height={"603px"} alt=""/>
                        </div>
                        <div className='absolute w-[100%] left-[0%] h-[90%] z-[-1] top-[10%] '></div>
                    </div> 
                </div>
            </div>
            <HomeDefaultFeatures/>
            <PopularCourses/>
            <LikeFooter/>
            <TrendingCourses/>
            </div>
            <FeedBack/>
            {openVideo && <VideosPlay clicked={()=>handleVideo('close')}/>}
        </div>
    )
}
export default memo(HomeDefault);