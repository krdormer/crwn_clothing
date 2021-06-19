import React from 'react';
// Routing component for linking to other routes, modified a tag 
import { Link } from 'react-router-dom';
// Redux component for connecting to redux store / state
import { connect } from 'react-redux';
// Authentication method from firebase, used to sign user out here 
import { auth } from '../../firebase/firebase.utils';
// SVG import as React Component, name it Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
// Other components
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
// SASS Styles
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
