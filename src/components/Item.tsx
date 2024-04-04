import React from "react";
import { Item } from "../types";

interface Props {
    item: Item;
    onAdd: (item: Item) => void;
}

const ItemComponent: React.FC<Props> = ({ item, onAdd }) => {
    return (
        <div className="item">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>{item.price}$</b>
            <div className="add-to-cart" onClick={() => onAdd(item)}>
                +
            </div>
        </div>
    );
};

export default ItemComponent;
