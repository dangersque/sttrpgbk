import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Counter from './Counter';

const CounterList = () => {
    const { counters } = useContext(AppContext);
    
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Name</th> 
              <th scope="col">Value</th>
              <th scope="col">Increment</th>
              <th scope="col">Rate</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {counters.map((counter) => (
                <Counter id={counter.id} key={counter.id} name={counter.name} val={counter.val}
                increment={counter.increment} rate={counter.rate} /> 
                
            ))}
            </tbody>
        </table>
    );
};
export default CounterList;

