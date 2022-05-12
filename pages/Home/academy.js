import MainAcademy from "../../components/Demos/Academy/MainAcademy";
import Head from "next/head";
export default function AcademyPage(){
    return(
        <div  className="pt-[75px]">
            <Head>
                <title>Home Academy</title>
                <meta name="description" content="academy home page"/>
            </Head>
            <MainAcademy/>
        </div>
    )
}