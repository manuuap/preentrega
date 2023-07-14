import { Link } from "react-router-dom"
import cart from "./../assets/cart/cart.svg"

export const CartWidget = () => {
    return (
        <Link to={`/cart`}><img src={cart} alt="cart"/>0</Link>
    )
}