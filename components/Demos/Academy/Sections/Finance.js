import {AiFillStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import VideosPlay from '../../../VideosPlay'
import {motion} from 'framer-motion'
import {FaPlay} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
export default function Finance(){
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
        <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
        <div   className='grid lg:grid-cols-2 items-center gap-[50px]'>
            <div>
            <h4  className="text-mainBlack font-bold text-[28px] mb-[10px]">Finance</h4>
            <p className="text-second text-[15px]">
            Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.
            </p>
            <div className='mt-[20px] flex items-center'>
                        <h5 className='text-[38px] text-mainBlack font-bold mr-[10px]'>4.0</h5>
                        <div>
                            <ul className='flex gap-[2px]'>
                                <li className='text-yellow text-[18px]'><AiFillStar/></li>
                                <li className='text-yellow text-[18px]'><AiFillStar/></li>
                                <li className='text-yellow text-[18px]'><AiFillStar/></li>
                                <li className='text-yellow text-[18px]'><AiFillStar/></li>
                                <li className='text-yellow text-[15px]'><FaStarHalfAlt/></li>
                            </ul>
                            <span className='text-second text-[15px]'>Review from our students</span>
                        </div>
                    </div>
            <div className='mt-[12px] flex items-center'>
                <button className='text-[#fff] bg-green w-[90px] h-[35px] rounded-[5px] duration-300 hover:opacity-90 mr-[5px]'>Free Trial</button>
                <button className='text-[#fff] bg-red w-[110px] h-[35px] rounded-[5px] duration-300 hover:opacity-90'>Buy Course</button>
            </div>
            </div>
            <div className='bg-[#fff] p-[10px] w-fit rounded-[8px] mainShadow'>
            <div className='relative'>
                <Image src={'/Images/ArtAndDesign/6.jpg'} width="580px" height={"200px"} alt="" className=' rounded-t-[8px]'/>
                <button className='w-[55px] h-[55px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]
                         absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay className="text-[20px]"/> </button>
            </div>
            </div>
        </div>
        {openVideo&& <VideosPlay clicked={()=>handleVideo('close')}/>}
        </motion.div>
    )
}