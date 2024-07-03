import React from 'react';
import logoImg from "../assets/logo.svg";
import { navLists } from "../constants";
import { CiSettings, CiUser } from 'react-icons/ci';
import { MdCircleNotifications } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header className='w-full bg-white'>
            <div className='flex items-center justify-between px-4 py-2'>
                <div className=""><img src={logoImg} alt='' className='w-8 cursor-pointer' /></div>
                <nav className="flex items-center gap-4 md:flex">
                    {navLists.map((nav) => (
                        <NavLink to={nav.path} key={nav.name} 
                        className={({ isActive }) => `flex items-center gap-2 translate-all rounded-full px-5 py-3 text-sm font-semibold duration-700 hover:text-white ${isActive ? 'bg-[#025BD4] text-white' : 'text-slate-600'}`}>
                            {nav.icon}
                            {nav.name}
                        </NavLink>
                    ))}
                </nav>
                <div className='flex items-center gap-5'>
                    <CiSettings className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white'/>
                    <MdCircleNotifications className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white' />
                    <CiUser className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white' />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
