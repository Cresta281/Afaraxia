
import {Link} from 'react-router-dom'

const CartWidget = () => {
    
    return (
        <div className="CartDiv">
            <div className="Cart">
                <i className="fa-solid fa-cart-shopping" onClick={<Link to='/cart'/>}> </i>
            </div>
        </div>
    )
}

export default CartWidget  