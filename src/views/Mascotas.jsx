import React, { useState } from 'react';

const dataMascotas = [
  {
    id: 1,
    nombre: 'Dinna',
    tipo: 'Perro',
    tipoSangre: "DEA 1",
    edad: 2,
    descripcion: 'Dinna es una perrita juguetona y amigable.',
    cedulacliente: '1234567890',
    patologia: 'Ninguna',
    esDonador: "Donante",
    raza: "Criollo",
    imagen: 'https://cdn.pixabay.com/photo/2019/08/22/10/58/the-pointer-4423205_1280.jpg',
  },
  {
    id: 2,
    nombre: 'Whiskers',
    tipo: 'Gato',
    tipoSangre: "AB",
    edad: 3,
    descripcion: ' Whiskers es un gato independiente y cariñoso.',
    cedulacliente:'0987654321',
    patologia: 'Alergia al polen',
    esDonador:"Donante",
    raza: "Criollo",
    imagen: 'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_1280.jpg',
  },
  {
    id: 3,
    nombre: 'Max',
    tipo: 'Perro',
    tipoSangre: "DEA 2",
    edad: 2,
    descripcion: 'Max es un perro juguetón y amigable.',
    cedulacliente: '1234567890',
    patologia: 'Ninguna',
    esDonador: "Donante",
    raza: "Criollo",
    imagen: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
  },
  {
    id: 4,
    nombre: 'Buddy',
    tipo: 'Perro',
    tipoSangre: "DEA 3",
    edad: 4,
    descripcion: 'Buddy es un perro leal y enérgico.',
    cedulacliente: '9876543210',
    patologia: 'Ninguna',
    esDonador: "Donador",
    raza: "Bug Doll",
    imagen: 'https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_1280.jpg',
  },
  {
    id: 5,
    nombre: 'Luna',
    tipo: 'Gato',
    tipoSangre: "AA",
    edad: 2,
    descripcion: 'Luna es una gata curiosa y juguetona. Tiene pelaje negro y blanco.',
    cedulacliente: '5432167890',
    patologia: 'Ninguna',
    esDonador: "Receptor",
    raza: "Angora",
    imagen: 'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg',
  }
]

function Mascotas() {
  const [busqueda, setBusqueda] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('todos'); // 'perro', 'gato', 'todos'

  const mascotasFiltradas = dataMascotas.filter((mascota) => {
    const incluyeTexto = mascota.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      mascota.cedulacliente.toLowerCase().includes(busqueda.toLowerCase());
    const pasaFiltroTipo = tipoFiltro === 'todos' || mascota.tipo.toLowerCase() === tipoFiltro;

    return incluyeTexto && pasaFiltroTipo;
  });

  const tipos = ['todos', 'perro', 'gato'];

  return (
    <div className="p-4" style={{ backgroundColor: '#AEFFDB' }}>
      <h2 className="text-2xl font-bold mb-4 ">Mascotas</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="mr-2 p-2 border rounded"
          placeholder="Buscar por nombre o cédula"
        />
        <select
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
          className="p-2 border rounded"
        >
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="mascotas-list">
        {mascotasFiltradas.map((mascota) => (
          <div key={mascota.id} className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow-md">
            <div className="w-1/4 pr-4">
              <p className="text-lg font-semibold mb-2">{mascota.nombre}</p>
              <p className="text-lg mb-2">Tipo: {mascota.tipo}</p>
              <p className="text-lg mb-2">Raza: {mascota.raza}</p>
              <p className="text-lg">Edad: {mascota.edad} años</p>
              <p className="text-lg mt-2">Descripción: {mascota.descripcion}</p>
            </div>
            <img src={mascota.imagen} alt={mascota.nombre} className="w-32 h-32 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mascotas;