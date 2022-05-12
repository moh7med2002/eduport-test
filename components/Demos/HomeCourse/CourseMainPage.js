import CourseLand from "./CourseLand";
import CoursesName from "./CoursesName";
import FeaturedCourses from "./FeaturedCourses";
import FirstOnline from "./FirstOnline";
import GellaryCourses from "./GellaryCourses";
import GridBox from "./GridBox";
import LiveCourses from "./LiveCourses";

export default function CourseMainPage(){
    return(
        <div>
            <CourseLand/>
            <CoursesName/>
            <FeaturedCourses/>
            <GridBox/>
            <GellaryCourses/>
            <LiveCourses/>
            <FirstOnline/>
        </div>
    )
}