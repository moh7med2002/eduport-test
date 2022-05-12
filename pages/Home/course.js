import MainEducation from "../../components/Demos/Education/MainPage";
import Head from 'next/head'
import CourseMainPage from "../../components/Demos/HomeCourse/CourseMainPage";
export default function HomeCourse(){
    return(
        <div  className="pt-[75px]">
            <Head>
                <title>Home Course</title>
                <meta name="description" content="home course page"/>
            </Head>
            <CourseMainPage/>
        </div>
    )
}