import { Fragment } from "react"
import ListaHabitaciones from "../componentes/ListaHabitaciones"
import Modal from "../componentes/Modal"
import { useState } from "react"
import '../css/habitaciobes.css'


const Habitaciones = () => {
    const [showModal, setShowModal] = useState(false)

    return (
    
            <Fragment>

                <div className="container mt-3">
                    <ListaHabitaciones />
                    <button className="BotonAñadirHabitacion" onClick={() => setShowModal(true)}>Añadir Habitacion</button>
                </div>
                <Modal isVisible={showModal}/>
            </Fragment>
        
    )
}

export default Habitaciones
