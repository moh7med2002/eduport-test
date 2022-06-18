import Image from "next/image"
import { useState, useEffect , useRef} from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
export default function BookClass(){
    const firstData=[
        {
            id:"1-nhjn",
            img:"/Images/bookClass/child.svg",
            title:"We care about students",
            description:"Man children rejoiced yet uncommonly his ten who. Yet uncommonly his ten who diminution astonished."
        },
        {
            id:"2-nhjn",
            img:"/Images/bookClass/help.svg",
            title:"Helping struggling students",
            description:"Children rejoiced yet uncommonly his ten who. Yet uncommonly his ten who diminution astonished."
        }
    ];

    const secondData=[
        {
            id:"1-@sj",
            img:"/Images/trendeingCourse/n1.jpg"
        },
        {
            id:"2-@sj",
            img:"/Images/trendeingCourse/n2.jpg"
        },
        {
            id:"3-@sj",
            img:"/Images/trendeingCourse/n3.jpg"
        },
        {
            id:"4-@sj",
            img:"/Images/trendeingCourse/n4.jpg"
        },
        {
            id:"5-@sj",
            img:"/Images/trendeingCourse/n5.jpg"
        },
        {
            id:"6-@sj",
            img:"/Images/trendeingCourse/n6.jpg"
        }
    ];


    const[options,setOptions]=useState([
        {
            text:"Select class",
            isMatch:true
        },
        {
            text:"Business development",
            isMatch:true
        },
        {
            text:"Digital marketing",
            isMatch:true
        },
        {
            text:"Maths",
            isMatch:true
        },
        {
            text:"Science",
            isMatch:true
        },
        {
            text:"Spoken english",
            isMatch:true
        }
    ]);
    const [partOptions,setPartOptions]=useState(["Select class","Business development","Digital marketing","Maths","Science","Spoken english"]);
    const[showSelect,setShowSelect]=useState(false);
    const[selectValue,setSelectValue]=useState("Select class");
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

    return(
        <div className="py-[60px]">
            <div className=" container px-2 xl:px-10 grid lg:grid-cols-2 gap-x-9 gap-y-14">

                <div>
                    <h3 className=' font-bold text-mainBlack leading-[120%] text-[22px] sm:text-[22px] md:text-[28px] mb-6 lg:w-[70%]'>
                    Get awesome experience in an online class with our superior instructor</h3>

                    <div>
                        {
                            firstData.map(da=>{
                                return <div key={da.id} className="flex items-center my-8">
                                    <div className="bg-[#FFFFFF] mainShadow w-[70px] h-[70px] rounded-full mr-[10px] flex items-center justify-center">
                                        <Image src={da.img} width="50px" height={"40px"} alt=""/>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className=' font-[600] text-mainBlack leading-[120%] text-[19px]'>{da.title}</h5>
                                        <p className="text-second text-[15px]">{da.description}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                    <div>

                        <div>
                            <p>Our daily activated student</p>
                            <ul className="flex">
                                {
                                    secondData.map((da,index)=>{
                                        return <li className="mr-[-10px] border border-[#ffffff]" key={index+"oj"}>
                                            <Image src={da.img} width="35px" height={"35px"} alt="" className=" rounded-full"/>
                                        </li>
                                    })
                                }
                                <li className="w-[35px] h-[35px] bg-blue rounded-full ml-[-10px] z-[10] border border-[#ffffff]
                                flex items-center justify-center text-[#fff]">1k+</li>
                            </ul>
                        </div>

                        <div></div>
                    </div>

                </div>

                <div>
                    <form onSubmit={e=>e.preventDefault()} className="bg-[#055aab1a]  rounded-lg px-[20px] sm:px-[35px] py-[30px]">
                    <h3 className=' font-bold text-mainBlack leading-[130%] text-[22px] sm:text-[28px] md:text-[34px] mt-8 mb-4'>
                        Book online class</h3>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Name *</label>
                                <input type={"text"} name="firstName" className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>

                            <div className="mt-[10px]">
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Email *</label>
                                <input type={"text"} name="phone"className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>

                            <div className="mt-[10px]">
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Mobile number *</label>
                                <input type={"text"} name="phone"className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>

                        <div className='mt-[20px]'>
                            <label className='text-second text-[15px] mb-[8px] inline-block w-[100%]'>Select class *</label>
                            <div className='border border-[#dde0e3] rounded px-[0px] pt-[8px] relative bg-[#fff]'>
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


                        <button type='submit' className='bg-blue w-[100%] h-[42px] rounded-[4px] mt-[16px] font-[600] text-[#fff] text-[16px] duration-300 hover:opacity-90 mb-[25px]'>
                            Book a Class</button>
                    </form>
                </div>
            </div>
        </div>
    )
}