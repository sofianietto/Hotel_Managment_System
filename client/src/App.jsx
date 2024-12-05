import './App.css'
import { Route, Routes } from 'react-router-dom';
import Habitaciones from './views/Habitaciones';
import Reservas from './views/Reservas';
import Recepcion from './views/Recepcion';
import NavBar from './componentes/NavBar';
import { useState } from 'react';
import LandingPage from './LandingPage/LandingPage';
import AñadirReserva from './componentes/AñadirReserva';
import Clientes from './views/Clientes';
import Login from './LoginPage/login';


function App() {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const userInfo = userDetails ? userDetails : null;
  const [user, setUser] = useState(userInfo)
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  const setUserKeyValue = (clave, valor) => {
      setUser({ ...user, [clave]: valor })
  }

  const objetoContexto = {
      user,
      setUser,
      setUserKeyValue
  }

  return (
    <Routes>
      <Route path='/home' element={<LandingPage />} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
      <Route path="/añadirreservas" element={<AñadirReserva />} />
      <Route path='/' element={<NavBar />}>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/recepcion" element={<Recepcion />} />
      </Route>
    </Routes>
  )
}

export default App
