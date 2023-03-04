import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

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
    
}
return(

  <div>

  <h1>Counters</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
          <input
            type="text"
            onChange={(e) => setVal(e.target.value)}
            placeholder="Value"
            value={val}
          />
            <input
            type="text"
            onChange={(e) => setIncrement(e.target.value)}
            placeholder="Increment (+, -)"
            value={increment}
          />
          <select value={rate} onChange={(e) => setRate(e.target.value)}>
            <option value="Per Turn">Per Turn</option>
            <option value="Per Minute">Per Minute</option>
            <option value="Per Hour">Per Hour</option>
            <option value="Per Day">Per Day</option>
            <option value="Static">Static</option>
          </select>
              <button type="submit">Submit</button>
          </form>
  </div>
  
);
};
export default MyForm;

