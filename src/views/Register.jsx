import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import logo from "C:/x-clone-react/logo1.png"

function Register() {
  const { user, login } = useAuth();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleRegister = (data) => {
    login(); 
    setRedirectToHome(true);
  };

  if (user || redirectToHome) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-4">
      <img src={logo} alt="Logo de la plataforma" className=" flex mb-4 mx-32 w-40 ml-0 mt-10 " />  
      <h1 className="text-3xl font-extrabold absolute top-10 ml-40 mt-10 font-serif">Registrate en PETLIFE</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Nombres"
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500 mt-1">Nombres es requerido</p>}
          </div>

          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellidos"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <p className="text-red-500 mt-1">Apellidos es requerido</p>}
          </div>

          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Nombre de usuario"
              {...register('username', { required: true })}
            />
            {errors.username && <p className="text-red-500 mt-1">Nombre de usuario es requerido</p>}
          </div>

          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Correo electronico"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 mt-1">Correo es requerido</p>}
          </div>

          <div className="mb-4 w-full">
            <input
              className="rounded-md p-2 text-black w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              {...register('password', { required: true })}
            />
            {errors.password && <p className="text-red-500 mt-1">Contraseña es requerida</p>}
          </div>

          <div className="mb-4 text-sm text-gray-500">
            Tenga presente que este registro le permite visualizar nuestra página. Sin embargo, si tú y tus mascotas quieren ser parte de nuestra fundación, debes completar el registro en una de nuestras sedes.
          </div>

          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-full w-full mb-4" type="submit">
            Registrarse
          </button>
          <Link className="hover:underline" to="/login">
            Iniciar sesión
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
