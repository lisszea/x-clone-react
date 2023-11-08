import { Navigate, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from "C:/x-clone-react/logo1.png"




const USER = [
  {
    id: 1,
    username: "acastillo",
    password: "123456",
    role: "user"
  },
  {
    id: 2,
    username: "juan.cano",
    password: "123456",
    role:"admin"
  },
  {
    id: 3,
    username: "juana",
    password: "123456",
    role:"user"
  }
]

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // hacer una peticion fetch al servidor para que verifique el login
    // fetch('/api/login', { method: form.method, body: formData });

    const loginObject = Object.fromEntries(formData.entries());
    const userLogin = USER.find((user) => 
      user.username === loginObject.username 
      && user.password === loginObject.password
    )
    if (userLogin) {
      // login exitoso
      login(userLogin.id);
      if (userLogin.role === "user") {
        navigate("/PageUser"); // Redirigir a la página del usuario normal
      } else if (userLogin.role === "admin") {
        navigate("/"); // Redirigir a la página del administrador
      };
    } else {
      // el login falló
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-4">
        <img src={logo} alt="Logo de la plataforma" className="mb-4 mx-32 w-40" />
        <h2 className="mb-6 font-bold text-2xl text center">Bienvenido a PETLIFE DONATE</h2>
        <div className="bg-white p-6 rounded-lg shadow-md"style={{ width: "400px" /* Ancho deseado */ }}>
        <form className="flex flex-col items-center" method="post" onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-black mb-6 text-left w-full">Por favor inicie sesión con su cuenta</label>
          <input
            className="mb-6 mx-aute rounded-md p-3 text-black"
            name="username"
            id="username"
            placeholder="Nombre de usuario"
            style={{ width: "350px"}}
          /> 
          
          <input
            className="mb-6 rounded-lg p-3 text-black"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            style={{ width: "350px"}}
          />
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-full w-full mb-4" type="submit">
            Inicia sesión
          </button>
          <Link className="hover:underline" to="/register">Registro</Link>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
