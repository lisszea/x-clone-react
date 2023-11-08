import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function User() {

  const { logout } = useContext(AuthContext);
  

  return (
    <div className="flex gap-4 p- items-start">
        <button
          className="bg-red-500 py-2 px-4 rounded-full text-white"
          onClick={logout}
        >
        Cerrar Sesión
        </button>
        
    </div>
  );
}

export default User;

