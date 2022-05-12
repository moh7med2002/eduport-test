import { FaPlay } from "react-icons/fa"
import VideosPlay from "../../VideosPlay"
import { useState, useEffect} from "react";
export default function LandingEducation(){
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
        <div>
            <div className="min-h-[95vh] relative overlay landingEducation  m-[10px] sm:m-[25px] rounded-t-[20px] flex items-center">
            <div className="container xl:px-10 px-2 relative">
                <div className="xl:w-[50%] lg:w-[70%]">
                <div className="w-fit bg-white rounded-[30px] px-[15px] py-[10px] text-[15px] mb-[20px] sm:mx-0 mx-auto text-center sm:text-left">
                    <span className="bg-green text-white text-[14px] px-[6px] py-[3px] rounded-[13px] mr-[5px]">New</span> 
                    One to one video call using web browser
                </div>
                <h2 className="font-bold sm:text-[60px] text-[#fff] pr-[30px] leading-[125%] text-[36px] sm:text-left text-center mb-[15px] sm:mb-0">
                    Start learning from <span className="text-yellow">best institutions</span></h2>
                <p className="text-[#fff] sm:text-left text-center">
                    Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. 
                    Yet no jokes worse her why.</p>

                    <div className='flex  items-center sm:justify-start justify-center sm:flex-row flex-col mt-[20px]'>
                        <button className='text-[#fff] bg-blue w-[120px] h-[40px] rounded-[8px] duration-300 sm:mb-[0] mb-[25px] hover:opacity-80'>
                            Get Started</button>
                        <div className='ml-[20px]'>
                                <div className=' cursor-pointer flex items-center gap-[20px]'>
                                    <button className='w-[40px] h-[40px] bg-[#fff] rounded-[50%] whiteShadow flex justify-center items-center text-[#d6293e]'
                                    onClick={()=>handleVideo('open')}>
                                        <FaPlay/> </button>
                                        <span className='font-[600] text-[14.5px] text-[#fff]' onClick={()=>handleVideo('open')}>Watch video</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure className="absolute bottom-[-65px] left-0 w-[100%] md:block mb-3 z-[9]">
		<svg className="w-full h-[150px] fill-white" viewBox="0 0 500 150" preserveAspectRatio="none">
			<path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
		</svg>
	</figure>
        </div>
         {openVideo && <VideosPlay clicked={()=>handleVideo('close')}/>}
        </div>
    )
}