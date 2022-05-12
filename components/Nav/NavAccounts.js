import {MdKeyboardArrowDown} from 'react-icons/md'
import { useState ,useEffect} from 'react'
import{FaUserTie,FaEllipsisH,FaUserGraduate,FaUserCog,FaEdit,FaMoneyCheckAlt} from'react-icons/fa'
import {AiFillSetting,AiFillFileAdd,AiOutlineLineChart,AiFillStar} from 'react-icons/ai'
import {RiDeleteBinLine,RiDashboardFill} from 'react-icons/ri'
import{BsFillBasketFill,BsFillFileCheckFill,BsFillCartCheckFill,BsListTask} from 'react-icons/bs'
import{MdOutlineQuiz,MdOutlinePayments} from 'react-icons/md'
import Link from 'next/link';
import { memo } from 'react'
function NavbarAccounts({showSubMenu,allMenu}){
    console.log("accounts");
    const [allLinks,setAllLinks]=useState({
        student:false,
        instructor:false
    });
    function handelClick(name){
        setAllLinks({
            student:false,
            instructor:false,
            [name]:!allLinks[name]
        })
    }
        useEffect(()=>{
            if(allMenu.accounts===false){
                setAllLinks({
                    student:false,
                    instructor:false
                })
            }
            },[allMenu.accounts])
    return(
        <div className='relative xl:border-none border-y-[1px] border-[#dde0e3] w-[100%] xl:p-[0] py-[12px] px-[20px]'>
            <button className='flex items-center justify-between w-[100%] gap-[0px] group text-[#747579] font-bold ' onClick={()=>showSubMenu('accounts')}>
                <span className='group-hover:text-[#066ac9]'>Accounts</span>
                <MdKeyboardArrowDown className='group-hover:text-[#066ac9]  font-bold text-[20px]'/>
            </button>
            <div className={`xl:absolute xl:top-[100%] xl:left-0 xl:w-[240px] w-[100%] bg-[#fff] mainShadow rounded p-[20px] ${allMenu.accounts?"block":"hidden"}
            mt-[10px]`}>
                <ul className='py-[10px]'>
                    <li className=' relative'>
                        <span className='flex justify-between items-center navItem' onClick={()=>handelClick("instructor")}>
                            <span className='flex  items-center'><FaUserTie className='mr-[5px]'/> Instructor</span>
                            <FaEllipsisH/>
                        </span>
                        <ul className={`xl:absolute xl:top-0 xl:left-[110%] rounded w-[100%] xl:w-[240px] bg-[#fff] mainShadow p-[20px]
                        ${allLinks.instructor?"block":"hidden"}`}>
                            <Link href={"#"}><li className='navItem flex items-center'><RiDashboardFill  className='mr-[5px]'/> Dashboard</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'><BsFillBasketFill  className='mr-[5px]'/> Courses</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'><AiFillFileAdd  className='mr-[5px]'/> Create Course</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'><BsFillFileCheckFill  className='mr-[5px]'/> Course Added</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'>
                                <span className='flex items-center'><MdOutlineQuiz className='mr-[5px]'/> Quiz</span>
                                <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                                 ml-[10px] rounded-[4px]'>New</span>  
                                </li></Link>

                            <Link href={"#"}><li className='navItem flex items-center'><AiOutlineLineChart className='mr-[5px]'/> Earning</li></Link>
                            <Link href={"#"}>
                                <li className='navItem flex items-center'><FaUserGraduate className='mr-[5px]'/> Students</li>
                            </Link>
                            <Link href={"#"}>
                                <li className='navItem flex items-center'><BsFillCartCheckFill className='mr-[5px]'/> Orders</li>
                            </Link>
                            <Link href={"#"}>
                                <li className='navItem flex items-center'><AiFillStar className='mr-[5px]'/> Reviews</li>
                            </Link>
                            <Link href={"#"}>
                                <li className='navItem flex items-center'><MdOutlinePayments/> Payout</li>
                            </Link>
                        </ul>

                    </li>
                    <Link href={"#"}>
                        <li className='relative'>
                            <span className='flex justify-between items-center navItem' onClick={()=>handelClick("student")}>
                                <span className='flex  items-center'><FaUserGraduate className='mr-[5px]'/> Student</span>
                                <FaEllipsisH/>
                            </span>
                            <ul className={`xl:absolute xl:top-0 xl:left-[110%] w-[100%] rounded xl:w-[240px] bg-[#fff] mainShadow p-[20px]
                        ${allLinks.student?"block":"hidden"}`}>
                            <Link href={"#"}><li className='navItem flex items-center'><RiDashboardFill  className='mr-[5px]'/> Dashboard</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'><BsListTask className='mr-[5px]'/> My Subscriptions</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'><BsFillBasketFill  className='mr-[5px]'/> Courses</li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'>
                                <span className='flex items-center'><BsFillFileCheckFill className='mr-[5px]'/> Course Resume</span>
                                <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                                 ml-[10px] rounded-[4px]'>New</span>  
                                </li></Link>
                                <Link href={"#"}><li className='navItem flex items-center'>
                                <span className='flex items-center'><MdOutlineQuiz className='mr-[5px]'/> Quiz</span>
                                <span className='text-[12px] text-white font-normal bg-[#0cbc87] inline-block w-[40px] text-center
                                 ml-[10px] rounded-[4px]'>New</span>  
                                </li></Link>
                            <Link href={"#"}><li className='navItem flex items-center'><FaMoneyCheckAlt className='mr-[5px]'/> Payment Info</li></Link>
                            <Link href={"#"}>
                                <li className='navItem flex items-center'><BsFillCartCheckFill className='mr-[5px]'/> Wishlist</li>
                            </Link>
                        </ul>
                            </li>
                    </Link>
                    <Link href={"#"}>
                        <li className='navItem'>
                            <span className='flex  items-center'><FaUserCog className='mr-[5px]'/> Admin</span></li>
                    </Link>
                </ul>
                <hr/>
                <ul className='py-[10px]'>
                    <Link href={"#"}>
                        <li className='navItem'>
                            <span className='flex  items-center'><FaEdit className='mr-[5px]'/> Edit Profile</span></li>
                    </Link>
                    <Link href={"#"}>
                        <li className='navItem'>
                            <span className='flex  items-center'><AiFillSetting className='mr-[5px]'/> Settings</span></li>
                    </Link>
                    <Link href={"#"}>
                        <li className='navItem'>
                            <span className='flex  items-center'><RiDeleteBinLine className='mr-[5px]'/> Delete Profile</span></li>
                    </Link>
                </ul>
            </div>
            </div>
    )
}
export default memo(NavbarAccounts);