import React from 'react';
// SASS Styles
import './collection-item.styles.scss';

// Components
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ id, name, price, imageUrl }) => (
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
    <CustomButton inverted>Add To Cart</CustomButton>
  </div>
);

export default CollectionItem;
