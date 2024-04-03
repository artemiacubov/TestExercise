import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems:[],
            items: []
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data });
            })
    }
    render() {
        return (
            <div className='wrapper'>
                <Header oredrs={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }

    chooseCategory(category){
        console.log(category)
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
