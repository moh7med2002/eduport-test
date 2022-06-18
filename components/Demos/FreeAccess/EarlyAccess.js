export default function EarlyAccess(){
    return(
        <div className="py-[50px]">
            <div className="container xl:px-10 px-2">
                <div className="w-[95%] sm:w-[85%] md:w-[80%] mx-auto bg-info px-[20px] sm:px-[40px] py-[50px] rounded-[10px]">
                <div className="w-[100%] xl:w-[66.666%] text-center mx-auto">
                <h3 className="text-[#fff] font-bold text-[28px] sm:text-[38px] leading-[120%] text-center mx-auto mb-[10px]">
                Need early access?</h3>
                <p className="text-[15px] text-[#fff] mb-[30px]">
                    How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me mean able
                </p>
                <form onSubmit={e=>e.preventDefault()} className="bg-[#fff] max-w-full w-[460px] mx-auto rounded-[30px] p-[10px] flex items-center">
                    <input type={"email"} placeholder="Enter your email" className="flex-1 outline-none focus:outline-none"/>
                    <input type={"submit"} value="Request!" className="bg-[#1d3b53] w-[100px] cursor-pointer text-[#fff] p-[8px] rounded-[20px]"/>
                </form>
                </div>
                </div>
            </div>
        </div>
    )
}