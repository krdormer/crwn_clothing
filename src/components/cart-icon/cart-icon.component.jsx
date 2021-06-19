import React from 'react';
// Import SVG file as React component, name is ShoppingIcon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// Styles
import './cart-icon.styles.scss';

// Connect component for giving access to redux store/state 
import { connect } from 'react-redux';
// Redux actions 
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// Redux Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);