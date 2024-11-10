import React, { useState } from 'react';
import Menu from './Menu';

function NavbarContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex-col h-max shadow-xl w-full px-10 py-8 md:py-6 gap-4 md:px-40 flex fixed top-0 left-0 z-50 bg-white'>
        <div className='flex items-center justify-between h-full w-full'>
            <p className='text-3xl font-bold text-blue-700 cursor-pointer'>MovieZ</p>
            <a
                id="metaMenu"
                className={`text-blue-700 font-semibold md:hidden ${isMenuOpen ? 'text-4xl' : 'text-2xl'}`}
                href="#"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? '\u00D7' : '\u2630'}
            </a>
            <div className={`md:flex hidden flex-col md:flex-row text-lg text-blue-700 cursor-pointer h-full`}>
                <Menu></Menu>
            </div>
        </div>
        {isMenuOpen && 
        <div  className='flex flex-col md:hidden text-lg text-blue-700 cursor-pointer h-full justify-center items-center w-full gap-1'>
                <Menu></Menu>
        </div>}
    </div>
  );
}

export default NavbarContainer;