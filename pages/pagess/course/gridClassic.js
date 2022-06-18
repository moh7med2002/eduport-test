import Head from 'next/head'
import GridClassicFilter from '../../../components/pagess/course/gridClassic/filterCourse'
import GridClassicLand from '../../../components/pagess/course/gridClassic/gridClassicLand'


export default function CourseGategory(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Course Grid Classic</title>
                <meta name="description" content="grid classic page"/>
            </Head>
            <GridClassicLand/>
            <GridClassicFilter/>
        </div>
    )
}