import Accordion from "../../components/Demos/Tutor/Accordion";
import LandTutor from "../../components/Demos/Tutor/LandTutor";
import ServicesTutor from "../../components/Demos/Tutor/Services";
import TutorContact from "../../components/Demos/Tutor/TutorContact";
import Head from 'next/head';

export default function TutorPage(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Tutor Page</title>
                <meta name="description" content="tutor page"/>
            </Head>
            <LandTutor/>
            <ServicesTutor/>
            <TutorContact/>
            <Accordion/>
        </div>
    )
}