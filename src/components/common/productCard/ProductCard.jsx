import { Link } from "react-router-dom";
import './productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="producto">
      <h3>{product.title}</h3>
      <img className="fotoProducto"
        src={product.img}
        alt={product.title}
      />
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <Link to={`/itemDetail/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default ProductCard;
