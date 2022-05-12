import MainEducation from "../../components/Demos/Education/MainPage";
import Head from 'next/head'
export default function HomeEducation(){
    return(
        <div  className="pt-[75px]">
            <Head>
                <title>Home Education</title>
                <meta name="description" content="home education page"/>
            </Head>
            <MainEducation/>
        </div>
    )
}