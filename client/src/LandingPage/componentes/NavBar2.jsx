import React, { useState } from 'react'
import './NavBar2.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots} from 'react-icons/tb'
import { PiFlowerLotusFill } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'


const NavBar2 = () => {
// para mostrar el navegador a
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavBar')
    }

// para cerrar el navegador
    const removeNav = () => {
        setActive('navBar')
    }


    return (
        <section className='navBarSection'>
            <div className="header">
                <div className="logoDiv">
                    <a href="#" className="logo text-decoration-none">
                        <h1 className='flex'><PiFlowerLotusFill className='icon' />
                            Flor de Loto
                        </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navlink text-decoration-none">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink text-decoration-none">Habitaciones</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className='btn loginBtn '>
                                <NavLink href="/login" className='text-decoration-none'>Login</NavLink>
                            </button>
                            <button className='btn loginBtn'>
                                <a href="#" className='text-decoration-none'>Registrarse</a>
                            </button>
                        </div>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icon'/>
                </div>
            </div>
        </section>
    )
}

export default NavBar2