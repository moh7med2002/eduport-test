import CompanySwiper from "./CompanySwiper";
import Cookies from "./Cookies";
import FindMore from "./FindMore";
import LandingEducation from "./Landing";
import OurTrendingCourses from "./OurTrendingCourses";
import SubscribeEducationHome from "./Subscribe";
import UpComingEvents from "./UpcomingEvents";
import VideoeSection from "./VideoSection";

export default function MainEducation(){
    return(
        <div>
            <LandingEducation/>
            <CompanySwiper isBlur={true}/>
            <FindMore/>
            <OurTrendingCourses/>
            <VideoeSection/>
            <UpComingEvents/>
            <SubscribeEducationHome/>
            <Cookies/>
        </div>
    )
}