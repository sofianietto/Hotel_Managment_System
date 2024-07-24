import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from "react-router-dom"
import '../css/AñadirHabitacion.css'


const AñadirHabitacion = () => {


    const navegate = useNavigate()
    const initialValues = {
        numero: '',
        tipo: '',
        descripcion: '',
    }
    console.log(initialValues)

    const { values: Habitacion, handleChange } = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/habitacion', Habitacion)
            .then(res => {
                console.log(res.data.Habitacion)
                navegate("/recepcion")
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste una Habitacion!!",
                });
                setError("")
                Navigate("/habitaciones")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    <div>
                        <div>{error}</div>
                        <div className="input-group">
                            <label>Numero de Habitacion: </label>
                            <input type="number" placeholder="1" name="numero" value={Habitacion.numero} onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label>Tipo de Habitacion: </label>
                            <input type="text" placeholder="Matrimonial" name="tipo" value={Habitacion.tipo} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Descripcion de la habitacion (opcional): </label>
                            <input type="text" placeholder="Una cama, minibar..." name="descripcion" value={Habitacion.descripcion} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="botonA">Añadir Habitacion</button>

            </form>
        </>
    )
}

export default AñadirHabitacion