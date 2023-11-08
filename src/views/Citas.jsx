import React, { useState } from 'react';

function Citas() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      solicitante: 'Juan Pérez',
      mascota: 'Rocky',
      servicio: 'Receptor',
      fecha: '2023-11-15',
      hora: '09:00 AM',
      estado: 'Aprobado',
    },
    {
      id: 2,
      solicitante: 'María González',
      mascota: 'Luna',
      servicio: 'Donante',
      fecha: '2023-11-16',
      hora: '02:30 PM',
      estado: 'En Proceso',
    },
    {
      id: 3,
      solicitante: 'Carlos Rodríguez',
      mascota: 'Max',
      servicio: 'Valorización',
      fecha: '2023-11-17',
      hora: '11:15 AM',
      estado: 'Terminado',
    },
  ]);

  const [nuevaCita, setNuevaCita] = useState({
    solicitante: '',
    mascota: '',
    servicio: 'Receptor',
    fecha: '',
    hora: '',
    estado: 'Aprobado',
  });

  const handleCrearCita = () => {
    const newId = citas.length > 0 ? citas[citas.length - 1].id + 1 : 1;
    setCitas([...citas, { id: newId, ...nuevaCita }]);
    setNuevaCita({
      solicitante: '',
      mascota: '',
      servicio: 'Receptor',
      fecha: '',
      hora: '',
      estado: 'Aprobado',
    });
  };

  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Citas</h1>

      {/* Formulario para crear una nueva cita */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Crear Nueva Cita</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="mb-2">Solicitante:</label>
            <input
              type="text"
              value={nuevaCita.solicitante}
              onChange={(e) => setNuevaCita({ ...nuevaCita, solicitante: e.target.value })}
              className="rounded-md p-2 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Mascota:</label>
            <input
              type="text"
              value={nuevaCita.mascota}
              onChange={(e) => setNuevaCita({ ...nuevaCita, mascota: e.target.value })}
              className="rounded-md p-2 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Servicio:</label>
            <select
              value={nuevaCita.servicio}
              onChange={(e) => setNuevaCita({ ...nuevaCita, servicio: e.target.value })}
              className="rounded-md p-2 border"
            >
              <option value="Receptor">Receptor</option>
              <option value="Donante">Donante</option>
              <option value="Valorización">Valorización</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Fecha:</label>
            <input
              type="date"
              value={nuevaCita.fecha}
              onChange={(e) => setNuevaCita({ ...nuevaCita, fecha: e.target.value })}
              className="rounded-md p-2 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Hora:</label>
            <input
              type="time"
              value={nuevaCita.hora}
              onChange={(e) => setNuevaCita({ ...nuevaCita, hora: e.target.value })}
              className="rounded-md p-2 border"
            />
          </div>
        </div>
        <button onClick={handleCrearCita} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-full w-full mb-4" type="submit">
          Crear Cita
        </button>
      </div>

      {/* Lista de citas existentes */}
      <div>
        <h2 className="text-xl font-bold mb-2">Citas Existentes</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200" style={{ backgroundColor: '#AEFFDB' }}>
              <th className="border p-2">ID</th>
              <th className="border p-2">Solicitante</th>
              <th className="border p-2">Mascota</th>
              <th className="border p-2">Servicio</th>
              <th className="border p-2">Fecha</th>
              <th className="border p-2">Hora</th>
              <th className="border p-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id} className="border">
                <td className="border p-2">{cita.id}</td>
                <td className="border p-2">{cita.solicitante}</td>
                <td className="border p-2">{cita.mascota}</td>
                <td className="border p-2">{cita.servicio}</td>
                <td className="border p-2">{cita.fecha}</td>
                <td className="border p-2">{cita.hora}</td>
                <td className="border p-2">{cita.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Citas;
