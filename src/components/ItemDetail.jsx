export const ItemDetail = ({ product }) => {
    return (
        <>
            <div>{product.brand}</div>
            <div>{product.name_product}</div>
            <div>{product.price}</div>
            <img src={product.img}></img>
            <button variant="primary">Agregar</button>
        </>
    )
}
