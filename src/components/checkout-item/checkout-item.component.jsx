import React from 'react';
import './checkout-item.styles.scss';

import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item' />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#100094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#100095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);