import { useNavigate } from 'react-router-dom';


function Courses() {
    const navigate = useNavigate();

    const navCourses= [
        { id: 1, text: 'Matemáticas', route: '/matematicas' },
        { id: 2, text: 'Quimica', route: '/quimico' },
        { id: 3, text: 'Biologia', route: '/biologia' },
        { id: 4, text: 'Fisica', route: '/fisica' },
        {id: 4, text: 'Electronica', route: '/electronica'},
        
    ];
    function setClick(curso) {
        if (item.id === 6) {
            setIsLogged(false)
        } else {
            navigate(item.route)
        }
    }
    return (
        <>
        <ul className='flex'>

            
                    {navCourses.map((curso) => (
                        
                        <li
                            key={curso.id}
                        
                            className='bg-black w-60 h-60 sm:align-middle md:align-bottom lg:align-text-top xl:align-text-bottom p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                            onClick={() => setClick(curso)}
                        >   
                            {curso.text}

                            
                            

                            <img className="w-40 h-40" src="curso.profileImage"/>

                        </li>

                        
                    ))}
            
                </ul>
            
        </>

            )
            
    

}

export default Courses