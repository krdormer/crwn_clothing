import React from 'react';
// SASS Styles
import './collection-item.styles.scss';
// Components
import CustomButton from '../custom-button/custom-button.component';
// Connect gives access to redux state/store
import { connect } from 'react-redux';
// Redux Actions
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
