import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const TimeKeeper = (props) => {
const { dispatch,turn,minute,hour,day  } = useContext(AppContext);

    const accountTime = (cost, rate) => {
        const KeeperProps = {
            cost: cost,
            rate: rate
        };
        dispatch({
            type: 'ACCOUNT_TIME',
            payload: KeeperProps
        });
        dispatch({
            type: 'ACCOUNT_COUNTER',
            payload: KeeperProps
        });
    }

    const resetTime = () => {
        dispatch({
            type: 'RESET_TIME'
        });
    }
    return (
        <div className="counter">
             <button onClick={() => accountTime(2, 'Per Day')}>Days +2</button>
             <div className="counter--count">
                 <h1>{day}</h1>
             </div>
             <button onClick={() => accountTime(1, 'Per Day')}>Day +1</button>
            <button onClick={() => accountTime(2, 'Per Hour')}>Hours +2</button>
             <div className="counter--count">
                 <h1>{hour}</h1>
             </div>
             <button onClick={() => accountTime(1, 'Per Hour')}>Hour +1</button>
             <button onClick={() => accountTime(10, 'Per Minute')}>Minutes +10</button>
             <div className="counter--count">
                 <h1>{minute}</h1>
             </div>
             <button onClick={() => accountTime(1, 'Per Minute')}>Minute +1</button>

            <div className="counter--count">
                <h1>{turn}</h1>
            </div>
            <button onClick={()=> accountTime(1, 'Per Turn')}>Turns +1</button>
            <button onClick={() => accountTime(2, 'Per Turn')}>Turns +2</button>            
            <div><button onClick={()=> resetTime()}>Reset All</button>   
            </div>
            </div>
    )
}

export default TimeKeeper;