import { useState, useEffect } from 'react';
import ItemList from '../itemList';
import styles from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';

function ItemListContainer({text, mensaje}) {
  const [items, setItems] = useState([]);
  const {id} = useParams();
  const allProducts = 'https://dummyjson.com/products';
  const categoryProducts = `https://dummyjson.com/products/category/${id}`;

  useEffect(() => {
    fetch(id ? categoryProducts : allProducts)
        .then(res => res.json())
        .then(res => setItems (res.products) );
  }, [id, categoryProducts]);

  return (
    <>
      <h1 className={styles.titulo1}>{text}</h1>
      <p className={styles.parrafo1}>{mensaje}</p>
      <ItemList items = {items}/>
    </>
       
  );
}

export default ItemListContainer;
