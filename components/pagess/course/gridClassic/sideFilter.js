import { useState,useEffect } from "react"
import {MdKeyboardArrowDown} from 'react-icons/md'
export default function SideFilter(){
    const [isMore,setIsMore]=useState(false);
    const [allCategory,setAllCategory]=useState([
        {
            name:"All",
            number:"1256"
        },
        {
            name:"Development",
            number:"365"
        },
        {
            name:"Design",
            number:"156"
        },
        {
            name:"Accounting",
            number:"65"
        },
        {
            name:"Translation",
            number:"245"
        },
        {
            name:"Finance",
            number:"184"
        },
        {
            name:"Legal",
            number:"65"
        },
        {
            name:"Photography",
            number:"99"
        },
        {
            name:"Writing",
            number:"178"
        },
        {
            name:"Marketing",
            number:"104"
        }
    ]);

    const [subCategoty,setSubCategory]=useState([]);
    
    useEffect(()=>{
        setSubCategory(allCategory.slice(0,-2))
    },[]);
    useEffect(()=>{
        if(isMore){
            setSubCategory(allCategory);
        }
        else{
            setSubCategory(allCategory.slice(0,-2));
        }
    },[isMore])
    return(
        <div>

            <form action="#" method="POST" onSubmit={e=>e.preventDefault()}>
                <div className="bg-[#FFFFFF] mainShadow rounded-[6px] px-6 py-5">
                    <h4 className="text-mainBlack font-bold text-[26px] mb-3">Category</h4>
                    <ul>
                        {
                            subCategoty.map((da,index)=>{
                                return (
                                    <li key={index+"cabu"} className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-x-2">
                                            <input type={"checkbox"} className="w-[22px] h-[15px] cursor-pointer border"/>
                                            <span className="text-second">{da.name}</span>
                                        </div>
                                        <span className="text-second text-[14px]">({da.number})</span>
                                    </li>
                                )
                            })
                        }
                        <li className="cursor-pointer flex items-center  text-blue" onClick={()=>setIsMore(!isMore)}>
                            See {isMore?"less":"more"} <MdKeyboardArrowDown className="font-bold text-[20px]"/>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#FFFFFF] mainShadow rounded-[6px] px-6 py-5 mt-6">
                    <h4 className="text-mainBlack font-bold text-[26px] mb-3">Price Level</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-5">
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">All</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">Paid</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">Free</button>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] mainShadow rounded-[6px] px-6 py-5 mt-6">
                    <h4 className="text-mainBlack font-bold text-[26px] mb-3">Skill Level</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-5">
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            All Levels</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Beginner</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Intermediate
                        </button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Advanced
                        </button>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] mainShadow rounded-[6px] px-6 py-5 mt-6">
                    <h4 className="text-mainBlack font-bold text-[26px] mb-3">Language</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-5">
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            English</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Frances</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Hindi
                        </button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Russian
                        </button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Spanish</button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Bengali
                        </button>
                        <button className="bg-[#7475797e] text-mainBlack font-[400] duration-300 hover:bg-[#066ac933] px-4 py-[6px] rounded">
                            Portuguese
                        </button>
                    </div>
                </div>

                <button type="submit" className="w-[100%] bg-blue text-[#fff] rounded mt-5 h-9 font-semibold duration-300 hover:bg-opacity-95">
                    Filter Result</button>
            </form>

        </div>
    )
}