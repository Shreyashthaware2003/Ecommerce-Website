import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className='md:px-8 h-auto flex justify-center'>
                <div className='h-36 w-[100vw] flex flex-col'>
                    <div className='h-16 p-2 md:p-8 bg-[#2a2c30] flex flex-row justify-between items-center'>
                        <div>
                            <span className='text-white text-xs md:text-base font-semibold'>Free shipping, 30-day return or refund guarantee.</span>
                        </div>
                        <div className='flex flex-row gap-6'>
                            <button className='uppercase text-sm md:text-lg text-[#646cff] hover:text-blue-400 w-16 md:w-auto'>Sign In</button>
                            <button className='uppercase text-sm md:text-lg text-[#646cff] hover:text-blue-400 w-16 md:w-auto'>Sign up</button>
                        </div>
                    </div>
                    <div className='md:h-20 shadow-md flex flex-row justify-between items-center p-4 md:p-8'>
                        <div className='border-[3px] border-black w-auto py-[2px] px-2'>
                            <div className='flex gap-2 text-base md:text-xl font-extrabold items-center justify-center '>
                                <span className='uppercase bg-black text-white px-2'>Quantum</span>
                                <span className='uppercase'>Store</span>
                            </div>
                        </div>
                        <div className='hidden md:flex'>
                            <ul className='flex space-x-10 uppercase font-bold text-base'>
                                <li className='cursor-pointer hover:text-blue-500'>home</li>
                                <li className='cursor-pointer hover:text-blue-500'>about</li>
                                <li className='cursor-pointer hover:text-blue-500'>products</li>
                                <li className='cursor-pointer hover:text-blue-500'>contact</li>
                            </ul>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={toggleMenu}>
                                {menuOpen ? <FaTimes className='text-black text-3xl' /> : <FaBars className='text-black text-3xl' />}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className='md:hidden bg-[#2a2c30] p-4 z-50'>
                            <ul className='flex flex-col justify-center items-center h-[70vh] space-y-8 uppercase font-bold text-lg tracking-wider text-white'>
                                <li className='cursor-pointer hover:text-blue-500'>home</li>
                                <li className='cursor-pointer hover:text-blue-500'>about</li>
                                <li className='cursor-pointer hover:text-blue-500'>products</li>
                                <li className='cursor-pointer hover:text-blue-500'>contact</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;