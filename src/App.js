import React from 'react';
// import { useState } from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import TimeKeeper from './components/TimeKeeper';
import MyForm from './components/Form';
import CounterList from './components/CounterList';

export default function App() {
  return (
    <AppProvider>
    <div>
      <TimeKeeper />
      <MyForm />
      <CounterList />
    </div>

    </AppProvider>
  )
}
//   const [turn, setTurn] = React.useState(0)
//   const [minute, setMinute] = React.useState(0)
//   const [hour, setHour] = React.useState(0)
//   const [day, setDay] = React.useState(0)

//   const [todos, setTodos] = React.useState([]);
//   const [todo, setTodo] = React.useState("");
//   const [values, setValues] = React.useState([]);
//   const [val, setVal] = React.useState("");
//   const [increments, setIncrements] = React.useState([]);
//   const [increment, setIncrement] = React.useState("");
//   const [rates, setRates] = React.useState([]);
//   const [rate, setRate] = React.useState("Per Turn");

//   // Add the handlesubmit code here
//   function handleSubmit(e) {
//     e.preventDefault();

//     const newTodo = {
//       id: new Date().getTime(),
//       text: todo.trim(),
//       completed: false,
//     };
//     const newValue = {
//       text: val.trim(),
//     };
//     const newIncrement = {
//       text: increment.trim(),
//     };
//     const newRate = {
//       text: rate.trim(),
//     };
//     if (newTodo.text.length > 0 ) {
//         setTodos([...todos].concat(newTodo));
//         setTodo("");
//         setValues([...values].concat(newValue));
//         setVal("");
//         setIncrements([...increments].concat(newIncrement));
//         setIncrement("");
//         setRates([...rates].concat(newRate));
//         // setRate("");

//     } else {
        
//         alert("Enter Valid Task");
//         setTodo("");
//         setVal("");
//         setIncrement("");
//         setRate("");
//     }
//   }


//   function addTurn(a) {
//       setTurn(prevTurn => prevTurn + a)
//   }

//   function addMinute(a) {
//     setMinute(prevMinute => {
//         if (prevMinute >= 60) {
//           prevMinute -= 60
//           addHour(.5)
//         }
//         return prevMinute + a
//     });
//   }

//   function addHour(a) {
//     setHour(prevHour => {
//       if (prevHour >= 24) {
//         prevHour -= 24
//         addDay(.5)
//       }
//       return prevHour + a
//   });
//   }

//   function addDay(a) {
//     setDay(prevDay => prevDay + a)
//   }



//   return (
//       <div className="counter">
//           <button onClick={() => addDay(2)}>Days +2</button>
//           <div className="counter--count">
//               <h1>{day}</h1>
//           </div>
//           <button onClick={() => addDay(1)}>Day +1</button>
//           <button onClick={() => addHour(2)}>Hours +2</button>
//           <div className="counter--count">
//               <h1>{hour}</h1>
//           </div>
//           <button onClick={() => addHour(1)}>Hour +1</button>
//           <button onClick={() => addMinute(10)}>Minutes +10</button>
//           <div className="counter--count">
//               <h1>{minute}</h1>
//           </div>
//           <button onClick={() => addMinute(1)}>Minute +1</button>
//           <button onClick={() => addTurn(2)}>Turns +2</button>
//           <div className="counter--count">
//               <h1>{turn}</h1>
//           </div>
//           <button onClick={() => addTurn(1)}>Turns +1</button>
//           <div>
//           <div>

// <h1>Counters</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="Name"
//           value={todo}
//         />
//         <input
//           type="text"
//           onChange={(e) => setVal(e.target.value)}
//           placeholder="Value"
//           value={val}
//         />
//           <input
//           type="text"
//           onChange={(e) => setIncrement(e.target.value)}
//           placeholder="Increment (+, -)"
//           value={increment}
//         />
//         <select value={rate} onChange={(e) => setRate(e.target.value)}>
//            <option value="Per Turn">Per Turn</option>
//            <option value="Per Minute">Per Minute</option>
//            <option value="Per Hour">Per Hour</option>
//            <option value="Per Day">Per Day</option>
//          </select>
//             <button type="submit">Submit</button>
//         </form>
//       <table>
//         <td>{todos.map((todo) => <td>{todo.text}</td>)}</td>
//         <td>{values.map((val) => <td>{val.text}</td>)}</td>
//         <td>{increments.map((increment) => <td>{increment.text}</td>)}</td>
//         <td>{rates.map((rate) => <td>{rate.text}</td>)}</td>
//       </table>
// </div>
//           </div>
//       </div>
//   )
// }



// import React, { useState, useEffect } from 'react';
// import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
// import sqlite3 from 'sqlite3';

// const root = document.getElementById('root');

// let value = 0;
// let rate = 0;
// let time = 0;

// let turns = 0;
// let minutes = 0;
// let hours = 0;
// let days = 0;

// let counters = 0;

// let counterlist = [];

// const conn = sqlite3.connect('datab.db');

// const c = conn.cursor();

// function addTurns(a) {
//   turns += a;
//   c.execute(`UPDATE time SET value = :turns WHERE name = 'Turns'`, { turns });
//   conn.commit();
//   account('Per Turn', a);
// }

// function addMinute(a) {
//   minutes += a;
//   if (minutes >= 60) {
//     minutes -= 60;
//     addHours(1);
//   }
//   c.execute(`UPDATE time SET value = :minutes WHERE name = 'Minutes'`, { minutes });
//   conn.commit();
//   account('Per Minute', a);
// }

// function addHours(a) {
//   hours += a;
//   if (hours >= 24) {
//     hours -= 24;
//     addDays(1);
//   }
//   c.execute(`UPDATE time SET value = :hours WHERE name = 'Hours'`, { hours });
//   conn.commit();
//   account('Per Hour', a);
// }

// function addDays(a) {
//   days += a;
//   c.execute(`UPDATE time SET value = :days WHERE name = 'Days'`, { days });
//   conn.commit();
//   account('Per Day', a);
// }

// function account(name, a) {
//   c.execute(`SELECT value, rate, time, counters FROM dbcounters WHERE name = :name`, { name });
//   const row = c.fetchone();
//   value = row[0];
//   rate = row[1];
//   time = row[2];
//   counters = row[3];

//   value += rate * a;
//   time += a;
//   counters += 1;

//   c.execute(`UPDATE dbcounters SET value = :value, time = :time, counters = :counters WHERE name = :name`, { value, time, counters, name });
//   conn.commit();
// }

// function Counter(props) {
//   const [name, setName] = useState('');
//   const [value, setValue] = useState(0);
//   const [rate, setRate] = useState(0);
//   const [time, setTime] = useState(0);
//   const [counters, setCounters] = useState(0);
//   const [error, setError] = useState(null);

//   function handleSubmit(event) {
//     event.preventDefault();

//     if (!name || !value || !rate) {
//       setError('All fields are required');
//       return;
//     }

//     c.execute(`INSERT INTO dbcounters (name, value, rate, time, counters) VALUES