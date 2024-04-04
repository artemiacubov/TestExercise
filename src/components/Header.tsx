import React, { useState } from "react";
import { observer } from "mobx-react";
import { FiTrash2 } from "react-icons/fi";
import orderStore from "../stores/OrderStore";

const Header: React.FC = observer(() => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className="logo">Test Shop</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <svg
                    onClick={() => setCartOpen(!cartOpen)}
                    className={`shop-cart-button ${cartOpen && "active"}`}
                    height="15pt"
                    viewBox="-35 0 512 512.00102"
                    width="15pt"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/>
                </svg>


                {cartOpen && (
                    <div className="shop-cart">
                        {orderStore.orders.length > 0 ? (
                            <div>
                                {orderStore.orders.map((el) => (
                                    <div key={el.id} className="item">
                                        <img src={el.image} alt="" />
                                        <h2>{el.title}</h2>
                                        <b>{el.price}$</b>
                                        <FiTrash2
                                            className="delete-icon"
                                            onClick={() => orderStore.deleteOrder(el.id)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty">
                                <h2>Товаров нет</h2>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
});

export default Header;
