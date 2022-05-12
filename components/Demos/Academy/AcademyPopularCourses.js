import { useState , useEffect} from "react"
import ArtAndDesign from "./Sections/ArtAndDesign";
import Development from "./Sections/Development";
import DataScience from './Sections/DataScience'
import Marketing from './Sections/Marketing'
import Finance from './Sections/Finance'
export default function AcademyPopularCourses(){
    const [sectionName,setSectionName]=useState("art&design");
    const[SectionJsx,setSectionJsx]=useState(<ArtAndDesign/>);
    useEffect(()=>{
        if(sectionName==="art&design"){
            setSectionJsx(<ArtAndDesign/>)
        }
        else if(sectionName==="development"){
            setSectionJsx(<Development/>)
        }
        else if(sectionName==="datascience"){
            setSectionJsx(<DataScience/>)
        }
        else if(sectionName==="datascience"){
            setSectionJsx(<DataScience/>)
        }
        else if(sectionName==="marketing"){
            setSectionJsx(<Marketing/>)
        }
        else if(sectionName==="finance"){
            setSectionJsx(<Finance/>)
        }
    },[sectionName]);

    return(
        <div className="bg-[#f5f7f9] py-[50px]">
            <div className="container xl:px-10 px-2">
                <h3 className="text-mainBlack font-bold sm:text-[42px] text-[28px] leading-[120%] mb-[10px]">
                    Most Popular Courses</h3>
                <p className="text-second text-[15px] mb-[20px]">
                    See what course other students and experts in your domain are learning on.</p>
                <div className="rounded-[8px] flex  flex-wrap lg:gap-x-[35px] md:gap-x-[20px] gap-x-[10px]  gap-y-[15px] mb-[20px]">
                    <button className={`text-blue bg-[#066ac91a] px-[16px] py-[8px] rounded-[5px] ${sectionName==="art&design"&&'choosenSection'}`}
                    onClick={()=>setSectionName("art&design")}>
                        Art &amp; Design</button>
                    <button className={`text-blue bg-[#066ac91a] px-[16px] py-[8px] rounded-[5px]  ${sectionName==="development"&&'choosenSection'}`}
                    onClick={()=>setSectionName('development')}>
                        Development</button>
                    <button className={`text-blue bg-[#066ac91a] px-[16px] py-[8px] rounded-[5px] ${sectionName==="datascience"&&'choosenSection'}`}
                    onClick={()=>setSectionName('datascience')}>
                        Data Science</button>
                    <button className={`text-blue bg-[#066ac91a] px-[16px] py-[8px] rounded-[5px] ${sectionName==="marketing"&&'choosenSection'}`}
                    onClick={()=>setSectionName('marketing')}>
                        Marketing</button>
                    <button className={`text-blue bg-[#066ac91a] px-[16px] py-[8px] rounded-[5px] ${sectionName==="finance"&&'choosenSection'}`}
                    onClick={()=>setSectionName('finance')}>
                        Finance</button>
                </div>
                {SectionJsx}
            </div>
        </div>
    )
}