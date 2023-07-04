import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Spinner } from "react-bootstrap"

import data from "./../data/products.json"
import { ItemList } from "./ItemList"


export const ItemListContainer = props => {
    const [products, setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        })
        promesa.then(result => {
            if (id) {
                setProducts(result.filter(product => product.category === id))
            } else {
                setProducts(result)
            }
        })
    }, [id])

    return (
        <Container>
            <h1>{props.greeting}</h1>
            {products.length === 0 ? (

                <Spinner animation="border" role="status">
                    <span className="visually-hidden align-items-center">Loading...</span>
                </Spinner>

            ) : (
                <ItemList products={products} />
            )}
        </Container>
    )
}