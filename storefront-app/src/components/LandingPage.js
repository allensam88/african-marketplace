import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axiosWithAuth from '../utils/axiosWithAuth';

const axios = axiosWithAuth();

export default function ItemList() {
    const [filteredData, updateData] = useState([]);

    const search = charArr => {
        console.warn(charArr, 'charArr update');
        updateData(charArr)
    };

    useEffect(() => {
        axios.get("https://african-marketplace-1.herokuapp.com/api/items")
        .then(response => {
            console.log(response.data);
            updateData(response.data);
        });
    }, []);

    return(
        <section className="item-list">
            <h2>item list</h2>
            {filteredData.map(char => {
                return <ItemCard key={char.id} item={char} />;
            })}
        </section>
    );
}
