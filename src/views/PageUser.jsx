import React from 'react'
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


import Imagen1 from "../assets/images/imagne1.jpg"
import Imagen4 from "../assets/images/servicios.jpeg"
import Imagen5 from "../assets/images/veterinario.jpeg"
import Orman from "../assets/images/aaa.jpg"
import Lis from "../assets/images/lis.jpg"
import Maria from "../assets/images/maria.jpg"
import Vet1 from "../assets/images/vet1.jpeg"
import Vet2 from "../assets/images/vet2.jpg"
import Vet3 from "../assets/images/vet3.png"


const PageUser = ({ id, title, content, image }) => {
  const { logout } = useContext(AuthContext);
    const teamMembers = [
        { name: 'Orman Jesus Contreras Mulford', role: 'Soporte', image: Orman },
        { name: 'Liss', role: 'Jefa Ejecutiva', image: Lis },
        { name: 'Maria Camila Bravo', role: 'Relaciones Publicas', image: Maria },
      ];
      const veterinarios = [
        { name: 'Dr. María López', role: 'Cirugía Veterinaria', experience: '15 años', email: 'maria.lopez@example.com', image: Vet1 },
        { name: 'Dra. Javier Martínez', role: 'Medicina Interna', experience: '12 años', email: 'javier.martinez@example.com', image: Vet3 },
        { name: 'Dra. Laura González', role: 'Cardiología Veterinaria', experience: '8 años', email: 'laura.gonzalez@example.com', image: Vet2 },
      ];

      const servicios = [
        'Donación de órganos vitales',
        'Donación de sangre',
        'Coordinación de donantes',
        'Evaluación médica',
        'Intervención quirúrgica',
      ];
      const donantesData = [
        {
          nombreMascota: 'Max',
          especieRaza: 'Perro Labrador',
          donante: 'Riñon',
          ubicacion: 'Carrera54 #67A-20, Medellín',
          telefono: '123-456-7890',
        },
        {
            nombreMascota: 'Milan',
            especieRaza: 'Perro Labrador',
            donante: 'Sangre',
            ubicacion: 'Transversal 54 , Cartagena',
            telefono: '311-618-1606',
          },
          {
            nombreMascota: 'Iris',
            especieRaza: 'Gato',
            donante: 'Medula',
            ubicacion: 'Calle 123, Medellín',
            telefono: '310-520-7750',
          },
          {
            nombreMascota: 'Greta',
            especieRaza: 'Gato',
            donante: 'Sangre',
            ubicacion: 'Calle 45, Medellín',
            telefono: '313-426-7478',
          },
          {
            nombreMascota: 'Güero',
            especieRaza: 'Perro Bulldog',
            donante: 'Sangre',
            ubicacion: 'Carrea 78, Villavicencio',
            telefono: '301-698-2698',
          },
      ];
        const [searchTerm, setSearchTerm] = useState('');

        const filteredDonantes = donantesData.filter((donante) =>
    donante.especieRaza.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <section id="nosotros" className="mb-12">
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-4xl font-bold mb-4">Nosotros</h2>
          <img src={Imagen1} alt="Nosotros" className="w-64 h-auto mb-4" />
          <p className="text-sm sm:text-base">
          Nosotros somos un equipo apasionado de profesionales veterinarios
dedicados a mejorar la vida de las mascotas y sus familias. 
Nuestra historia comenzó con la firme creencia de que cada mascota merece amor, 
atención y cuidado médico excepcional. La idea de esta plataforma de donación de 
órganos y sangre para mascotas nació de nuestra experiencia en la industria veterinaria y 
el deseo de hacer una diferencia significativa en la comunidad.En nuestra clínica, nos esforzamos por proporcionar 
un ambiente acogedor y compasivo para las mascotas y sus dueños. Estamos comprometidos con la excelencia médica 
y el cuidado compasivo. Cada miembro de nuestro equipo está dedicado a brindar el mejor tratamiento y 
apoyo emocional a las familias durante momentos difíciles. Juntos, trabajamos para crear un mundo donde 
todas las mascotas tengan acceso a la atención que merecen.`</p>
        </div>
      </section>

      <section id="servicios" className="mb-12">
        <div className="flex items-center mb-4">
          <div className="flex-1 mr-4">
            <h2 className="text-4xl font-bold mb-2">Servicios</h2>
            <ul className="list-disc pl-4">
              {servicios.map((servicio, index) => (
                <li key={index} className="text-base mb-2">
                  {servicio}
                </li>
              ))}
            </ul>
          </div>
          <img src={Imagen4} alt="Servicios" className="w-64 h-auto" />
        </div>
      </section>
      <section id="administradores" className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Administradores</h2>
        <div className='flex'>
          {teamMembers.map((member, index) => (
            <div key={index} className='flex flex-col items-center mx-4'>
              <div style={{ width: '100px', height: '100px' }}>
                <img
                  src={member.image}
                  alt={`Imagen del Miembro ${index + 1}`}
                  className='w-full h-full rounded-full'
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className='text-sm font-bold my-2'>{member.name}</h2>
              <p className='text-sm mb-4'>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="veterinarios" className="mb-12">
      <h2 className="text-4xl font-bold mb-4">Veterinarios</h2>
        <div className="flex flex-wrap">
          {veterinarios.map((veterinario, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
              <img src={veterinario.image} alt={veterinario.name} className="w-32 h-32 object-cover rounded-full mb-2" />
              <h3 className="text-lg font-bold mb-1">{veterinario.name}</h3>
              <p className="text-sm">{veterinario.role}</p>
              <p className="text-sm">Experiencia: {veterinario.experience}</p>
              <p className="text-sm">Email: {veterinario.email}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experiencias" className="mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Experiencias</h2>
          <p className="text-sm sm:text-base mb-4">
          En nuestro viaje, hemos tenido el privilegio de ayudar a
             numerosas mascotas a superar desafíos médicos significativos gracias a la generosidad de donantes y
              sus familias. Hemos presenciado historias de valentía y esperanza, y hemos sido testigos de cómo el
               amor y el cuidado pueden transformar vidas, tanto para las mascotas como para sus dueños. Cada experiencia
                nos ha enseñado la importancia de la solidaridad y nos ha inspirado a seguir adelante con nuestra misión.</p>
          <img src={Imagen5} alt="Experiencias" className="w-64 h-auto mb-8" />
        </div>
      </section>

      <section id="donantes" className="mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Donantes</h2>
          <input
            type="text"
            placeholder="Ingrese la raza que desea "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 mb-4"
          />
          <table className="border-collapse border w-full">
            <thead>
              <tr>
                <th className="border p-2">Nombre Mascota</th>
                <th className="border p-2">Especie/Raza</th>
                <th className="border p-2">Donante de Órgano o Sangre</th>
                <th className="border p-2">Ubicación</th>
                <th className="border p-2">Teléfono de Contacto</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonantes.map((donante, index) => (
                <tr key={index}>
                  <td className="border p-2">{donante.nombreMascota}</td>
                  <td className="border p-2">{donante.especieRaza}</td>
                  <td className="border p-2">{donante.donante}</td>
                  <td className="border p-2">{donante.ubicacion}</td>
                  <td className="border p-2">{donante.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="flex gap-4 p- items-start">
        <button
          className="bg-blue-500 py-2 px-4 rounded-full text-white"
          onClick={logout}
        >
        Cerrar Sesión
        </button>
        
      </div>


    </div>
  );
};

export default PageUser;