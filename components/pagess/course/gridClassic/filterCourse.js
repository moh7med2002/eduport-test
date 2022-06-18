import {FaSearch} from 'react-icons/fa'
import {AiOutlineHeart,AiFillHeart,AiOutlineClockCircle, AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BiTable} from  'react-icons/bi'
import {BsStarHalf} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown,MdClose} from 'react-icons/md'
import {FaSlidersH,FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import Image from 'next/image'
import { useEffect,useState,useRef } from 'react'
import SideFilter from './sideFilter'
import {motion,AnimatePresence} from 'framer-motion'
export default function GridClassicFilter(){
    const Data=[
        {
            id:15+";;",
            img:"/Images/Courses/1.webp",
            level:"All level",
            title:"Sketch from A to Z: for app designer",
            detail:"Proposal indulged no do sociable he throwing settling.",
            rate:'4.0',
            time:"12h 56m",
            lectureNumber:"15",
            type:"graphicdesign",
            favuroite:false
        },
        {
            id:2+",,",
            img:"/Images/Courses/2.webp",
            level:"Beginner",
            title:"Graphic Design Masterclass",
            detail:"Rooms oh fully taken by worse do Points afraid but may end Rooms",
            rate:'4.5',
            time:"9h 56m",
            lectureNumber:"65",
            type:"webdesign",
            favuroite:true
        },
        {
            id:3+",,",
            img:"/Images/Courses/3.webp",
            level:"Beginner",
            title:"Create a Design System in Figma",
            detail:"Rooms oh fully taken by worse do. Points afraid but may end afraid but",
            rate:'4.5',
            time:"5h 56m",
            lectureNumber:"32",
            type:"webdesign",
            favuroite:false
        },
        {
            id:4+"nj",
            img:"/Images/Courses/4.webp",
            level:"Beginner",
            title:"Deep Learning with React-Native",
            detail:"Far advanced settling say finished raillery. Offered chiefly farther",
            rate:'4.0',
            time:"18h 56m",
            lectureNumber:"99",
            type:"webdesign",
            favuroite:true
        },
        {
            id:5+"ll",
            img:"/Images/Courses/5.webp",
            level:"All level",
            title:"Build Responsive Websites with HTML",
            detail:"Far advanced settling say finished raillery. Offered chiefly farther",
            rate:'4.0',
            time:"15h 30m",
            lectureNumber:"68",
            type:"webdesign",
            favuroite:true
        },
        {
            id:6+"k",
            img:"/Images/Courses/6.webp",
            level:"Beginner",
            title:"Build Websites with CSS",
            detail:"Far advanced settling say finished raillery. Offered chiefly farther",
            rate:'4.5',
            time:"36h 30m",
            lectureNumber:"72",
            type:"webdesign",
            favuroite:false
        },
        {
            id:9+"jsj",
            img:"/Images/Courses/9.webp",
            level:"Beginner",
            title:"The Complete Web Development in python",
            detail:"Far advanced settling say finished raillery. Offered chiefly farther",
            rate:'4.5',
            time:"10h 00m",
            lectureNumber:"26",
            type:"development",
            favuroite:false
        },
        {
            id:10+"ks",
            img:"/Images/Courses/10.webp",
            level:"Intermediate",
            title:"Angular &macr; The Complete Guider",
            detail:"Far advanced settling say finished raillery. Offered chiefly farther",
            rate:'4.5',
            time:"9h 32m",
            lectureNumber:"42",
            type:"development",
            favuroite:false
        },
        {
            id:13+"mjn",
            img:"/Images/Courses/11.webp",
            level:"Intermediate",
            title:"Bootstrap 5 From Scratch",
            detail:"Far advanced settling say finished raillery. Offered chiefly farther",
            rate:'4.5',
            time:"25h 56m",
            lectureNumber:"38",
            type:"development",
            favuroite:true
        },
    ]

    let dataJsx=Data.map(course=>{
        const style={
            color:course.level==="Beginner"?"#0cbc87": course.level==="Intermediate"?"#17a2b8":"#6f42c1",
            backgroundColor:course.level==="Beginner"?"#0cbc871a": course.level==="Intermediate"?"#17a2b81a":"#6f42c11a"
        }

        return <div key={course.id+"moh"} className="bg-white mainShadow rounded-[8px]"  initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.5}}>
                    <Image src={course.img} width="600px" height={"450px"} className=" rounded-t-[8px]" alt=""/>
                    <div className="px-[20px]">
                    <div className="pt-[12px] pb-[15px] min-h-[220px]">
                        <div className="flex justify-between items-center mb-[12px]">
                            <span style={style} className="text-[13px] p-[4px] font-bold rounded-[4px]">{course.level}</span>
                            {course.favuroite?<AiFillHeart className="text-[#dc3545] text-[18px]"/>:<AiOutlineHeart className="text-[18px]"/>}
                        </div>
                        <h3 className=" text-mainBlack font-[600] text-[23px] leading-[30px] mb-[8px]">{course.title}</h3>
                        <p className=" text-second text-[14px] mb-[8px]">{course.detail}</p>
                        <div className="flex  gap-[10px] items-center">
                            {createRate(parseFloat(course.rate))}
                            <span className=" text-second">{course.rate} / 5.0</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="py-[12px] flex justify-between">
                        <p className="flex gap-[5px] items-center text-mainBlack"><AiOutlineClockCircle className="text-[#dc3545] text-[18px]"/> {course.time}</p>
                        <p className="flex gap-[5px] items-center text-mainBlack"><BiTable className="text-[#fd7e14]"/> {course.lectureNumber}  lectures</p>
                    </div>
                    </div>
                </div>
    })
    function createRate(rate){
        let arr=[];
        rate=5-rate;
        let rate1=rate%1;
        let rate2=parseInt(rate/1);
        let count= rate1===0?rate2:1+rate2;
        let full=5-count;
        for(let i=0;i<full;i++){
            arr.push(1);
        }
        if(rate1!==0){
            arr.push(0.5);
        }
        for(let i=0;i<rate2;i++){
            arr.push(0);
        }
        const style={
            color:" #f7c32e",
            fontSize:"16px"
        }
        return <ul className="flex hap-[5px]">
                {arr.map((val,index)=>{
                    return <li key={index+"star"}>
                        {val===1?<AiFillStar style={style}/>:val===0.5?<BsStarHalf style={style}/>:<AiOutlineStar  style={style}/>}
                        </li>
                })}
        </ul>
    }


    const[options,setOptions]=useState([
        {
            text:"Most Viewed",
            isMatch:true
        },
        {
            text:"Most Popular",
            isMatch:true
        },
        {
            text:"Recently Search",
            isMatch:true
        },
        {
            text:"Top Rated",
            isMatch:true
        },
    ]);
    const [partOptions,setPartOptions]=useState(["Most Viewed","Most Popular","Recently Search","Top Rated"]);

    const[showSelect,setShowSelect]=useState(false);
    const[selectValue,setSelectValue]=useState("Most Viewed");
    let[selectSearch,setSelectSearch]=useState("");
    
    const input=useRef(null);

    useEffect(()=>{
            if(showSelect===true){
                input.current.focus();
            }
    },[showSelect])


    function handleShowSelect(type){
        console.log(type);
        if(type==='blur'){
            setShowSelect(false);
        }
        else{
            setShowSelect(p=>!p);
        }
    }

    function handleClick(text){
        setSelectValue(text);
        setShowSelect(p=>!p);
    }

    useEffect(()=>{
        if(selectSearch==="" || selectSearch.trim().length===0){
            setPartOptions(options.map(options=>options.text));
        }
        else{
        let localOptions=[];
        for(let i=0;i<options.length;i++){
            for(let j=0;j<selectSearch.length;j++){
                if(options[i].text.toLowerCase().includes(selectSearch[j])){
                    localOptions.push(options[i].text);
                    break;
                }
            }
        }
        setPartOptions(localOptions);
    }
    },[selectSearch])

    const [showFilter,setShowFilter]=useState(false)
    useEffect(()=>{
        if(typeof window !=="undefined"){
            if(showFilter){
                document.body.style.overflow="hidden"
            }
            else{
                document.body.style.overflow="auto"
            }
        }
},[showFilter])

    return(
        <div className="py-[50px]">
            <div className=" container px-2  xl:px-10 flex justify-between">

            <div className='w-[100%] md:w-[64%] lg:w-[74%]'>

                <div className='mb-8'>
                    <form action='/' method='POST' className='w-[100%] flex flex-wrap justify-between items-center gap-y-4' onSubmit={e=>e.preventDefault()}>
                        <div className='w-[100%] lg:w-[48%] flex justify-between border px-3 py-1 rounded'>
                            <input type={"search"} placeholder="Find your course" className='flex-1 outline-none border-none mr-2'/>
                            <button className='w-[50px] h-[40px] bg-blue rounded flex items-center justify-center text-[#fff]'><FaSearch/></button>
                        </div>

                        <div className='w-[100%] lg:w-[24%]'>
                            <div className='border border-[#dde0e3] rounded px-[0px] pt-[8px] relative bg-[#fff] h-[50px]'>
                                <div className='flex justify-between items-center px-[10px] py-[6px] cursor-pointer' onClick={()=>setShowSelect(p=>!p)}>
                                    <span className='text-[#404448] text-[15px]'>{selectValue}</span> 
                                    <MdOutlineKeyboardArrowDown className='text-[20px] text-second'/></div>
                                <div className={`${showSelect?"block":"hidden"} absolute top-[100%] left-0 z-[30] border border-[#dde0e3] w-[100%] bg-[#fff] rounded`}
                                tabIndex={0} onBlur={()=>setTimeout(()=>setShowSelect(false),300)}>
                                    <input type={"text"} name="choice" className='border-y-[1px] border-[#dde0e3] w-[100%] outline-none px-[6px] py-[7px]'
                                    onChange={(e)=>setSelectSearch(e.target.value)} value={selectSearch} ref={input}/>
                                    <div>
                                    </div>
                                    <>
                                    {
                                        partOptions.length!==0?
                                        partOptions.map((option,id)=>{
                                            return <div key={id+"cmiq"}
                                            className='text-second text-[15px] duration-300 hover:bg-[#056bc91a] cursor-pointer px-[6px] py-[5px] hover:text-blue'
                                            onClick={()=>handleClick(option)}>
                                                {option}</div>
                                        })
                                        :
                                        <div className='text-second px-[5px] py-[3px]'>not found</div>
                                    }
                                    </>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[24%] flex justify-between items-center'>
                            <button className='flex md:hidden items-center justify-center gap-x-2 bg-blue text-white font-bold w-[130px] h-[35px] rounded'
                            onClick={()=>setShowFilter(true)}>
                                <FaSlidersH/> Show filter</button>
                            <label className='inline-block text-second text-[15px]'>Showing 1-7 of 32 result</label>
                        </div>
                    </form>
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7'>
                    {dataJsx}
                </div>

                <div className='flex justify-center mt-6 items-center'>
                    <a href='#' className='w-[40px] h-[40px] rounded bg-[#066ac91a] text-blue flex items-center justify-center mr-2 duration-300 hover:bg-blue hover:text-[#fff]
                    '><FaAngleDoubleLeft/></a>
                    <a href='#' className='w-[40px] h-[40px] rounded bg-[#066ac91a] text-blue flex items-center justify-center mr-2 duration-300 hover:bg-blue hover:text-[#fff]'
                    >1</a>
                    <a href='#' className='w-[40px] h-[40px] rounded bg-blue text-[#fff] flex items-center justify-center mr-2'>2</a>
                    <a href='#' className='w-[40px] h-[40px] rounded bg-[#066ac91a] text-blue flex items-center justify-center mr-2 duration-300 hover:bg-blue hover:text-[#fff]'
                    >..</a>
                    <a href='#' className='w-[40px] h-[40px] rounded bg-[#066ac91a] text-blue flex items-center justify-center mr-2 duration-300 hover:bg-blue hover:text-[#fff]'
                    >6</a>
                    <a href='#' className='w-[40px] h-[40px] rounded bg-[#066ac91a] text-blue flex items-center justify-center mr-2 duration-300 hover:bg-blue hover:text-[#fff]'
                    ><FaAngleDoubleRight/></a>
                </div>

            </div>

            <div className={`md:w-[34%] lg:w-[24%] md:relative fixed top-0  z-[100] md:z-0 h-[100vh]  w-[100%] 
            md:bg-transparent  ${showFilter?"right-0":"md:right-0 right-[-100vw]"} duration-300`}>
                <div className={`md:overflow-visible overflow-auto h-[100vh] md:bg-transparent bg-[#f5f7f9] w-[100%] md:w-[100%] sm:w-[50%] md:p-0 p-6 ml-auto`}>
                    {
                        showFilter&&
                        <div className='flex justify-between items-center mb-4'>
                            <h4 className='text-mainBlack font-bold text-[20px] '>Advanced Filter</h4>
                            <span className=' cursor-pointer'>
                                <MdClose className='text-[24px] text-second duration-200 hover:text-mainBlack' onClick={()=>setShowFilter(false)}/></span>
                        </div>
                    }
                    <SideFilter/>
                </div>
            </div>

            </div>
        </div>
    )
}