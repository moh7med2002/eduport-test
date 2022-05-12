import MainUniversityPage from "../../components/Demos/University/MainUniversityPage";
import Head from 'next/head'

export default function HomeUnivversity(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Home University</title>
                <meta name="description" content="home university page"/>
            </Head>
            <MainUniversityPage/>
        </div>
    )
}