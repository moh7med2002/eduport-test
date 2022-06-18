import Head from 'next/head'
import BookClass from '../../components/Demos/BookClass/Bookclass'
export default function Bookclass(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Book Class</title>
                <meta name="description" content="book class page"/>
            </Head>
            <BookClass/>
        </div>
    )
}