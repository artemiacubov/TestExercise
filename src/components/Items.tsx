import React from "react";
import { observer } from "mobx-react";
import ItemComponent from "./Item";
import orderStore from "../stores/OrderStore";
import { Item } from "../types";
const Items: React.FC = observer(() => {
    const handleAddToOrder = (item: Item) => {
        orderStore.addToOrder(item);
    };

    return (
        <main>
            {orderStore.items.map((el) => (
                <ItemComponent key={el.id} item={el} onAdd={handleAddToOrder} />
            ))}
        </main>
    );
});

export default Items;
