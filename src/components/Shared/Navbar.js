import React from 'react';
import portfolio from '../../assets/portfolio/Md Thowhidul Islam Molla.pdf'

const Navbar = () => {
    const menuItems = <>
        <li><a href='#aboutMe' className='focus:bg-transparent hover:text-primary font-bold'>About</a></li>
        <li><a href='#projects' className='focus:bg-transparent hover:text-primary font-bold'>Projects</a></li>
        <li><a href='#contact' className='focus:bg-transparent hover:text-primary font-bold'>Contact</a></li>
        <li><a href={portfolio} download='Md_Thowhidul_Islam_Molla.pdf' className='active:bg-transparent'><button className='outline outline-2 px-4 py-1 outline-primary font-bold text-lg text-primary'>Resume</button></a></li>
    </>
    return (
        <div class="bg-secondary text-white mx-4 px-4 lg:mx-20 lg:px-10 pb-14">
            <div className='navbar'>
                <div class="navbar-start">
                    <a href='/' class="normal-case text-xl">Thowhid</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex='0' class="menu menu-compact dropdown-content mt-5 relative right-2 shadow bg-base-100 rounded-box w-96 bg-[#F5F2E8] text-black  ">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;