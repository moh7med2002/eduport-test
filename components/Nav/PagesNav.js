import Link from 'next/link'
import { useState,useEffect,memo } from 'react'
import {FaEllipsisH} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
function PagesNav({showSubMenu,allMenu}){
    console.log("pages");

    const [allLinks,setAllLinks]=useState({
            courses:false,
            about:false,
            authentication:false,
            shop:false,
            help:false
    });

    function changeActive(name){
        setAllLinks({
            courses:false,
            about:false,
            authentication:false,
            shop:false,
            help:false,
            [name]:!allLinks[name]
        })
    }
    useEffect(()=>{
            if(allMenu.pages===false){
                setAllLinks({
                    courses:false,
                    about:false,
                    authentication:false,
                    shop:false,
                    help:false
                })
            }
    },[allMenu.pages])
    return(
        <div className='relative  xl:border-none border-b-[1px] border-[#dde0e3] w-[100%] xl:p-[0] py-[12px] px-[20px]'
        >
            <button className='flex items-center justify-between gap-[0px] group text-[#747579] font-bold w-[100%]' onClick={()=>showSubMenu('pages')}>
                <span className='group-hover:text-[#066ac9]'>Pages</span>
                <MdKeyboardArrowDown className='group-hover:text-[#066ac9]  font-bold text-[20px]'/>
            </button>
            <div className={`xl:absolute xl:top-[100%] xl:left-0 w-[100%] xl:w-[240px] bg-[#fff] mainShadow rounded p-[20px] 
            ${allMenu.pages?"block":"hidden"} mt-[10px]`}>
                <ul>
                    <li className='relative'>
                        <span onClick={()=>changeActive('courses')}
                        className='navItem flex justify-between items-center'>Course <FaEllipsisH className='mr-[10px]'/></span>
                        <ul className={`xl:absolute xl:top-0 xl:left-[110%] xl:w-[240px] w-[100%] bg-[#fff] mainShadow p-[20px] rounded
                        ${allLinks.courses?"block":"hidden"}`}>
                            <ul className='py-[7px]'>
                                <Link href={"/pagess/course/category"}><li className='navItem'>Course Categories</li></Link>
                            </ul>
                            <hr/>
                            <ul className='py-[7px]'>
                                <Link href={"/pagess/course/gridClassic"}><li className='navItem'>Course Grid Classic</li></Link>
                                <Link href={"#"}><li className='navItem'>Course Grid Minimal</li></Link>
                            </ul>
                            <hr/>
                            <ul className='py-[7px]'>
                                <Link href={"#"}><li className='navItem'>Course List Classic</li></Link>
                                <Link href={"#"}><li className='navItem'>Course List Minimal</li></Link>
                            </ul>
                            <hr/>
                            <ul className='py-[7px]'>
                                <Link href={"#"}><li className='navItem'>Course Detail Classic</li></Link>
                                <Link href={"#"}><li className='navItem'>Course Detail Minimal</li></Link>
                                <Link href={"#"}><li className='navItem'>Course Detail Advance</li></Link>
                                <Link href={"#"}><li className='navItem'>Course Full Screen Video</li></Link>
                            </ul>
                        </ul>
                    </li>
                    <li className='relative'>
                        <span onClick={()=>changeActive('about')}
                        className='navItem flex justify-between items-center'>About <FaEllipsisH className='mr-[10px]'/></span>
                        <ul className={`xl:absolute xl:top-0 xl:left-[110%] w-[100%] rounded xl:w-[240px] bg-[#fff] mainShadow p-[20px]
                        ${allLinks.about?"block":"hidden"}`}>
                            <Link href={"#"}><li className='navItem'>About Us</li></Link>
                            <Link href={"#"}><li className='navItem'>Contact Us</li></Link>
                            <Link href={"#"}><li className='navItem'>Blog Grid</li></Link>
                            <Link href={"#"}><li className='navItem'>Blog Massonry</li></Link>
                            <Link href={"#"}><li className='navItem'>Blog Detail</li></Link>
                            <Link href={"#"}><li className='navItem'>Pricing</li></Link>
                        </ul>
                        </li>
                    <Link href={"#"}><li className='navItem'>Instructor List</li></Link>
                    <Link href={"#"}><li className='navItem'>Instructor Single</li></Link>
                    <Link href={"#"}><li className='navItem'>Become an Instructor</li></Link>
                    <Link href={"#"}><li className='navItem flex items-center'>Abroad Single
                    <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                    ml-[5px] rounded-[4px]'>New</span></li></Link>

                    <li className='relative'>
                    <span className='navItem flex justify-between items-center' onClick={()=>changeActive("shop")}>
                    <span className='flex justify-between items-center'> Shop
                    <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                    ml-[5px] rounded-[4px]'>New</span></span>
                    <FaEllipsisH className='mr-[10px]'/>
                    </span>
                    <ul className={`xl:absolute xl:top-0 xl:left-[110%] w-[100%] rounded xl:w-[240px] bg-[#fff] mainShadow p-[20px]
                        ${allLinks.shop?"block":"hidden"}`}>
                        <Link href={"#"}><li className='navItem'>Shop grid</li></Link>
                        <Link href={"#"}><li className='navItem'>Product detail</li></Link>
                    </ul>
                    </li>
                    
                    <li className='relative'>
                    <span className='navItem flex justify-between items-center' onClick={()=>changeActive('help')}>
                    <span className='flex justify-between items-center'> Help
                    <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                    ml-[5px] rounded-[4px]'>New</span></span>
                    <FaEllipsisH className='mr-[10px]'/>
                    </span>
                    <ul className={`xl:absolute xl:top-0 xl:left-[110%] w-[100%] rounded xl:w-[240px] bg-[#fff] mainShadow p-[20px]
                        ${allLinks.help?"block":"hidden"}`}>
                        <Link href={"#"}><li className='navItem'>Help Center</li></Link>
                        <Link href={"#"}><li className='navItem'>Help Center Single</li></Link>
                    </ul>
                    </li>

                    <li className='relative'>
                        <span onClick={()=>changeActive('authentication')}
                        className='navItem flex justify-between items-center'>Authentication <FaEllipsisH className='mr-[10px]'/></span>
                        <ul className={`xl:absolute xl:top-0 rounded xl:left-[110%] xl:w-[240px] w-[100%] bg-[#fff] mainShadow p-[20px]
                        ${allLinks.authentication?"block":"hidden"}`}>
                            <Link href={"#"}><li className='navItem'>Sign In</li></Link>
                            <Link href={"#"}><li className='navItem'>Sign Up</li></Link>
                            <Link href={"#"}><li className='navItem'>Forgot Password</li></Link>
                        </ul>
                        </li>
                    <Link href={"#"}><li className='navItem'>FAQs</li></Link>
                    <Link href={"#"}><li className='navItem'>Error 404</li></Link>
                    <Link href={"#"}><li className='navItem'>Coming Soon</li></Link>
                    <Link href={"#"}><li className='navItem'>Cart</li></Link>
                    <Link href={"#"}><li className='navItem'>Checkout</li></Link>
                    <Link href={"#"}><li className='navItem'>Empty Cart</li></Link>
                    <Link href={"#"}><li className='navItem'>Wishlist</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default memo(PagesNav);