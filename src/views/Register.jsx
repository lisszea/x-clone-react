import { Navigate, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from 'react-hook-form';

const USER = {
  username: "admin",
  password: "123456",
};

function Register() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (user) {
    return <Navigate to="/" />;
  }

  function handleRegister(value) {
    // hacer una peticion fetch al servidor para que registre al usuario
    // fetch('/api/register', { method: 'POST', body: value });

    console.log(value);
    
    login(value.username);
    navigate("/");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-4">
        <h2 className="mb-4 font-bold text-2xl">Sign Up to X</h2>
        <form className="flex flex-col items-center" method="post" onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500 mt-1">Name is required</p>}
          </div>

          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              {...register('username', { required: true })}
            />
            {errors.username && <p className="text-red-500 mt-1">Username is required</p>}
          </div>
          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              {...register('email', { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}
            />
            {errors.email?.type === 'required' && <p className="text-red-500 mt-1">Email is required</p>}
            {errors.email?.type === 'pattern' && <p className="text-red-500 mt-1">Please enter a valid email</p>}
          </div>
          <input
            className="mb-4 rounded-md p-2 text-black w-full"
            type="date"
            name="birthDate"
            id="birthDate"
            placeholder="Date of Birth"
            {...register('birthDate')}
          />
          <input
            className="mb-4 rounded-md p-2 text-black w-full"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register('password')}
          />
          <div>
            <input
              className="mb-4 rounded-md p-2 text-black mr-2"
              type="checkbox"
              name="terms"
              id="terms"
              {...register('terms')}
            />
            <label htmlFor="terms">Accept the terms of the service</label>
          </div>

          <button className="bg-sky-500 py-2 px-4 rounded-full w-full mb-4" type="submit">
            Resgister
          </button>
          <Link className="hover:underline" to="/login">Sign In</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;

