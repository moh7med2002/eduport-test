import CompanySwiper from "../Education/CompanySwiper";
import AboutAbroad from "./AboutAbroad";
import AbroadContact from "./AbroadForm";
import AbroadLand from "./AbroadLand";
import Register from "./Register";
import TopCountry from "./TopCountry";
import WeOffer from "./WeOffer";

export default function MainAbroad(){
    return(
        <div>
            <AbroadLand/>
            <TopCountry/>
            <AboutAbroad/>
            <WeOffer/>
            <CompanySwiper isBlur={true}/>
            <Register/>
            <AbroadContact/>
        </div>
    )
}