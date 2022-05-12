import CompanySwiper from "../Education/CompanySwiper";
import AcademyJobsSlider from "./AcademyJobSlider";
import AcademyLanding from "./AcademyLanding";
import AcademyPopularCourses from "./AcademyPopularCourses";
import BecomeInstructors from "./BecomeInstructors";
import BestInstructors from "./BestInstructors";

export default function MainAcademy(){
    return(
        <div>
            <AcademyLanding/>
            <AcademyJobsSlider/>
            <AcademyPopularCourses/>
            <BestInstructors/>
            <BecomeInstructors/>
            <CompanySwiper isBlur={false}/>
        </div>
    )
}