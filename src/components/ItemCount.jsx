import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ItemCount() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('se disparó el efecto')

    return() =>{
      console.log('se desmonto')
    }
  }, [counter]
)

  const handleAdd = () => setCounter (counter + 1);
  const handleSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div 
      className="d-flex flex-column align-items-center"
      style={{ width: "100%", maxWidth: "200px", margin: "auto" }}
    >
      <p className='text-center border'>{counter}</p>  
      <div className="d-flex justify-content-between w-100">
        <Button size="m" variant="danger" onClick={handleSub}>
          -
        </Button>
        <Button size="m" variant="success" onClick={handleAdd}>
          +
        </Button>
      </div>
      <Button size="sm" variant="primary" className="mt-2">Add to cart</Button>
    </div>
  );   
}

export default ItemCount