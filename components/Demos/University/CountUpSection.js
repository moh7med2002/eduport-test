import Image from "next/image"
import { CountUp } from 'use-count-up'
import { useRef, useEffect,  useState } from "react";
export default function CountUpSection(){
    const myDiv= useRef();
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

    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2">
                <div className="bg-yellow xl:h-[200px] relative rounded-[8px] p-[40px]" ref={myDiv}>
                    <div className=" w-fit  absolute bottom-[-6px] left-[40px] xl:block hidden">
                        <Image src={'/Images/Instructors/6.png'} alt="" width={"200px"} height="260px"/>
                    </div>
                    <div className="xl:ml-[300px] grid sm:grid-cols-2 xl:grid-cols-4 gap-[20px]">
                        <div className="">
                            <h4 className="text-[#fff] text-[50px] font-bold text-center">
                                {startCounter?<CountUp isCounting start={0} end={89} duration={3}/>:<span>0</span>}
                            </h4>
                            <span className="font-bold text-mainBlack block w-[100%] text-center">Total Instructors</span>
                        </div>
                        <div className="">
                            <h4 className="text-[#fff] text-[50px] font-bold text-center">
                                {startCounter?<CountUp isCounting start={0} end={12} duration={3}/>:<span>0</span>}
                            </h4>
                            <span className="font-bold text-mainBlack block w-[100%] text-center">Total Campuses</span>
                        </div>
                        <div className="">
                            <h4 className="text-[#fff] text-[50px] font-bold text-center">
                                {startCounter?<><CountUp isCounting start={0} end={180} duration={3}/><span>K</span></>:<span>0K</span>}
                            </h4>
                            <span className="font-bold text-mainBlack block w-[100%] text-center">Students till date</span>
                        </div>
                        <div className="">
                            <h4 className="text-[#fff] text-[50px] font-bold text-center">
                                {startCounter?<><CountUp isCounting start={0} end={23} duration={3}/><span>+</span></>:<span>0+</span>}
                            </h4>
                            <span className="font-bold text-mainBlack block w-[100%] text-center">Types of Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}