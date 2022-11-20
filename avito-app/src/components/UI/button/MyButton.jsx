import React from 'react';
import classes from './MyButton.module.css'

const MyButton = (props) => {
    return (
        <button onClick={props.onClick} disabled={false} className={classes.myBtn}>
            {props.children}
        </button>
    );
};

export default MyButton;