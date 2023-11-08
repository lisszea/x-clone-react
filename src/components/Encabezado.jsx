import React from 'react';
import NavBar from '../views/NavBar';
import logo from '../assets/images/logo1.png';

const Encabezado = () => {
  return (
    <header className='flex place-content-between items-center mb-8'style={{ margin: '20px' }}>
      <img src={logo} alt='Logo' />
      <NavBar />
    </header>
  );
};

export default Encabezado;