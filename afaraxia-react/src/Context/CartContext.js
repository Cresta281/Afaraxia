import { createContext, useEffect, useState } from 'react' 
import { toast } from 'react-toastify'
export const CartContext = createContext()
 
export const CartProvider = ({children}) => {

    const [category,setCategory] = useState()

    
  
    const selectCategory = (cat) => {
        setCategory(cat)
        console.log(category)
    }

    const [cartItems,setCartItems] = useState(()=> {
        try {
            const productsInLocalStorage = localStorage.getItem('cartProducts')
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : []
        } catch (error) {
            return []
        }
    })
    

    useEffect(()=> {
        localStorage.setItem('cartProducts',JSON.stringify(cartItems))
        console.log(cartItems)
    },[cartItems])

    const clearCart = () => {
        setCartItems([])
    }
    const addItemToCart = (product) => {
        const inCart = cartItems.find((productInCart)=> productInCart.id === product.id)
    
        if(inCart){
            setCartItems(cartItems.map((productInCart) => {
                if(productInCart.id === product.id) {
                    toast.success(`Se ha agregado ${productInCart.title}`, {position: "top-right", autoClose: 2000})
                    return {...inCart, amount: inCart.amount + 1}
                } else return productInCart 
            }))
        } else {
            setCartItems([...cartItems, {...product, amount: 1}])
            toast.success(`Se ha agregado ${product.title}`, {position: "top-right", autoClose: 2000})
        
        }
    }


    const deleteItemToCart = (product) => {
        const inCart = cartItems.find((productInCart)=> productInCart.id === product.id
        )
        toast.error(`Se ha eliminado ${inCart.title}` ,{position: "top-right", autoClose: 2000})
        if(inCart.amount === 1){
            setCartItems(cartItems.filter((productInCart)=> productInCart.id !== product.id))
        }else {
            setCartItems(
                cartItems.map((productInCart) => {
                if(productInCart.id === product.id) {
                    return {...inCart, amount: inCart.amount - 1}
                } else return productInCart;
            }))
        }
        
    }
    const getTotal = () => {
        let total = 0
        cartItems.forEach(prod => {
            total += prod.amount * prod.price
        })
        
        return total
    }
  
    return (
        <CartContext.Provider value={{cartItems, category, clearCart, selectCategory, addItemToCart, deleteItemToCart, getTotal} } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 