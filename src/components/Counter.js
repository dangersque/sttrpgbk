import React, { useContext } from 'react';
// import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import styled, { css } from "styled-components";


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

        <CounterData>
          <table>
            <tr class="counterRows">
            <td class="counterRows">
                <Name>{props.name}</Name>
            </td>
            <td>
            
            <Value>
            <input required='required' type='number' id='val' class="counterInput" value={props.val} style={{size: 1}}
            step={ 1 } onChange={(event) => setVal(props.name, event.target.value)}>
            </input>
            </Value>
            </td>
            <td>
            
            <Increment>
            <input required='required' type='number' id='val' class="counterInput" value={props.increment} style={{size: 1}}
            step={ 1 } onChange={(event) => setIncrement(props.name, event.target.value)}>
            </input>
            </Increment>
            </td>
            <td>
            
            <Rate>
                {props.rate}
            </Rate>
            </td>
            <td>
            <Delete>     

                <button class="delete" rc="https://file.rendit.io/n/6oDf1WjWBTjNB7HYUEL7.svg"  onClick={() => handleDelete(props.name)}></button> 

            </Delete></td></tr></table></CounterData>

            




    );
};
export default Counter;

const CounterData = styled.div`
  // width: 100%;
  max-width: 2000px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  top: 20px;
  left: 76px;
  overflow-y: auto;
  z-index: 5;
  whiteSpace: nowrap;
  textAlign: center;
`;

const Name = styled.div`
  width: 100%;
  max-width: 140px;
  max-height: 50px;
  display: flex;
  font-size: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 200px 40px 100px;
  box-sizing: border-box;
  background-color: #9a0b0b;
  white-space: nowrap;
  textAlign: center;
`;

const Value = styled.div`
    // width: 100%;
  max-width: 130px;
  max-height: 50px;
  display: flex;
  font-size: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 160px 40px 80px;
  box-sizing: border-box;
  background-color: #9a0b0b;
  whiteSpace: nowrap;
  text-align: center;
`;

const Increment = styled.div`
  width: 100%;
  max-width: 130px;
  max-height: 50px;
  display: flex;
  font-size: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 140px 40px 100px;
  box-sizing: border-box;
  background-color: #9a0b0b;
  whiteSpace: nowrap;
  text-align: center;
`;

const Rate = styled.div`
  width: 100%;
  // max-width: 180px;
  max-height: 50px;
  display: flex;
  font-size: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 80px 40px 80px;
  box-sizing: border-box;
  background-color: #9a0b0b;
  whiteSpace: nowrap;
  textAlign: center;
  text-overflow: ellipsis;
`;

const Delete = styled.div`
  // width: 100%;
  max-width: 130px;
  max-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 140px 40px 100px;
  box-sizing: border-box;
  background-color: #9a0b0b;
  whiteSpace: nowrap;
`;