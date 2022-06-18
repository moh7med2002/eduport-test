import {MdKeyboardArrowDown} from 'react-icons/md'
import Link from 'next/link'
import { useState,memo } from 'react';
function DemosNav({showSubMenu,allMenu}){
    console.log("demos");
    const[showDemoNav,setShowDemoNav]=useState(false);
    return(
        <div className=' relative xl:border-none border-y-[1px] border-[#dde0e3] w-[100%] xl:p-[0] py-[12px] px-[20px]'> 
            <button className='flex justify-between items-center gap-[0px] group text-[#747579] font-bold w-[100%]' onClick={()=>showSubMenu("demos")}>
                <span className='group-hover:text-[#066ac9]'>Demos</span>
                <MdKeyboardArrowDown className='group-hover:text-[#066ac9] font-bold text-[20px]'/>
            </button>
            <div className={`xl:absolute xl:top-[100%] xl:left-0 xl:w-[240px] w-[100%] bg-[#fff] mainShadow rounded p-[20px] 
            ${allMenu.demos?"block":"hidden"} mt-[10px]`}>
                <ul>
                    <Link href={"/"}><li className='navItem' onClick={()=>showSubMenu("demos")}>Home Default</li></Link>
                    <Link href={"/Home/education"}><li className='navItem' onClick={()=>showSubMenu("demos")}>Home Education</li></Link>
                    <Link href={"/Home/academy"}><li className='navItem' onClick={()=>showSubMenu("demos")}>Home Academy</li></Link>
                    <Link href={"/Home/course"}><li className='navItem' onClick={()=>showSubMenu("demos")}>Home Course</li></Link>
                    <Link href={"/Home/university"}><li className='navItem' onClick={()=>showSubMenu("demos")}>Home University</li></Link>
                    <Link href={"/Home/kindergarten"}><li className='navItem' onClick={()=>showSubMenu("demos")} >Home Kindergarten</li></Link>
                    <Link href={"/Home/tutor"}><li className='navItem'  onClick={()=>showSubMenu("demos")}>Home Tutor </li></Link>
                    <Link href={"/Home/school"}><li className='navItem flex items-center'>Home School 
                    <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                    ml-[5px] rounded-[4px]'>New</span>
                    </li></Link>
                    <Link href={"/Home/abroad"}><li className='navItem flex items-center'>Home Abroad
                    <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                    ml-[5px] rounded-[4px]'>New</span>
                    </li></Link>
                </ul>
                <hr/>
                <ul className='pt-[10px]'>
                    <Link href={"/Home/request-demo"}><li className='navItem'>Request a demo</li></Link>
                    <Link href={"/Home/book-class"}><li className='navItem'>Book a Class</li></Link>
                    <Link href={"/Home/freeAccess"}><li className='navItem'>Free Access</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default memo(DemosNav);