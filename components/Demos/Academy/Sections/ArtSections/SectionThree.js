import { useState,useEffect } from 'react'
import Image from 'next/image'
import VideosPlay from '../../../../VideosPlay'
import {motion} from 'framer-motion'
import {FaStarHalfAlt,FaPlay} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
export default function SectionThree(){

    

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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
            <div className='bg-[#fff] p-[10px] w-fit rounded-[8px] mainShadow'>
            <div className='relative'>
                <Image src={'/Images/ArtAndDesign/3.jpg'} width="580px" height={"220px"} alt="" className=' rounded-t-[8px]'/>
                <button className='w-[55px] h-[55px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]
                         absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay className="text-[20px]"/> </button>
            </div>
            <p className='text-second my-[12px]'>
                <span className='text-mainBlack font-[600]'>Note:</span> Before you learning this video you need to first learn Beginner course</p>
            </div>
            {openVideo&& <VideosPlay clicked={()=>handleVideo('close')}/>}
        </motion.div>
    )
}