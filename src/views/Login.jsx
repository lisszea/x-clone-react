import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const USER = {
  username: "admin",
  password: "123456",
};

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
    if (
      loginObject.username === USER.username &&
      loginObject.password === USER.password
    ) {
      // login exitoso
      login(loginObject.username);
      navigate("/");
    } else {
      // el login falló
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-4">
        <h2 className="mb-4 font-bold text-2xl">Sign In to X</h2>
        <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
          <input
            className="mb-4 rounded-md p-2 text-black"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            className="mb-4 rounded-md p-2 text-black"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button className="bg-sky-500 py-2 px-4 rounded-full" type="submit">
            Sing in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

