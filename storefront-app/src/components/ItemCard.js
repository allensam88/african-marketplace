import React from 'react';

const ItemCard = ({item, editItems}) => {
console.log(item);

    return(
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <div><p>{item.price}</p>
            <p>{item.category}</p></div>
            <p>{item.location}</p>
            <div>
            <button onClick={() => editItems(item)}>save</button>
            {/* <button onClick={() => setItems(false)}>cancel</button> */}
          </div>
        </div>
    )



}
export default ItemCard;