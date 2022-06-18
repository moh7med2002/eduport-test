import Image from "next/image"
import {FaCheck} from 'react-icons/fa'
export default function AboutAbroad(){
    const Data=[
        {
            id:"1-1",
            title:"Extensive tie-ups",
            description:"Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."
        },
        {
            id:"2-2",
            title:"Committed to your success",
            description:"Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."
        },
        {
            id:"3-3",
            title:"Affordable solutions",
            description:"Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."
        }
    ]
    return(
        <div className="py-[50px]">
            <div className=" container px-2 xl:px-10 pt-[30px] grid lg:grid-cols-2 gap-y-10 items-center">
                
                <div>
                    <h3 className=" text-mainBlack font-bold leading-[120%] text-[30px] sm:text-[36px] md:text-[42px] mb-5">
                        About Eduport Abroad Education</h3>
                    <p className=" text-second text-[15px] leading-[120%] pr-5 mb-5">
                    How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay 
                    death ask to style Me mean able my by in they Extremity now strangers contained.
                    </p>
                    <div className="my-5">
                        {
                            Data.map(data=>{
                                return <div key={data.id} className=" flex flex-col sm:flex-row gap-y-5 mb-[20px]">
                                    <div className="w-[45px] h-[40px] bg-green rounded-[4px] flex items-center justify-center text-[15px] text-[#ffffff] mr-[12px]">
                                        <FaCheck/>
                                    </div>
                                    <div className=" flex-1">
                                        <h5 className="text-mainBlack font-bold leading-[120%] text-[22px] mb-2">{data.title}</h5>
                                        <p className=" text-second text-[15px] leading-[120%] pr-5 ">{data.description}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <button className=" bg-mainBlack text-[#FFFFFF] w-[110px] h-[40px] rounded-md mt-[10px]">Read More</button>
                </div>

                <div>
                    <Image src={'/Images/abroad/24.jpg'} alt="" width={"610px"} height="720px" className=" rounded-lg"/>
                </div>

            </div>
        </div>
    )
}