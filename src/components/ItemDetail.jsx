
import { useState } from "react"
import { ItemCount } from "./ItemCount"
export const ItemDetail = ({ product }) => {

    const [initial, setInitial] = useState (0)

    const onAdd = () => setInitial((prev) => prev + 1)

    return (
        <>
            <div>{product.brand}</div>
            <div>{product.name_product}</div>
            <div>{product.price}</div>
            <img src={product.img} alt={product.name_product}></img>
            <ItemCount stock={product.stock} funcion={onAdd}/>
            {initial}
        </>
    )
}
/* Inicial, stock, onAdd */