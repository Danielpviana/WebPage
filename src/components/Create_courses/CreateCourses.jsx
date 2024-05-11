 import { useContext, useState } from "react"
 import { UserContext } from "../../contexts/userContext"

 function CreateCourses() {
    const [courses,setCourses] =useState([])
     

    useEffect(() => {
        fetch('dbcourses.json') // Ruta al archivo JSON
          .then(response => response.json())
          .then(data => setCourses(data.courses))
          .catch(error => console.error('Error al cargar los cursos:', error));
      }, []);
    
      return (
        <div>
          <h1>Cursos Disponibles</h1>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <h2>{course.nombre}</h2>
                <img src={course.profileImage} alt="Imagen del profesor" />
              </li>
            ))}
          </ul>
        </div>
      );
    }

 export default CreateCourses