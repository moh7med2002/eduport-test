import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
export default function Navbar(){

    const[showNav,setShowNav]=useState(false);
    const handleClick=()=>{
        setShowNav(false)
    }
    return(
        <div className='h-[75px] fixed top-[0] z-[100] w-[100%] shadow bg-[#ffffff]'>
            <div className='h-[100%]  w-full relative container px-6 xl:px-10'>
                <nav className='h-[100%] w-full flex justify-between items-center gap-[25px]'>
                    <div className='flex-grow xl:flex-grow-0'>
                        <Link href={'/'}><Image src={'/Images/logo.svg'} width="180px" height={"28px"} alt=""/></Link>
                    </div>

                    <div className='xl:hidden relative cursor-pointer text-[22px]' onClick={()=>setShowNav(p=>!p)}>
                        {showNav?<AiOutlineClose/>:<AiOutlineMenu/>}
                    </div>
                <div>
                    <ul className={`xl:flex xl:gap-x-2 ${showNav?"flex flex-col":"hidden"} xl:relative absolute top-[76px] left-0 xl:top-0
                    xl:bg-transparent bg-white w-full xl:shadow-none shadow xl:p-0 p-2`}>
                    <Link href={"/"}>
                        <li className='navItem' onClick={()=>handleClick()}>Home</li>
                    </Link>
                    <Link href={"/Home/education"}>
                        <li className='navItem' onClick={()=>handleClick()}>Education</li>
                    </Link>
                    <Link href={"/Home/academy"}>
                        <li className='navItem' onClick={()=>handleClick()}>Academy</li>
                    </Link>
                    <Link href={"/Home/course"}>
                        <li className='navItem' onClick={()=>handleClick()}>Course</li>
                    </Link>
                    <Link href={"/Home/university"}>
                        <li className='navItem' onClick={()=>handleClick()}>University</li>
                    </Link>
                    <Link href={"/Home/kindergarten"}>
                        <li className='navItem' onClick={()=>handleClick()} >Kindergarten</li>
                    </Link>
                    <Link href={"/Home/tutor"}>
                        <li className='navItem'  onClick={()=>handleClick()}>Tutor </li>
                    </Link>
                    <Link href={"/Home/school"}>
                        <li className='navItem' onClick={()=>handleClick()}>School </li>
                    </Link>
                    <Link href={"/Home/abroad"} >
                        <li className='navItem' onClick={()=>handleClick()}>Abroad </li>
                    </Link>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    )
}