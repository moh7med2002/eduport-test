import {BsFillPatchCheckFill} from 'react-icons/bs'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import VideosPlay from '../../../VideosPlay'
import {motion} from 'framer-motion'
import {FaPlay} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
export default function Development(){
    function CreateFooter(){
        return(
            <div className='mt-[8px] px-[15px] flex justify-between pb-[10px] flex-wrap gap-y-[20px] sm:flex-row  flex-col'>
                <div className='flex items-center'>
                    <div className='bg-orange rounded-[6px] w-[52px] h-[48px] flex items-center justify-center mr-[10px]'>
                        <FiShoppingCart className='text-[#fff] text-[22px]'/></div>
                    <div>
                        <span className='block bg-info text-[#fff] text-[14px] rounded-[3px] px-[7px]'>6 months</span>
                        <span  className='block text-mainBlack font-bold text-[21px]'>$134</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-orange rounded-[6px] w-[52px] h-[48px] flex items-center justify-center mr-[10px]'>
                        <FiShoppingCart className='text-[#fff] text-[22px]'/></div>
                    <div>
                        <span className='block bg-info text-[#fff] text-[14px] rounded-[3px] px-[7px]'>12 months</span>
                        <span  className='block text-mainBlack font-bold text-[21px]'>$355</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='bg-orange rounded-[6px] w-[52px] h-[48px] flex items-center justify-center mr-[10px]'>
                        <FiShoppingCart className='text-[#fff] text-[22px]'/></div>
                    <div>
                        <span className='block bg-info text-[#fff] text-[14px] rounded-[3px] px-[7px]'>18 months</span>
                        <span  className='block text-mainBlack font-bold text-[21px]'>$654</span>
                    </div>
                </div>
            </div>
        )
    }

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
        <motion.div  className='grid lg:grid-cols-2 items-center gap-[50px]' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
            <div>
                <h4 className="text-mainBlack font-bold text-[28px] mb-[10px]">Development</h4>
                <p className="text-second text-[15px]">
                    Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. 
                    Offered related so visitors we private removed.
                </p>
                <h6 className="font-bold text-mainBlack mt-[20px] text-[15px]">What you&rsquo;ll learn</h6>
                <ul className='mt-[12px]'>
                    <li className='text-second flex items-center text-[15px] gap-[8px]'>
                        <BsFillPatchCheckFill className='text-green my-[9px]'/> Create responsive, accessible, and beautiful layouts</li>
                    <li  className='text-second flex items-center text-[15px] gap-[8px]'>
                        <BsFillPatchCheckFill className='text-green my-[9px]'/> Course Videos &amp; Readings</li>
                    <li className='text-second flex items-center text-[15px] gap-[8px]'>
                        <BsFillPatchCheckFill className='text-green my-[9px]'/> Manipulate the DOM with vanilla JS</li>
                    <li className='text-second flex items-center text-[15px] gap-[8px]'>
                        <BsFillPatchCheckFill className='text-green my-[9px]'/> Master the command line interface</li>
                    <li className='text-second flex items-center text-[15px] gap-[8px]'>
                        <BsFillPatchCheckFill className='text-green my-[9px]'/> Create your own Node modules</li>
                </ul>
            </div>
            <div>
            <div className='bg-[#fff] p-[10px] w-fit rounded-[8px] mainShadow'>
            <div className='relative'>
                <Image src={'/Images/ArtAndDesign/3.jpg'} width="580px" height={"180px"} alt="" className=' rounded-t-[8px]'/>
                <button className='w-[55px] h-[55px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]
                         absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay className="text-[20px]"/> </button>
            </div>
            {CreateFooter()}
            </div>
            {openVideo&& <VideosPlay clicked={()=>handleVideo('close')}/>}
            </div>
        </motion.div>
    )
}