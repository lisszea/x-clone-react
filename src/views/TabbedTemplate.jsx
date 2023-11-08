import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import RegistroClienteMascota from './RegistroClienteMascota';
import Mascotas from './Mascotas';
import BancoDeOrganos from './BancoDeOrganos';
import BancoDeSangre from './BancoDeSangre';
import Citas from './Citas';
import logo from "C:/x-clone-react/logo1.png"

/* Aqui agregamos la importacion del archivo que llamamos o vamos a usar para el contenido de pestañas*/

function TabbedTemplate() {
  const { logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('inicio');
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    
    <div className="container mt-4">
      <div className="flex mr-4">
      <img src={logo} alt="Logo de la plataforma" className=" flex mb-4 mx-32 w-40 top-0 left-0 ml-0 mt-0 " />  
     </div>
     <h1 className="absolute text-4xl font-extrabold top-10 -0 ml-40 mt-10 font-serif">PetLife Donate
      </h1>
      <h1 className="absolute text-2xl font-bold top-10 vleft-0 ml-40 mt-20 ">Plataforma de donación de órganos y tejidos para mascotas</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'formulario' ? 'active' : ''}`}
            onClick={() => changeTab('formulario')}
          >
            Formulario
          </button>
        </li>
        <li className="nav-item">
        <button
          className={`nav-link ${activeTab === 'Mascotas' ? 'active' : ''}`}
          onClick={() => changeTab('Mascotas')}
        >
          Mascotas donantes
          </button>
        </li>
        <li className="nav-item">
        <button
          className={`nav-link ${activeTab === 'Citas' ? 'active' : ''}`}
          onClick={() => changeTab('Citas')}
        >
          Citas
          </button>
        </li>
        <li className="nav-item">
        <button
          className={`nav-link ${activeTab === 'Bancodeorganos' ? 'active' : ''}`}
          onClick={() => changeTab('Bancodeorganos')}
        >
          Banco de Organos
          </button>
        </li>
        <li className="nav-item">
        <button
          className={`nav-link ${activeTab === 'Bancodesangre' ? 'active' : ''}`}
          onClick={() => changeTab('Bancodesangre')}
        >
          Banco de sangre
          </button>
        </li>
        <li className="nav-item">
        <button
          className={`nav-link ${activeTab === 'CerrarSesion' ? 'active' : ''}`}
          onClick={logout}
        >
          Cerrar Sesión
          </button>
        </li>
        {/* Aqui podemos agregar mas botones de pestaña */}
      </ul>
      <div className="border p-4">
        {activeTab === 'formulario' && <RegistroClienteMascota/>}
        {activeTab === 'Mascotas' && <Mascotas/>}
        {activeTab === 'Citas' && <Citas/>}
        {activeTab === 'Bancodeorganos' && <BancoDeOrganos/>}
        {activeTab === 'Bancodesangre' && <BancoDeSangre/>}
        {/* Aqui podemos agregar el contenido de cada pestaña haciendo llamado de su nombre en el archivo js */}
    </div>
  </div>
  );
}

export default TabbedTemplate;