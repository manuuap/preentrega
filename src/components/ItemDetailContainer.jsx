import { useState, useEffect } from "react"
import data from "./../data/products.json"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        })
        promesa.then(result => {
            setProduct(result.find(product =>
                product.id === parseInt(productId)))
        })
    }, [productId])
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