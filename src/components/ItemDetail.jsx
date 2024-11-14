import ItemCount from "./ItemCount"

function ItemDetail({detail}){

  return(
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h3>{detail?.title}</h3>
      <img src= {detail?.images[0]} style={{width: 200}} />
      <p>{detail?.description}</p>
      <ItemCount/>
    </div>
  )
}
export default ItemDetail