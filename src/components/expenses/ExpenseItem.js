import React from 'react';
// import { useState } from 'react';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // // State is used for data which changes and you want to tell React to re-eveluate it and trigger the component to run again with the new values.
    // // useState() returns: 1) the given variable (props.title) 2) the function to update the variable
    // // destructuring to store the variable and the function to update the variable into title and setTitle (naming convention variablename, setVariablename)
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated');
    // };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;
