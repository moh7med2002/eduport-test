import Image from "next/image"
export default function BoxTwo(){
    return(
        <div style={{backgroundImage:`url(/Images/coursePageLand.jpg)`}} 
        className=" bg-center bg-no-repeat bg-cover rounded-[10px] my-[20px] min-h-[80vh] relative overlay before:rounded-[10px] flex justify-center items-center">
            <div className="relative w-[100%] text-center">
                <Image src="/Images/logo-01.svg" alt="" width={"70px"} height="70px"/>
                <h2 className="text-[#fff] text-center text-[28px] md:text-[56px] font-bold w-[680px] mx-auto max-w-[100%] leading-[120%]">
                    Get new skills for the digital world</h2>
                <p className="text-[#fff] text-center w-[750px] mx-auto max-w-[100%]  text-[16px] p-[10px]">
                    This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, 
                    School, College, University, Courses Hub, Training Center, or any Academy.</p>
                <div className="flex items-center justify-center mt-[20px]">
                    <button className="bg-[#fff] text-mainBlack w-[120px] h-[40px] rounded-[5px] duration-300 hover:scale-110 font-bold">Get Started</button>
                </div>
            </div>
        </div>
    )
}