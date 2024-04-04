// // stores.ts
// import { observable, action, makeObservable } from 'mobx';
//
// interface Item {
//     id: number;
//     image: string;
//     title: string;
//     description: string;
//     price: number;
// }
//
// interface Category {
//     key: string;
//     name: string;
// }
//
// class AppStore {
//     orders: Item[] = [];
//     items: Item[] = [];
//     category: string = 'all';
//
//     constructor() {
//         makeObservable(this, {
//             orders: observable,
//             items: observable,
//             category: observable,
//             setOrders: action,
//             setItems: action,
//             setCategory: action
//         });
//     }
//
//     setOrders(orders: Item[]) {
//         this.orders = orders;
//     }
//
//     setItems(items: Item[]) {
//         this.items = items;
//     }
//
//     setCategory(category: string) {
//         this.category = category;
//     }
// }
//
// const appStore = new AppStore();
// export default appStore;
