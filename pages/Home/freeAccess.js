import Head from 'next/head'
import CompanyADS from '../../components/Demos/FreeAccess/CompanyADS'
import EarlyAccess from '../../components/Demos/FreeAccess/EarlyAccess'
import FeedBack from '../../components/Demos/FreeAccess/feedBack'
import FreeLand from '../../components/Demos/FreeAccess/FreeLand'
export default function HomeEducation(){
    return(
        <div  className="pt-[75px]">
            <Head>
                <title>Free Access</title>
                <meta name="description" content="free access page"/>
            </Head>
            <FreeLand/>
            <CompanyADS/>
            <FeedBack/>
            <EarlyAccess/>
        </div>
    )
}