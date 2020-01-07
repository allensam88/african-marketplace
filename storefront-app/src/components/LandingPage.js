import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import axios from "axios";

export default function ItemList() {

    const [items, setItems] = useState([]);
    const [filteredData, updateData] = useState([]);

    const search = charArr => {
        console.warn(charArr, 'charArr update');
        updateData(charArr)
    };

    useEffect(() => {
        axios.get("https://african-marketplace-1.herokuapp.com/api/users/:id/items")
        .then(response => {
            console.log(response.data.results);
            setItems(response.data.results);
            updateData(response.data.results);
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