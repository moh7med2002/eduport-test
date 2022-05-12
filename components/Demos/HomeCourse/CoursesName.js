import {FaTools,FaPhotoVideo,FaLaptop,FaCropAlt,FaBusinessTime, FaMusic,FaPalette} from 'react-icons/fa'
import {RiHeartPulseFill} from 'react-icons/ri'
export default function CoursesName(){
    const Data=[
        {
            id:"1-cN",
            icon:FaTools,
            bg:"#6f42c11a",
            color:"#6f42c1",
            courseName:`Math & Logic`,
            number:"89"
        },
        {
            id:"2-cN",
            icon:RiHeartPulseFill,
            bg:"#d6293e1a",
            color:"#d6293e",
            courseName:"Health & Fitness",
            number:"95"
        },
        {
            id:"3-cN",
            icon:FaPhotoVideo,
            bg:"#0d6dfd1a",
            color:"#0d6efd",
            courseName:"Photography",
            number:"38"
        },
        {
            id:"4-cN",
            icon:FaLaptop,
            bg:"#0cbc871a",
            color:"#0cbc87",
            courseName:"Development",
            number:"105"
        },
        {
            id:"5-cN",
            icon:FaCropAlt,
            bg:"#fd7e141a",
            color:"#fd7e14",
            courseName:"Design",
            number:"72"
        },
        {
            id:"6-cN",
            icon:FaBusinessTime,
            bg:"#066ac91a",
            color:"#066ac9",
            courseName:"Business",
            number:"68"
        },
        {
            id:"7-cN",
            icon:FaMusic,
            bg:"#17a2b81a",
            color:"#17a2b8",
            courseName:"Music",
            number:"51"
        },
        {
            id:"8-cN",
            icon:FaPalette,
            bg:"#f7c32e1a",
            color:"#f7c32e",
            courseName:"Painting",
            number:"69"
        }
    ]
    return(
        <div className='py-[50px]'>
            <div className='container xl:px-10 px-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px]'>
                {
                    Data.map(data=>{
                        return <div key={data.id} className="bg-[#fff] mainShadow rounded-lg p-[16px] flex items-center">
                            <div className='w-[60px] h-[60px] rounded-[50%] flex justify-center items-center mr-[10px]' style={{backgroundColor:data.bg}}>
                                <data.icon className='text-[22px]' style={{color:data.color}}/></div>
                            <div>
                                <h4 className='font-bold text-mainBlack text-[20px] cursor-pointer duration-300 hover:text-blue'>{data.courseName}</h4>
                                <span className='text-second'>{data.number} Courses</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}