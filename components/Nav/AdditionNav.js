import {FaEllipsisH,FaCompressArrowsAlt} from 'react-icons/fa'
import{HiOutlineSupport} from 'react-icons/hi'
import{CgArrowsExchange} from 'react-icons/cg'
import {TiDocumentText} from 'react-icons/ti'
import {BsFillCloudDownloadFill} from'react-icons/bs'
import { memo } from 'react'
function AdditionNav({showSubMenu,allMenu}){
    console.log("addition");
    return(
        <div className=" relative xl:border-none border-y-[1px] border-[#dde0e3] w-[100%] xl:p-[0] py-[12px] px-[20px]">
            <button onClick={()=>showSubMenu('addition')} className='flex items-center gap-[0px] group text-[#747579] font-bold group w-[100%]'>
                <FaEllipsisH className='group-hover:text-[#066ac9]'/>
                </button>
            <div className={`xl:absolute xl:top-[100%] xl:left-0 xl:w-[240px] w-[100%] bg-[#fff] mainShadow rounded p-[20px] 
            ${allMenu.addition?"block":"hidden"} mt-[10px]`}>
                <ul className='py-[10px]'>
                    <li className='navItem'>
                        <span className='flex  items-center'>
                        <HiOutlineSupport className='mr-[5px] text-[#f7c32e] text-[20px]'/> Support</span>
                    </li>
                    <li className='navItem'>
                        <span className='flex  items-center'>
                        <TiDocumentText className='mr-[5px] text-[#d6293e] text-[20px]'/> Documentation</span>
                    </li>
                </ul>
                <hr/>
                <ul className='py-[10px]'>
                    <li className='navItem'>
                        <span className='flex  items-center'>
                        <CgArrowsExchange className='mr-[5px] text-[#17a2b8] text-[20px]'/> RTL demo</span>
                    </li>
                    <li className='navItem'>
                        <span className='flex  items-center'>
                            <BsFillCloudDownloadFill className='mr-[5px] text-[#0cbc87] text-[20px]'/> Buy Eduport</span>
                    </li>
                </ul>
                <hr/>
                <ul className='pt-[10px]'>
                <li className='navItem'>
                    <span className='flex  items-center'>
                        <FaCompressArrowsAlt className='mr-[5px] text-[#fd7e14] text-[20px]'/> Components</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default memo(AdditionNav)