import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer, NavWrapper } from '../styles/styles';

const NavBar = ({ user, logout }) => {
    return (
        <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            {/* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                */}
            <ul className='navbar-nav'>
                {user.token ? (
                    <button className='btn btn-logout' onClick={logout}>
                        log out
                    </button>
                ) : null}
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                {user.token ? 
                    null : (
                    <li className='nav-item'>
                        <Link to='/register' className='nav-link'>
                            Registration
                        </Link>
                    </li>
                )}
                {user.token ? 
                    null : (
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                            Log In
                        </Link>
                    </li>
                )}
            </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                        <i className='fas fa-cart-plus' />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    );
};

export default NavBar;