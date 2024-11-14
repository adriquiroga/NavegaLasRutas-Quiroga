import React from 'react';
import carrito from '../../assets/carrito.png';
import styles from './CartWidget.module.css';

function CartWidget({cantidad}) {
  return (
      <div className = {styles.miCarrito}>
          <img src={carrito} alt="Carrito"  />     
          {cantidad > 0 && (
        <span className= {styles.cantidadProductos}>{cantidad}</span>
      )}     
      </div>         
  );
}

export default CartWidget;