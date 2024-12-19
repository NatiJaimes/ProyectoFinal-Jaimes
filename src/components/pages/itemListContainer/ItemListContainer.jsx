import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ScaleLoader } from "react-spinners";

const ItemListContainer = () => {
    const [myProducts, setMyProducts] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "products");
        let refCollection = productsCollection;
        if(name){
            const productsCollectionFiltered = query(productsCollection, where("category", "==", name));
            refCollection = productsCollectionFiltered;
        }
        const getProducts = getDocs(refCollection);
        getProducts.then((res) => {
            let products = res.docs.map(elemento => {
                return {...elemento.data(), id: elemento.id };
            });
            setMyProducts(products);
        });
    }, [name]);

    if (myProducts.length === 0) {
        return <ScaleLoader />
    }

    return <ItemList myProducts={myProducts} />;
}

export default ItemListContainer;