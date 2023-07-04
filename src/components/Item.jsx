import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    console.log(product.img);
    return (
        <Card
            style={{ width: '18rem' }}
            key={product.id}
            className="float-start"
        >
            <Card.Img variant="top"  src={product.img} alt={product.name_product} />
            <Card.Body>
                <Card.Title>{product.name_product}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Link to={`/item/${product.id}`}>
                    <Button variant="primary">Agregar</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
