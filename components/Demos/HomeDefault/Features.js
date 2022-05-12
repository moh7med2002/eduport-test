import {RiComputerLine} from 'react-icons/ri'
import {FaUserTie,FaUserGraduate} from 'react-icons/fa'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { useCallback, useEffect,useRef, useState, createRef } from 'react'
import { CountUp } from 'use-count-up'

export default function HomeDefaultFeatures(){
    let [data,setData]=useState([
        {
            id:"1fe",
            icon:RiComputerLine,
            title:"Online Courses",
            number:10,
            desc:"K",
            intila:0,
            color:"#f7c32e",
            bg:"#f7c32e66"
        },
        {
            id:"2fe",
            icon:FaUserTie,
            title:"Expert Tutors",
            number:200,
            desc:"+",
            intila:0,
            color:"#747579",
            bg:"#7475794f"
        },
        {
            id:"3fe",
            icon:FaUserGraduate,
            title:"Online Students",
            number:60,
            desc:"K+",
            intila:0,
            color:"#1d3b53",
            bg:"#6f42c12b"
        },
        {
            id:"4fe",
            icon:BsFillPatchCheckFill,
            title:"Certified Courses",
            number:6,
            desc:"K+",
            intila:0,
            color:"#17a2b8",
            bg:"#17a2b829"
        }
    ]);
    const myDiv= createRef();
    const [startCounter,setCounter]=useState(false);

    useEffect(()=>{
        if(typeof window !== "undefined"){
            window.addEventListener('scroll',handleCounter);
            return()=> window.removeEventListener("scroll",handleCounter);
        }
    },[handleCounter]);

    function handleCounter(){
        if(typeof window!=="undefined"){
            if(myDiv.current){
                if(window.scrollY> (myDiv.current.offsetTop-200)){
                    setCounter(true)
                }
            }
        }
    }
    

    let featuresJsx=data.map(da=>{
        return(
            <div key={da.id} className={`rounded-[5px] px-[10px] py-[30px] flex items-center justify-center h-[110px]`} 
            style={{backgroundColor:da.bg}}>
                <da.icon className={`text-[40px] xl:text-[50px] mr-[15px]`} style={{color:da.color}}/>
                <div>
                    <h3 className='font-bold text-mainBlack text-[22px] my-[0]'>
                        {startCounter?<CountUp isCounting start={0} end={da.number} duration={5}/>:<span>0</span>}
                        <span>{da.desc}</span>
                    </h3>
                    <h5 className='my-[0] text-[14px] font-[600] text-mainBlack'>{da.title}</h5>
                </div>
            </div>
        )
    })
     
    return(
        <div className="py-[50px]">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] xl:px-[40px]' ref={myDiv}>
                {
                    featuresJsx  
                }
            </div>
        </div>
    )
}