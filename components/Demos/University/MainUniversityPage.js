import CollegeList from "./CollegeList";
import CountUpSection from "./CountUpSection";
import MainLandSwiper from "./LandSwiper/MainLand";
import LatestNews from "./LatestNews";
import WelcomeWBS from "./WelcomeWBS";

export default function MainUniversityPage(){
    return(
        <div>
            <MainLandSwiper/>
            <WelcomeWBS/>
            <CollegeList/>
            <CountUpSection/>
            <LatestNews/>
        </div>
    )
}