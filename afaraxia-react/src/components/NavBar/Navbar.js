import '../../styles/estilos.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Afaraxia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <Link className="navLinks" to='/'> Home </Link>
                  <Link className="navLinks" to='/list'> Products </Link>
                  <Link className="navLinks" to='/cart'><CartWidget /> </Link>
                </ul>
                </div>
            </div>
        </nav>
   </>
  )
}

export default Navbar