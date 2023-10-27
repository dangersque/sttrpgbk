import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styled from "styled-components";

const MyForm = (props) => { 
  const { dispatch } = useContext(AppContext);

  const [name, setName] = React.useState("");
  const [val, setVal] = React.useState("");
  const [increment, setIncrement] = React.useState("");
  const [rate, setRate] = React.useState("Per Turn");


  function handleSubmit(e) {
    e.preventDefault();

    const newCounter = {
      id: new Date().getTime(),
      name: name,
      val: parseInt(val),
      increment: parseInt(increment),
      rate: rate,
      flag: false
    };

    
      dispatch({
          type: 'ADD_COUNTER',
          payload: newCounter
      });
      setName('');
      setVal('');
      setIncrement('');
}
return(


    <Group1 onSubmit={handleSubmit}>
        <TotalCounters>Counters</TotalCounters>

        <Form1 >
          <input
            type="text"
            class="textform"
            maxLength={12}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
          <input
            type="text"
            class="textform"
            maxLength={4}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Value"
            value={val}
          />
            <input
            type="text"
            class="textform"
            maxLength={4}
            onChange={(e) => setIncrement(e.target.value)}
            placeholder="Increment (+, -)"
            value={increment}
          />
          <select class="textform" value={rate} onChange={(e) => setRate(e.target.value)}>
            <option value="Per Turn">Per Turn</option>
            <option value="Per Minute">Per Minute</option>
            <option value="Per Hour">Per Hour</option>
            <option value="Per Day">Per Day</option>
            <option value="Static">Static</option>
          </select>
          <button class="textform" onClick={handleSubmit}>Submit</button>
          </Form1>
          </Group1>

  
);
};
export default MyForm;

const TotalCounters = styled.div`
  width: 100%;
  height: 108px;
  left: 0px;
  top: 0px;
  position: absolute;
  color: #d9d9d9;
  font-size: 96px;
  font-family: MedievalSharp;
  text-align: center;
  text-decoration-line: underline;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px 0px 14px 0px;
  padding: 104px 0px 0px 0px;
  box-sizing: border-box;
  top: 40px;
  z-index: 3;
`;

const Form1 = styled.div`
  width: 100%;
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 99.5px;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;

`;