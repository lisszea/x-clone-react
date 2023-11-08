import React, { useState } from 'react';

function RegistroClienteMascota() {
  const [nombreCliente, setNombreCliente] = useState('');
  const [apellidoCliente, setApellidoCliente] = useState('');
  const [cedulaCliente, setCedulaCliente] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [descripcionMascota, setDescripcionMascota] = useState('');
  const [servicio, setServicio] = useState(''); // Campo de selección de servicio
  const [documentos, setDocumentos] = useState(null); // Campo de carga de documentos

  const handleRegistroClick = () => {
    // Lógica para guardar los datos
    console.log('Nombre del Cliente:', nombreCliente);
    console.log('Apellido del Cliente:', apellidoCliente);
    console.log('Cédula del Cliente:', cedulaCliente);
    console.log('Dirección del Cliente:', direccion);
    console.log('Teléfono:', telefono);
    console.log('Correo Electrónico:', correoElectronico);
    console.log('Nombre de la mascota:', nombreMascota);
    console.log('Tipo de sangre:', tipoSangre);
    console.log('Raza:', raza);
    console.log('Edad:', edad);
    console.log('Descripción de la mascota:', descripcionMascota);
    console.log('Servicio:', servicio);
    console.log('Documentos:', documentos);
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center' }}>
        Formulario de registro
      </h1>
      <form>
        <div className="cliente-info">
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center' }}> Datos Cliente:</h3>
          <div className="mb-3">
            <label htmlFor="nombreCliente" className="form-label">
              Nombre del Cliente
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreCliente"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoCliente" className="form-label">
              Apellido del Cliente
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidoCliente"
              value={apellidoCliente}
              onChange={(e) => setApellidoCliente(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cedulaCliente" className="form-label">
              Cédula del Cliente
            </label>
            <input
              type="text"
              className="form-control"
              id="cedulaCliente"
              value={cedulaCliente}
              onChange={(e) => setCedulaCliente(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Dirección del Cliente
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono:
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correoElectronico" className="form-label">
              Correo Electrónico:
            </label>
            <input
              type="email"
              className="form-control"
              id="correoElectronico"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
            />
          </div>
        </div>
        <div className="mascota-info">
        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center' }}> Datos mascota:</h3>
          <div className="mb-3">
            <label htmlFor="nombreMascota" className="form-label">
              Nombre de la Mascota
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreMascota"
              value={nombreMascota}
              onChange={(e) => setNombreMascota(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tipoSangre" className="form-label">
              Tipo de Sangre:
            </label>
            <input
              type="text"
              className="form-control"
              id="tipoSangre"
              value={tipoSangre}
              onChange={(e) => setTipoSangre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="raza" className="form-label">
              Raza:
            </label>
            <input
              type="text"
              className="form-control"
              id="raza"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">
              Edad:
            </label>
            <input
              type="text"
              className="form-control"
              id="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcionMascota" className="form-label">
              Descripción de la Mascota:
            </label>
            <textarea
              className="form-control"
              id="descripcionMascota"
              value={descripcionMascota}
              onChange={(e) => setDescripcionMascota(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="servicio" className="form-label">
            Seleccione el servicio:
          </label>
          <select
            className="form-select"
            id="servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="">Seleccione un servicio</option>
            <option value="Donante">Donante</option>
            <option value="Receptor">Receptor</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="documentos" className="form-label">
            Cargar documentos:
          </label>
          <input
            type="file"
            className="form-control"
            id="documentos"
            onChange={(e) => setDocumentos(e.target.files[0])}
          />
        </div>
        <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-full w-full mb-4"
          onClick={handleRegistroClick}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default RegistroClienteMascota;
