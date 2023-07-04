import { useState, useEffect } from "react"
import data from "./../data/products.json"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        })
        promesa.then(result => {
            setProduct(result[3])
        })
    }, [])
    return (
        <>
            <div>Detalles</div>
            {product.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <ItemDetail product={product} />
            )}
        </>
    )
}