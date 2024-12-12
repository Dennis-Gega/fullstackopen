import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ( {course} ) => {

    const courseName = course.name
    const courseParts = course.parts
    return (
        <>
            <Header courseName={courseName}></Header>
            <Content parts={courseParts}></Content>
            <Total parts={courseParts}></Total>
        </>

    )
}

export default Course