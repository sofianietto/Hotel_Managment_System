import { useState } from 'react'
import '../css/navbar.css'
import { NavLink, Outlet } from 'react-router-dom'
import { PiFlowerLotusFill } from 'react-icons/pi'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="navBarDos">
                <PiFlowerLotusFill className="nav-logo" />
                <div className={`nav-items ${isOpen && "open"}`}>
                    <NavLink to="/recepcion" className="navlink">Recepcion</NavLink>
                    <NavLink to="/habitaciones" className="navlink">Habitaciones</NavLink>
                    <NavLink to="/reservas" className="navlink">Reservas</NavLink>
                    <NavLink to="/clientes" className="navlink">Clientes</NavLink>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>
            </div>
                <div className="contenido">
                    <Outlet />
                </div>
        </>
    )
}

export default NavBar
