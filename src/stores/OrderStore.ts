import { makeObservable, observable, action } from "mobx";
import { Item } from "../types";

class OrderStore {
    items: Item[] = [];
    orders: Item[] = [];

    constructor() {
        makeObservable(this, {
            items: observable,
            orders: observable,
            addToOrder: action,
            deleteOrder: action,
            setItems: action,
            setFilteredItems: action,
        });
    }

    addToOrder(item: Item) {
        if (!this.orders.some((orderItem) => orderItem.id === item.id)) {
            this.orders.push(item);
        }
    }

    deleteOrder(id: number) {
        this.orders = this.orders.filter((el) => el.id !== id);
    }

    setItems(items: Item[]) {
        this.items = items;
    }
    setFilteredItems(filteredItems: Item[]) {
        this.items = filteredItems;
    }
}

const orderStore = new OrderStore();
export default orderStore;
