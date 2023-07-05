import { Link } from "react-router-dom"
import cartImg from "./../assets/cart/cart.svg"

export const CartWidget = () => {
    return (
        <Link to={`/cart`}><img src={cartImg} alt="cart"></img></Link>
    )
}