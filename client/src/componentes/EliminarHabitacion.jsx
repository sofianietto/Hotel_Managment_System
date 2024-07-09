import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import '../css/habitaciobes.css'

const EliminarHabitacion = ({ habitacionId, successCallback }) => {

    const EliminarHabitacion = (habitacionId) => {

        Swal.fire({
            title: "Seguro que quieres eliminarlo?",
            text: "Estas a punto de eliminar una habitacion.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/habitacion/${habitacionId}`)
                    .then(res => {
                        console.log(res)
                        successCallback(habitacionId)
                    })
            }
        });
    }

    return (
        <button onClick={() => EliminarHabitacion(habitacionId)} className="BotonEliminar">Eliminar</button>
    )
}

EliminarHabitacion.propTypes = {
    habitacionId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default EliminarHabitacion