import Head from 'next/head'
import MakeRequest from '../../components/Demos/request/makeRequest'


export default function RequestDemo(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Make Request</title>
                <meta name="description" content="request deme page"/>
            </Head>
            <MakeRequest/>
        </div>
    )
}