import Image from "next/image"
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from "react"
export default function Cookies(){
    const[show,setShow]=useState(true);
    function removeCookies(){
        setShow(false);
    }
    return(
        <div>
            
                <AnimatePresence>
                    {show &&
                    <motion.div className="w-[280px]  bg-[#fdfdfe] z-[10000] fixed left-[20px] bottom-[20px] rounded-[10px] py-[20px] px-6 shadow text-center mainShadow max-w-full"
                initial={{x:"-100vw"}} animate={{x:0}} transition={{duration:0.3}} exit={{x:"-100vw", opacity:0,transition: {duration:0.3} }}>
            <Image src={'/Images/27.svg'} width="80px" height={"50px"} alt=""/>
            <p className="text-[939495] mt-[10px] text-[15px]">
                This website stores cookies on your computer. To find out more about the cookies we use,
                see our <span className=" cursor-pointer underline">Privacy Policy</span></p>
            <div className="mt-[10px] flex justify-center gap-[5px]">
                <button className="text-green bg-[#0cbc871a] px-[7px] py-[7px] text-[13px] font-bold rounded-[4px] duration-300 hover:bg-green hover:text-[#fff]" 
                onClick={removeCookies}>Accept</button>
                <button className="text-red bg-[#d6293e1a] px-[7px] py-[7px] text-[13px] font-bold rounded-[4px]  duration-300 hover:bg-red hover:text-[#fff]" 
                onClick={removeCookies}>Decline</button>
            </div>

        </motion.div>
        }
                </AnimatePresence>
            
        </div>
    )
}