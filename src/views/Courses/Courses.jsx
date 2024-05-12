// import { useNavigate } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';
import { getCourses } from '../../../dbcourses';


function Courses() {
    // const navigate = useNavigate();

    // const navCourses = [
    //     { id: 1, text: 'Matemáticas', route: '/matematicas' },
    //     { id: 2, text: 'Quimica', route: '/quimico' },
    //     { id: 3, text: 'Biologia', route: '/biologia' },
    //     { id: 4, text: 'Fisica', route: '/fisica' },
    //     { id: 4, text: 'Electronica', route: '/electronica' },

    const courseData = getCourses();

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    <CourseCard courseData={courseData}/>
                </div>
            </div>
        </>

    )



}

export default Courses