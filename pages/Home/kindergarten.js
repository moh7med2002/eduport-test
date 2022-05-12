import CareOf from "../../components/Demos/Kindergarten/CareOf";
import GellaryPhoto from "../../components/Demos/Kindergarten/GellaryPhoto";
import KindergartenLand from "../../components/Demos/Kindergarten/KindergartenLand";
import OfferCourse from "../../components/Demos/Kindergarten/OfferCourse";
import Head from 'next/head';

export default function KindergartenPage(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Kindergarten Page</title>
                <meta name="description" content="Kindergarten page"/>
            </Head>
            <KindergartenLand/>
            <CareOf/>
            <OfferCourse/>
            <GellaryPhoto/>
        </div>
    )
}