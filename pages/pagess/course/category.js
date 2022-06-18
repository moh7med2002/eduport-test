import Head from 'next/head'
import GridBox from '../../../components/Demos/HomeCourse/GridBox'
import CategoryLand from '../../../components/pagess/course/category/categoryLand'
import ChooseGategory from '../../../components/pagess/course/category/chooseCategory'
import Languages from '../../../components/pagess/course/category/Languages'

export default function CourseGategory(){
    return(
        <div className="pt-[75px]">
            <Head>
                <title>Course Category</title>
                <meta name="description" content="Category page"/>
            </Head>
            <CategoryLand/>
            <ChooseGategory/>
            <Languages/>
            <GridBox/>
        </div>
    )
}