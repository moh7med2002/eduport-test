import { useState ,useEffect} from "react";
import {BsUiRadiosGrid} from 'react-icons/bs'
import {FaEllipsisH} from 'react-icons/fa'
import { memo } from "react";
function CategoryNav({showSubMenu,allMenu}){
    console.log("category");
    const [showDevelopmentNav,setDevelopmentNav]=useState(false);
    const [showWebDevelopmentNav,setWebDevelopmentNav]=useState(false);
    useEffect(()=>{
        if(allMenu.category){
                setDevelopmentNav(false);
                setWebDevelopmentNav(false);
        }
    },[allMenu.category])
    return(
        <div className='relative pb-[5px] pt-[10px] px-[20px]'>
                            <button onClick={()=>showSubMenu('category')} 
                            className='p-[15px] capitalize flex items-center gap-2 bg-[#066bc927] w-[100%] h-[50px]  rounded-lg xl:w-[120px] 
                            xl:h-[40px] font-semibold text-base'>
                                <BsUiRadiosGrid className='text-[#066ac9] opacity-[1]'/> 
                                <span className='text-[#066ac9] opacity-[1]'>category</span></button>
                            <div className={` xl:absolute xl:top-[100%] xl:left-0 ${allMenu.category?"block":"hidden"}
                            bg-[#fff] mainShadow rounded-md p-[12px] xl:w-[240px] w-[100%]`}>
                                <ul className='text-[#747579] font-medium mb-[10px]'>
                                    <li className='first-letter:capitalizeduration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer  relative'>
                                        <span className='flex justify-between px-[5px] items-center group' onClick={()=>setDevelopmentNav(pre=>!pre)}>
                                            Development <FaEllipsisH className='mr-[10px] group-hover:text-[#066ac9]'/></span>
                                        {/* sub menu */}
                                        <ul className={`xl:absolute xl:w-[240px] xl:left-[102%] top-0 bg-[#fff] rounded-md p-[10px] 
                                        ${showDevelopmentNav?"block":"hidden"} w-[100%]
                                         capitalize mainShadow`}>
                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579] flex justify-between items-center group relative'>
                                                <span className='flex justify-between items-center group w-[100%]' onClick={()=>setWebDevelopmentNav(pre=>!pre)}>
                                                    web development <FaEllipsisH className='mr-[10px] group-hover:text-[#066ac9]'/></span>
                                                <ul className={`absolute  left-[103%] top-0 bg-[#fff] rounded-md p-[10px] mainShadow
                                                ${showWebDevelopmentNav?"block":"hidden"} xl:w-[200px] text-[#747579]
                                         capitalize`}>
                                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                                        CSS</li>
                                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                                        JavaScript</li>
                                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                                        Angular</li>
                                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                                        PHP</li>
                                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                                        HTML</li>
                                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                                        React</li>
                                                </ul>
                                                </li>


                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579]'>
                                                data science</li>
                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579]'>
                                                mobile development</li>
                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579]'>
                                                programing language</li>
                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579]'>
                                                software testing</li>
                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579]'>
                                                software engineering</li>
                                            <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer text-[#747579]'>
                                                software development tools</li>
                                        </ul>
                                        </li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                        design</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer flex justify-between items-center'>
                                        marketing</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                     cursor-pointer'>
                                        music</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        lifestyle</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        it &amp; software</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        personal development</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        health &amp; fitness</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        teaching</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        social science</li>
                                    <li className='first-letter:capitalize p-[5px] duration-300 hover:text-[#066ac9] hover:bg-[#066bc927] hover:rounded
                                    cursor-pointer'>
                                        math &amp; logic</li>
                                </ul>
                                <hr/>
                                <button className='bg-[#066bc927] text-[#066ac9] p-[10px] w-[100%] rounded mt-[10px] text-left'>
                                    view all categories</button>
                            </div>
                        </div>
    )
}
export default memo(CategoryNav);