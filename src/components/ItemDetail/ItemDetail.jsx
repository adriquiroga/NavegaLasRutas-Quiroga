import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';


function ItemDetail({detail}){

  return(
    <div className={styles.container}>
      <h3 className={styles.titulo}>{detail?.title}  </h3>
      <img src= {detail?.images[0]} className={styles.imagen} />
      <p className={styles.detalle}>{detail?.description}  </p>
      <ItemCount/>
    </div>
  )
}
export default ItemDetail;