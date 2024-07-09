import useAxios from "../hooks/useAxios"
import EliminarHabitacion from "./EliminarHabitacion"
import Swal from 'sweetalert2'
import Modal from "./Modal"
import '../css/habitaciobes.css'

const ListaHabitaciones = () => {

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
        <div>
            <main className="habitaciones">
                <section className="habitaciones-header">
                    <h1>Lista de Habitaciones</h1>
                </section>

                <div className="habitaciones-body">
                    {data.map((habitacion) => (
                        <div className="containermain">
                            <div className="containeruno">
                                <div className="numero">
                                    <p>{habitacion.numero}</p>
                                </div>
                                <div className="tipo">
                                    <p>{habitacion.tipo}</p>
                                </div>
                            </div>
                            <div className="containerdos">
                                <p>{habitacion.descripcion}</p>
                            </div>
                            <div className="containertres">
                                <EliminarHabitacion habitacionId={habitacion._id} successCallback={successEliminar} />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>

    )
}

export default ListaHabitaciones
