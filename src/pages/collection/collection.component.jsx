import React from 'react';
// Sass Styles
import './collection.styles.scss';
// Components
import CollectionItem from '../../components/collection-item/collection-item.component';
// Redux Component
import { connect } from 'react-redux';
// Redux Selectors 
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log(collection)
    return (
    <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)}

// Ownprops = props of component which is being wrapped 
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);