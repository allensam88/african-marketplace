import React, { useEffect, useState } from "react";
import MediaCard from "./ItemCard";
import axiosWithAuth from '../utils/axiosWithAuth';

const axios = axiosWithAuth();

export default function ItemList() {
    const [filteredData, updateData] = useState([]);

    useEffect(() => {
        axios.get("https://african-marketplace-1.herokuapp.com/api/items")
        .then(response => {
            console.log(response.data);
            updateData(response.data);
        });
    }, []);

    return(
        <section className="item-list">
            <div className="search-section">  
            </div>
            {filteredData.map(item => {
                    return <MediaCard key={item.id} item={item} />
            })}
        </section>
    );
}
