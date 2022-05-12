import Image from 'next/image'
import Link from 'next/link'
import { useState,useRef, useCallback } from 'react'
import AdditionNav from './AdditionNav'
import CategoryNav from './CategoryNav'
import DemosNav from './DemosNav'
import NavbarAccounts from './NavAccounts'
import PagesNav from './PagesNav'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineClose} from 'react-icons/md'
export default function Navbar(){
    
    const [allMenu,setAllMenu]=useState({
        category:false,
        demos:false,
        pages:false,
        accounts:false,
        addition:false
    });

    const showSubMenu=useCallback((name)=>{
        setAllMenu({
                    category:false,
                    demos:false,
                    pages:false,
                    accounts:false,
                    [name]:!allMenu[name]
                });
    },[allMenu])

    const[searchValue,setSearchValue]=useState("");
    const[border,setBorder]=useState(false);
    const[showNav,setShowNav]=useState(false);
    return(
        <div className='h-[75px] fixed top-[0] z-[100] w-[100%] shadow bg-[#ffffff]'>
            <div className='h-[100%]  relative container px-6 xl:px-10'>
                <nav className='h-[100%] flex justify-between items-center gap-[25px]'>
                    <div className='flex-grow xl:flex-grow-0'>
                        <Link href={'/'}><Image src={'/Images/logo.svg'} width="180px" height={"28px"} alt=""/></Link>
                    </div>

                    <div className='xl:hidden relative' onClick={()=>setShowNav(p=>!p)}>
                        <div className="container nav-container">
                            <input className="checkbox" type="checkbox" name="" id="" />
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                        </div> 
                    </div>
                    </div>
                     
                    <div className={`xl:justify-between xl:relative xl:top-0 xl:items-center flex-grow xl:flex absolute top-[100%] ${showNav?"block":'hidden'}
                    left-0 w-[100%] bg-[#fff] z-[40] mainShadow xl:p-[0] p-[0px] xl:shadow-none xl:bg-transparent max-h-[500px] overflow-auto xl:overflow-visible
`}>
                        <CategoryNav showSubMenu={showSubMenu} allMenu={allMenu}/>
                        <div className='flex xl:items-center xl:gap-[30px] xl:flex-row flex-col items-start xl:mt-[0] mt-[10px]'>
                            <DemosNav showSubMenu={showSubMenu} allMenu={allMenu}/>
                            <PagesNav showSubMenu={showSubMenu} allMenu={allMenu}/>
                            <NavbarAccounts showSubMenu={showSubMenu} allMenu={allMenu}/>
                            <AdditionNav showSubMenu={showSubMenu} allMenu={allMenu}/>
                        </div>
                        <div className='xl:p-[0] p-[20px]'>
                            <form tabIndex={0}
                            className={`relative w-[100%] flex justify-between items-center border border-[#dde0e3] rounded-[5px] duration-200
                            px-[10px] ${border?"border-[#066ac9]":"border-[#dde0e3]"}`} onClick={()=>setBorder(true)}>
                                <input type={"text"} className="duration-300 xl:w-[85%] w-[90%]
                                h-[38px] outline-none text-[#404448] bg-transparent" value={searchValue} onBlur={()=>setBorder(false)}
                                 onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search"/>

                                <MdOutlineClose className={`font-bold
                                    text-[18px] text-[#066ac9] cursor-pointer mr-[15px] ${searchValue.length>0?"opacity-1":"opacity-0"}`}
                                     onClick={()=>setSearchValue("")}/>

                                <BiSearch className='
                                text-[#747579] text-[20px] font-bold'/>
                            </form>
                        </div>
                    </div>
                    <div>
                        <Image src={'/Images/student/01.jpg'} width="40px" height={"40px"} className="rounded-[50%]" alt=''/>
                    </div>

                </nav>
            </div>
        </div>
    )
}