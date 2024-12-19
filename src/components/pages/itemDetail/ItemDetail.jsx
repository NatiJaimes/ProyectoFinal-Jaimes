import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import './itemDetail.css'
import { ScaleLoader } from "react-spinners";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  if (!product.id){
    return <ScaleLoader />
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} className="imagenDetalle" />
      <p>{product.description}</p>
      <p>Stock Disponible: {product.stock}</p>
      <p>$ {product.price}</p>
      {product.stock > 0 ? (
        <Counter product={product} />
      ) : (
        <h2>Producto sin stock</h2>
      )}
    </div>
  );
};

export default ItemDetail;
