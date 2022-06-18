import Head from 'next/head';
import MainAbroad from '../../components/Demos/Abroad/MainAbroad';

export default function KindergartenPage(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Abroad Page</title>
                <meta name="description" content="abroad page"/>
            </Head>
            <MainAbroad/>
        </div>
    )
}