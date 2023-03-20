import React, { useContext } from 'react';
// import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const Counter = (props) => {
    const { dispatch } = useContext(AppContext);
    
    const handleDelete = (name) => {
        dispatch({
            type: 'DELETE_COUNTER',
            payload: name,
        });
    };

    const setVal = (name, val) => {
        const update = {
            name: name,
            val: val
        };
        dispatch({
            type: 'SET_VAL',
            payload: update
        });
    }

    const setIncrement = (name, val) => {
        const update = {
            name: name,
            val: val
        };
        dispatch({
            type: 'SET_INC',
            payload: update
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <input required='required' type='number' id='val' value={props.val} style={{size: 1}}
        step={ 1 } onChange={(event) => setVal(props.name, event.target.value)}>
        </input>
        <input required='required' type='number' id='val' value={props.increment} style={{size: 1}}
        step={ 1 } onChange={(event) => setIncrement(props.name, event.target.value)}>
        </input>
        <td>{props.rate}</td>
        <td><button size='1.5em' onClick={() => handleDelete(props.name)}></button></td> 
        </tr>
    );
};
export default Counter;
