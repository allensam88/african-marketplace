import React, { useEffect, useState } from "react";
import MediaCard from "./ItemCard";
import axiosWithAuth from '../utils/axiosWithAuth';
import SearchForm from './Search.js';

const axios = axiosWithAuth();

export default function ItemList() {
    const [items, updateData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const search = charArr => {
        console.warn(charArr, 'charArr update');
        setFilteredData(charArr)
    };

    useEffect(() => {
        axios.get("https://african-marketplace-1.herokuapp.com/api/items")
        .then(response => {
            updateData(response.data);
            setFilteredData(response.data);
        });
    }, []);

    return(
        <section className="item-list">
            <div className="search-section">
                <h1 className="marketplace-header">Marketplace test</h1>
            <SearchForm search={search} items={items}/>
            </div>
            {filteredData.map(item => {
                    return <MediaCard key={item.id} item={item}/>
            })}
        </section>
    );
}
