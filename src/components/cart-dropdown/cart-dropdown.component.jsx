import React from 'react';
// SASS Styles
import './cart-dropdown.styles.scss';
// Other Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
// Redux connect 
import { connect } from 'react-redux';
// Redux Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItemsCount
});

export default connect(mapStateToProps)(CartDropdown);