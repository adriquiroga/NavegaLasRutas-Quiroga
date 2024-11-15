import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"



function ItemDetailContainer (){
  const[detail, setDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setDetail(res))
  }, [id])
  
  if (!detail) {
    return <p>Cargando...</p>;
  }

  return (
    <ItemDetail  detail = {detail} />
  )
}

export default ItemDetailContainer