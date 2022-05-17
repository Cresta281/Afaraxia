
import Home from './pages/Home/Home';
import './styles/estilos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/NavBar/Navbar'
import ProductsFiltered from './components/Products/ProductsFiltered'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetail from './components/Products/ItemDetail'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Products from './components/Products/Products'
import Contacto from './pages/Contacto/Contacto'
import CartForm from './components/Cart/CartForm'
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <ToastContainer />
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/filter' element={<ProductsFiltered />} />
                <Route path='/product' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/product/:itemId" element={<ItemDetail />} />
                <Route path='*' element={<ErrorPage />} /> 
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/form' element={<CartForm />} />
              </Routes>
              <Footer />
        </BrowserRouter>
    </CartProvider>
  )
};

export default App;
