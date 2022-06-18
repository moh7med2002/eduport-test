import Head from 'next/head';
import MainSchool from '../../components/Demos/school/MainSchool';

export default function KindergartenPage(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>School Page</title>
                <meta name="description" content="school page"/>
            </Head>
            <MainSchool/>
        </div>
    )
}