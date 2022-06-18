import Image from "next/image"
export default function Middle(){
    return(
        <div className="pb-[50px]">
            <div className=" container px-2 xl:px-10 flex items-center flex-wrap gap-y-[30px]">

                <div className="w-[100%] lg:w-[40%] pr-[30px]">

                    <div className="sm:flex sm:justify-between sm:items-center mb-[30px] pb-[20px] border-b border-[#0000001a]">
                        <div className="sm:flex sm:items-center">
                            <Image src={'/Images/school/medal.svg'} width="80px" height={'80px'} alt=""/>
                            <h6 className="sm:ml-[10px] font-bold text-[20px]">Best school of the year</h6>
                        </div>
                        <h6 className="font-bold text-[20px]">2021</h6>
                    </div>
                    
                    <div  className="sm:flex sm:justify-between sm:items-center">
                        <div className=" sm:flex sm:items-center">
                            <Image src={'/Images/school/medal.svg'} width="80px" height={'80px'} alt=""/>
                            <h6 className="sm:ml-[10px] font-bold text-[20px]">Best discipline school of the year</h6>
                        </div>
                        <h6 className="font-bold text-[20px]">2020</h6>
                    </div>
                </div>

                <div className="w-[100%] lg:w-[60%]">
                    <Image src={'/Images/school/land.jpg'} width="780px" height={'460px'} alt="" className=" rounded-md"/>
                </div>
            </div>
        </div>
    )
}