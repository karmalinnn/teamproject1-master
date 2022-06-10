import React from "react";
import '../styles/main.css'

class Cart extends React.Component{
    render() {
        return (
            <div className={"Cart"}>
                <div><p>Корзина</p></div>
                <div><p>Тут Пусто!</p></div>

            </div>
        );
    };
};

export default Cart;