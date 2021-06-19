import React from 'react';
// Sass Styles
import './directory.styles.scss';
// Components
import MenuItem from '../menu-item/menu-item.component';
// Redux Components
import { connect } from 'react-redux';
// Redux Selectors
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';


const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
