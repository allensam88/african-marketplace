import React from 'react';

const ItemCard = ({item}) => {
console.log(item);

    return(
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <div><p>{item.price}</p>
            <p>{item.category}</p></div>
            <p>{item.location}</p>
        </div>
    )



}
export default ItemCard;