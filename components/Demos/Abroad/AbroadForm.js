import {FaWhatsapp,FaTty,FaGlobe,FaEnvelope} from 'react-icons/fa'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState, useEffect , useRef} from 'react';
export default function AbroadContact(){
    
    const[options,setOptions]=useState([
        {
            text:"Contact Purpose",
            isMatch:true
        },
        {
            text:"Get In Touch With Our Executive",
            isMatch:true
        },
        {
            text:"GRE",
            isMatch:true
        },
        {
            text:"IETLS",
            isMatch:true
        },
        {
            text:"PTE",
            isMatch:true
        },
        {
            text:"Study In CANADA",
            isMatch:true
        },
        {
            text:"Study In U.K",
            isMatch:true
        }
    ]);
    const [partOptions,setPartOptions]=useState(["Contact Purpose","Get In Touch With Our Executive","GRE","IETLS","PTE","Study In CANADA",'Study In U.K']);
    const[showSelect,setShowSelect]=useState(false);
    const[selectValue,setSelectValue]=useState("Contact Purpose");
    let[selectSearch,setSelectSearch]=useState("");
    
    const input=useRef(null);

    useEffect(()=>{
            if(showSelect===true){
                input.current.focus();
            }
    },[showSelect])

    

    const socilaData=[
        
        {
            id:"2-social",
            key:"WhatsApp number",
            value:"+111 222 333",
            icon:FaWhatsapp,
            bg:"#0cbc87"
        },
        {
            id:"3-social",
            key:"Telephone",
            value:"+555 666 777",
            icon:FaTty,
            bg:"#6f42c1"
        },
        {
            id:"4-social",
            key:"Website",
            value:"http://example.com",
            icon:FaGlobe,
            bg:"#fd7e14"
        }
    ];

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
        <div className="sm:py-[50px] pt-[30px] pb-[50px]">
            <div className=' container xl:px-10 px-2 grid lg:grid-cols-2 items-center gap-[40px]'>
                
                <div>
                    <h3 className='font-bold text-mainBlack text-[24px] sm:text-[40px] leading-[120%] mb-[8px]'>
                    Get in touch with us</h3>
                    <p className=' text-second text-[16px]'>
                    Claim your free 10-minute phone call to see if we are right for your kid.</p>
                    <div className='mt-[50px] grid sm:grid-cols-2 gap-x-[30px] gap-y-[38px] '>
                        {
                            socilaData.map(data=>{
                                return <div key={data.id+"kkhy"} className="bg-[#fff] mainShadow rounded-[8px] px-[20px] py-[20px] relative">
                                    <h5 className='font-bold text-mainBlack'>{data.key}</h5>
                                    <p className='text-mainBlack text-[15px] mt-[8px]'>{data.value}</p>
                                    <span style={{backgroundColor:data.bg}} className="w-[55px] h-[55px] rounded-full flex justify-center items-center
                                    absolute top-[-22px] right-[22px]">
                                        <data.icon className='text-[#fff] text-[22px]'/></span>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div>
                    <form onSubmit={e=>e.preventDefault()} className="bg-[#fff] mainShadow rounded-lg px-[20px] sm:px-[35px] py-[30px]">
                        <div className='grid  sm:grid-cols-2 gap-[20px] mb-5'>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Name *</label>
                                <input type={"text"} name="firstName" className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Phone number *</label>
                                <input type={"text"} name="lastName"className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>
                        </div>

                        <div className='grid  sm:grid-cols-2 gap-[20px]'>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>WhatsApp number *</label>
                                <input type={"text"} name="email"className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>
                            <div>
                                <label className='text-second text-[15px] mb-[8px] inline-block'>Email *</label>
                                <input type={"text"} name="phone"className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue 
                                focus:outline-none w-[100%]'/>
                            </div>
                        </div>

                        <div className='mt-[20px]'>
                            <label className='text-second text-[15px] mb-[8px] inline-block w-[100%]'>Contact Purpose</label>
                            <div className='border border-[#dde0e3] rounded px-[0px] pt-[8px] relative'>
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

                        <div className='mt-[20px]'>
                            <label className='text-second text-[15px] mb-[8px] inline-block'>Message *</label>
                            <textarea className='border border-[#dde0e3] rounded px-[10px] py-[7px] focus:border-blue  h-[90px]
                                focus:outline-none w-[100%]'></textarea>
                        </div>

                        <button type='submit' className='bg-blue w-[140px] h-[42px] rounded-[4px] mt-[10px] text-[#fff] text-[15px] duration-300 hover:opacity-90 mb-[25px]'>
                            Send Inquiry</button>
                    </form>
                </div>

            </div>
        </div>
    )
}