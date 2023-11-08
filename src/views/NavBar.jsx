import { useState, useContext } from "react";
import burgerMenu from '../assets/images/menu.png';

const NavBar = () => {
  return (
    <>
      <ul className='hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'style={{ margin: '20px' }}>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#veterinarios">Veterinarios</a>
        </li>
        <li>
          <a href="#experiencias">Experiencias</a>
        </li>
        <li>
          <a href="#donantes">Donantes</a>
        </li>
      </ul>
      <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt='Menu hamburguesa' />
    </>
  );
};

export default NavBar;
