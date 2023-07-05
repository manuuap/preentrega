import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    console.log(product.img);
    return (
        <Card
            style={{ width: '18rem', height: '26rem', margin:'1rem', alignItems:'center' }}
            key={product.id}
            className="float-start"
        >
            <Card.Img variant="top"  src={product.img} alt={product.name_product} style={{maxWidth:'200px', maxHeight:'200px', marginTop:'1rem'}} />
            <Card.Body>
                <Card.Title>{product.name_product}</Card.Title>
                <Card.Text>
                    {product.brand}
                </Card.Text>
                <Link to={`/item/${product.id}`}>
                    <Button variant="primary" style={{textAlign:'center'}}>Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
