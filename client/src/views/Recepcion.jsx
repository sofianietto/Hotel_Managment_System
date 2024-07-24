import { NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios"
import { LuBedDouble } from "react-icons/lu";
import "../css/recepcion.css"

const Recepcion = () => {

    const { data, isLoading, error, setData } = useAxios('http://localhost:8000/api/habitacion')
    if (error) {
        return <div>{error.message}</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div className="recepcion">
            <section>
                <h1>Entrada de hospedamiento</h1>
                <hr />
            </section>
            <div className="flex">
                {data.map((habitacion) => (
                    <div className="flex">
                        <div className="container">
                            <div className="card">
                                <div className="flex-uno">
                                    <div className="logo-recepcion flex-1">
                                        <LuBedDouble />
                                    </div>
                                    <div className="aja flex-2">
                                        <h5 className="card-title">{habitacion.numero}</h5>
                                        <p className="card-text">{habitacion.tipo}</p>
                                    </div>
                                </div>
                                <div className="botonjij">
                                    <NavLink to="/reservas" className="botonreserva" >Reservar</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recepcion
