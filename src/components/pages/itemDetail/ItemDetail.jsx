import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import './itemDetail.css'

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} className="imagenDetalle" />
      <p>{product.description}</p>
      <p>Stock Disponible: {product.stock}</p>
      <p>$ {product.price}</p>
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
