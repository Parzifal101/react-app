import React from 'react';
import {Link} from 'react-router-dom'
import cl from './Navbar.module.css'

const Navbar = () => {
    console.log(cl);
    return (
        <div className={cl.nav}>
            <div className={cl.logoWrapper}></div>
            <div className={cl.linksWrapper}>
                <Link className={cl.link} to='/feed'>Главная</Link>
                <Link className={cl.link} to='/post'>Пост</Link>
            </div>
            <div className="timer"></div>
        </div>
    );
};

export default Navbar;