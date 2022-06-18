import AchieveGoals from "./AchieveGoals";
import BestMoments from "./BestMoments";
import ClassifySchools from "./ClassifySchool";
import FindOut from "./FindOut";
import LandSchool from "./LandSchool";
import LaestBlogs from "./LatestBlogs";
import Middle from "./Middle";

export default function MainSchool(){
    return <div>
        <LandSchool/>
        <Middle/>
        <ClassifySchools/>
        <AchieveGoals/>
        <FindOut/>
        <BestMoments/>
        <LaestBlogs/>
    </div>
}