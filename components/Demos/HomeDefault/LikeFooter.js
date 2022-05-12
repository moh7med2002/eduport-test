export default function LikeFooter(){
    return(
        <div className="container xl:px-10 px-2">
            <div className=" bg-info rounded-lg p-[30px] sm:px-12 sm:py-12 flex justify-between items-center flex-wrap relative">
                <div className="lg:w-[60%] lg:mb-[0] mb-[25px]">
                    <h4 className="text-[white] font-semibold sm:text-[32px] tracking-[-0.06rem] mb-[12px] leading-9 text-[26px]">
                        Become an Instructor!</h4>
                    <p className="text-[white] text-[14px] sm:text-[16px]">
                        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. 
                        Yet uncommonly his ten who diminution astonished.</p>
                </div>
                <button className="text-[white] border border-white rounded-[4px] w-[200px] p-[8px] duration-300
                hover:text-mainBlack hover:border-yellow hover:bg-yellow">
                    Start Teaching Today</button>
                    <div className=" absolute top-[50%] left-[30px] sm:left-[48px] translate-y-[-50%] opacity-[0.1]">
                        <svg className="w-[141px] h-[141px] fill-[#fff]">
				                <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"></path>
			            </svg>
                    </div>
            </div>
        </div>
    )
}