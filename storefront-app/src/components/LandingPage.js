import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axiosWithAuth from '../utils/axiosWithAuth';
import SearchForm from './Search';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const axios = axiosWithAuth();

export default function ItemList() {
    const [items, setItems] = useState([]);
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
            <div className="nav-section">
                <h1>buy items</h1>
            </div>
            <Logout/>
            {filteredData.map(char => {
                    return <ItemCard key={items.name} item={items} />
            })}
        </section>
    );
}