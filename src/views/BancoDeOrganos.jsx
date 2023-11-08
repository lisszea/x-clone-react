const BancoDeOrganos = () => {
    const solicitudes = [
      { organo: 'Riñón', mascota: 'Perro', tipodesangre: 'DEA-3',imagen: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg' },
      { organo: 'Corazón', mascota: 'Gato', tipodesangre: 'A', imagen: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg'} ];
  
  
      return (
        <div className="p-4" style={{ backgroundColor: '#AEFFDB' }}>
          <h2 className="text-2xl font-bold mb-4">Solicitudes</h2>
          {solicitudes.map((solicitud, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow-md">
              <div className="w-1/4 pr-4">
                <p className="text-lg font-semibold mb-2">Órgano: {solicitud.organo}</p>
                <p className="text-lg mb-2">Mascota: {solicitud.mascota}</p>
                <p className="text-lg">Tipo de sangre: {solicitud.tipodesangre}</p>
              </div>
              <img src={solicitud.imagen} alt={`Imagen de ${solicitud.mascota}`} className="w-45 h-40 rounded-full" />
            </div>
          ))}
        </div>
      );
    };
    
    export default BancoDeOrganos;