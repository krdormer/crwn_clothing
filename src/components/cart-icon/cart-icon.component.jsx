import React from 'react';
// Import SVG file as React component, name is ShoppingIcon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// Styles
import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

export default CartIcon;