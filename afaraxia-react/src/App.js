
import Home from './pages/Home/Home';
import './styles/estilos.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/NavBar/Navbar'
import Products from './components/Products/Products'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
              <Footer />
        </BrowserRouter>
    </CartProvider>
  )
};

export default App;
