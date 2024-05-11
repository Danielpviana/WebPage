import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

const USER_LOGIN_DEFAULT = {
  username: 'juan',
  password: '123456'
}

function Login() {

  const navigate = useNavigate()
  const [setIsLogged] = useOutletContext();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function login(event) {
    event.preventDefault()

    // TODO deberia consumir un API de login contra el servidor, normalmente se utiliza algo como JWT
    if (username === USER_LOGIN_DEFAULT.username && password === USER_LOGIN_DEFAULT.password) {
      setIsLogged(true)
      navigate('/home')
    } else {
      alert('usuario incorrecto')
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-100 w-auto"
          src="https://img.freepik.com/vector-gratis/ilustracion-concepto-aprendizaje-linea_114360-4755.jpg?t=st=1714888193~exp=1714891793~hmac=a732328dcd6667f7cf8f49207fc53aa93a1e6b4a203719d363ff20b9a9423e86&w=900"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Usuario
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#00df9a] hover:text-[#008a5f]">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#008a5f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={login}
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Aún no tiene cuenta?{' '}
          <a href="#" className="font-semibold leading-6 text-[#00df9a] hover:text-[#008a5f]">
            Regístrese gratis.
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login