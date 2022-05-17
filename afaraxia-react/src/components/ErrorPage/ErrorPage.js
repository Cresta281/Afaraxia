import '../../styles/estilos.css'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
        <h2 className="errorTitle">
            ERROR! pagina no encontrada
        </h2>
        <button className="errorButton"><Link className="errorLink" to={'/'}>Volver</Link></button>
    </div>
  )
}

export default ErrorPage