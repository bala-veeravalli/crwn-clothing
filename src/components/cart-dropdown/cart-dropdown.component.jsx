import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));