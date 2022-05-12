import Image from "next/image"
import {FaUserTie,FaBook,FaUniversity} from 'react-icons/fa'
import {RiTimerFill} from 'react-icons/ri'
export default function FindMore(){
    const myData=[
        {
            id:"1-more",
            icon:FaUserTie,
            title:"Learn with Experts",
            color:"#fd7e14",
            bg:"#fd7e141a",
            description:"In no impression assistance contrasted Manners she wishing justice hastily new anxious At discovery objection we"
        },
        {
            id:"2-more",
            icon:FaBook,
            title:"Learn Anything",
            color:"#17a2b8",
            bg:"#17a2b81a",
            description:"Smile spoke total few great had never their too Amongst moments do in arrived at my replied Fat weddings believed prospect"
        },
        {
            id:"3-more",
            icon:RiTimerFill,
            title:"Flexible Learning",
            color:"#0cbc87",
            bg:"#0cbc871a",
            description:"Denote simple fat denied add worthy little use As some he so high down am week Conduct denied add worthy little use As"
        },
        {
            id:"4-more",
            icon:FaUniversity,
            title:"Industrial Standards",
            color:"#6f42c1",
            bg:"#6f42c11a",
            description:"Pleasure and so read the was hope entire first decided the so must have as on was want up of to traveling so all"
        }
    ];

    const DataJsx=myData.map(data=>{
        return <div key={data.id}>
            <span style={{backgroundColor:data.bg}} className="w-[55px] h-[50px] flex rounded justify-center items-center">
                <data.icon  style={{color:data.color}}/></span>
            <h4 className=" text-mainBlack font-bold text-[20px] mt-[8px]">{data.title}</h4>
            <p className="text-second mb-[8px] pr-[40px]">{data.description}</p>
        </div>
    })
    return(
        <div className="py-[100px]">
            <div className="container xl:px-10 px-2 flex justify-between flex-wrap">
                <div className=" lg:w-[37%] w-[100%]">
                    <h3 className="sm:text-[36px] text-[28px] text-mainBlack font-bold mb-[8px] leading-[120%]">
                        Find Out More About us&sbquo; <span className="text-yellow">Eduport</span> insides.</h3>
                    <Image src={'/Images/findMore.jpg'} width="800px" height={"480px"} className="rounded-[8px]" alt=""/>
                </div>
                <div className="lg:w-[61%] w-[100%] grid sm:grid-cols-2 gap-x-[20px] pt-[20px]">
                    {DataJsx}
                </div>
            </div>
        </div>
    )
}