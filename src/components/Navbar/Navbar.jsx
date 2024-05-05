import { useState } from 'react';
import { useContext } from "react";
// import { useOutletContext } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // const [setIsLogged] = useOutletContext()
    const user = useContext(UserContext);

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Inicio' },
        { id: 2, text: 'Cursos' },
        { id: 3, text: 'Nosotros' },
        { id: 4, text: 'Contacto' },
        { id: 5, text: user?.name },
        { id: 6, text: 'Salir' }
    ];

    return (
        <>
            <div className='bg-black flex justify-between items-center h-24 max-w-[1920px] mx-auto px-4 text-white'>
                {/* Logo */}
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>E-Learning</h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => {
                        <li
                            key={item.id}
                            className='sm:align-middle md:align-bottom lg:align-text-top xl:align-text-bottom p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        >
                            {item.text}
                        </li>
                    })}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>E-Learning</h1>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => {
                        <li
                            key={item.id}
                            className='sm:align-middle md:align-bottom lg:align-text-top xl:align-text-bottom p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                    })}
                </ul>
            </div>

        </>
    );
};

export default Navbar;