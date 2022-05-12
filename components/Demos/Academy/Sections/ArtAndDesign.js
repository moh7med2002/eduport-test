import {AiFillStar} from 'react-icons/ai'
import {FaStarHalfAlt,FaPlay} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import VideosPlay from '../../../VideosPlay'
import {motion} from 'framer-motion'
import SectionOne from './ArtSections/SectionOne'
import SectionTwo from './ArtSections/SectionTwo'
import SectionThree from './ArtSections/SectionThree'

export default function ArtAndDesign(){
    
    const[selectedSection,setSection]=useState(<SectionOne/>);
    const [sectionNumber,setSectionNumber]=useState(1);
    

    function changeSection(id){
        if(id===1){
            setSection(<SectionOne/>)
        }
        else if(id===2){
            setSection(<SectionTwo/>)
        }
        else{
            setSection(<SectionThree/>)
        }
        setSectionNumber(id);
    }
    



    return(
        <div>
            <div className='grid lg:grid-cols-2 items-center gap-[50px]'>
                <div>
                    <h4 className="text-mainBlack font-bold text-[28px] mb-[10px]">Art &amp; Design</h4>
                    <p className="text-second text-[15px]">
                    Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. 
                    Handsome met debating sir dwelling age material. 
                    As style lived he worse dried. Offered related so visitors we private removed.</p>
                    <div className="flex gap-[15px] mt-[15px]">
                        <button className={`text-mainBlack bg-[#24292d1a] px-[16px] py-[8px] rounded-[5px] ${sectionNumber===1&&"selectedChildSection"}`}
                        onClick={()=>changeSection(1)}>Art &amp; Design</button>
                        <button className={`text-mainBlack bg-[#24292d1a] px-[16px] py-[8px] rounded-[5px] ${sectionNumber===2&&"selectedChildSection"}`}
                        onClick={()=>changeSection(2)}>Graphic Design</button>
                        <button className={`text-mainBlack bg-[#24292d1a] px-[16px] py-[8px] rounded-[5px]  ${sectionNumber===3&&"selectedChildSection"}`}
                        onClick={()=>changeSection(3)}>Web Design</button>
                    </div>
                    <div className='mt-[20px] flex items-center'>
                        <h5 className='text-[38px] text-mainBlack font-bold mr-[10px]'>4.5</h5>
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
                </div>
                <div>
                    {selectedSection}
                </div>
            </div>,
        </div>
    )
}