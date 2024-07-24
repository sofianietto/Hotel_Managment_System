import useAxios from "../hooks/useAxios"
import EliminarHabitacion from "./EliminarHabitacion"
import Swal from 'sweetalert2'
import '../css/habitaciobes.css'
import { useState } from "react"
import Modal from "./Modal"
import AñadirHabitacion from "./AñadirHabitacion"

const ListaHabitaciones = () => {

    const [showModal, setShowModal] = useState(false)

    const { data, isLoading, error, setData } = useAxios('http://localhost:8000/api/habitacion')
    if (error) {
        return <div>{error.message}</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const successEliminar = (habitacionId) => {
        console.log(habitacionId)
        Swal.fire({
            icon: "success",
            title: "Eliminado",
            text: "eliminaste una habitacion",
        });
        navegate("/recepcion")
    }


    return (
        <>
            <div>
                <div className="row">
                    <div>
                        <h1>Lista de Habitaciones</h1>
                    </div>
                    <div>
                        <button className="BotonAñadirHabitacion" onClick={() => setShowModal(true)}>Añadir Habitacion</button>
                    </div>
                </div>
                <hr />
                <table className="Table">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Tipo</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((habitacion) => (
                            <tr key={habitacion._id}>
                                <td className="numero">{habitacion.numero}</td>
                                <td>{habitacion.tipo}</td>
                                <td>{habitacion.descripcion}</td>
                                <td> <EliminarHabitacion habitacionId={habitacion._id} successCallback={successEliminar} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <Modal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                titulo="Añadir Habitación"
            >
                <AñadirHabitacion />
            </Modal>
        </>
    )
}

export default ListaHabitaciones
