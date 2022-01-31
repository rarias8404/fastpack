import React, {useState} from 'react';
import { packItems } from "../helpers/helper";

const Packaging = () => {
  const [items, setItems] = useState('');
  const [packedItems, setPackedItems] = useState('');
  const [total, setTotal] = useState(0);

  const handleChangeItems  = (event) => {
    setItems(event.target.value)
  }

  const handlePacking = () => {
    const values = items.split('');
    const result = packItems(values);
    setTotal(result.length)
    let packed = ''
    result.forEach(box => {
      packed = `${packed}${packed ? '/' : ''}${box.join('')}`
    })
    setPackedItems(packed)
  }

  return (
    <>
      <div>
        <label htmlFor="items">Enter incoming items</label>
        <input id='items' type="text" value={items} onChange={handleChangeItems}/>
      </div>
      <div>
        <label htmlFor="packedItems">Packed items</label>
        <input id='packedItems' type="text" value={packedItems} readOnly/>
      </div>
      <div>
        <span>{`total boxes: ${total}`}</span>
      </div>
      <div>
        <button onClick={handlePacking}>Click to pack items</button>
      </div>
    </>
  );
};

export default Packaging;