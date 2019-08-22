import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, logout }) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'>
            <form className='form-inline'>
                <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'/>
                <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Hit me!</button>
            </form>
            <ul className='navbar-nav'>
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
                )};
                {user.token ? 
                    null : (
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                            Log In
                        </Link>
                    </li>
                )};
                {user.token ? (
                    <button className='btn btn-warning' onClick={logout}>
                        Log Out
                    </button>
                ) : null};
            </ul>
        </nav>
    );
};

export default NavBar;