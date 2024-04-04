import React, { useEffect } from "react";
import { observer } from "mobx-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import orderStore from "./stores/OrderStore";

const App: React.FC = observer(() => {
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                orderStore.setItems(data);
            });
    }, []);

    const chooseCategory = (category: string) => {
        console.log(category);
    };

    return (
        <div className="wrapper">
            <Header />
            <Categories chooseCategory={chooseCategory} />
            <Items />
            <Footer />
        </div>
    );
});

export default App;
