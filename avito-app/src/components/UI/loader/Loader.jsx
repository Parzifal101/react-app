import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loader__container}>
            <h2>Загрузка...</h2>
            <div className={cl.loader}></div>
        </div>
    );
};

export default Loader;