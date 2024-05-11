import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();

    return (
        <>
            <p className="container text-black">cursos</p>
            <button className='text-black bg-gray-600' onClick={() => navigate('/coursedetails')}>detalles</button>
        </>
    )

}

export default Courses