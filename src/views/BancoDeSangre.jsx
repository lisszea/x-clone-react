import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BancoDeSangre = () => {
  const [inventario, setInventario] = useState([]);
  const [tipoAnimal, setTipoAnimal] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const inventarioInicial = [
    { tipoAnimal: 'perro', tipoSangre: 'DEA 1', cantidad: 5 },
    { tipoAnimal: 'gato', tipoSangre: 'A', cantidad: 3 },
  ];

  useEffect(() => {
    setInventario(inventarioInicial);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tipoAnimal') {
      setTipoAnimal(value);
    } else if (name === 'tipoSangre') {
      setTipoSangre(value);
    } else if (name === 'cantidad') {
      setCantidad(value);
    }
  };

  const agregarSangreAlInventario = () => {
    if (tipoAnimal && tipoSangre && cantidad) {
      const nuevaSangre = { tipoAnimal, tipoSangre, cantidad: parseInt(cantidad, 10) };
      setInventario([...inventario, nuevaSangre]);
      setTipoAnimal('');
      setTipoSangre('');
      setCantidad('');
    }
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    const dataPerros = inventario
      .filter((item) => item.tipoAnimal === 'perro')
      .reduce((total, item) => total + item.cantidad, 0);

    const dataGatos = inventario
      .filter((item) => item.tipoAnimal === 'gato')
      .reduce((total, item) => total + item.cantidad, 0);

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Perros', 'Gatos'],
        datasets: [{
          label: 'Cantidad de Sangre',
          data: [dataPerros, dataGatos],
          backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [inventario]);

  return (
    <div style={{ backgroundColor: '#FFFFFF' }} className="min-h-screen p-4">
      {/* Inventario de Sangre */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Inventario de Sangre</h3>
        <div className="mb-4">
          <select
            className="border p-2 w-full"
            name="tipoAnimal"
            value={tipoAnimal}
            onChange={handleInputChange}
          >
            <option value="">Seleccione un tipo de animal</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tipo de Sangre"
            className="border p-2 w-full"
            name="tipoSangre"
            value={tipoSangre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Cantidad"
            className="border p-2 w-full"
            name="cantidad"
            value={cantidad}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-full w-full mb-4" type="submit"
          onClick={agregarSangreAlInventario}
        >
          Agregar al Inventario
        </button>
      </div>

      {/* Informe y Estadísticas */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Informe y Estadísticas</h3>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default BancoDeSangre;
