import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Counter from './Counter';
import styled from "styled-components";


const CounterList = () => {
    const { counters } = useContext(AppContext);
    
    return (
        <Divide> <table><tr><th>
          <CounterData>

              <Group7>
               <CounterName1>
                 <FirstCounterName>Name</FirstCounterName>
               </CounterName1>             </Group7>
                  <Group7>
                    <CounterName1>
                 <FirstCounterName>Value</FirstCounterName>
               </CounterName1></Group7>
               <Group7>               
                <CounterName1>
               <FirstCounterName>Increment</FirstCounterName>
               </CounterName1>
               </Group7>
               <Group7>               
                <CounterName1>
                 <FirstCounterName>Rate</FirstCounterName>
               </CounterName1>
               </Group7>
               <Group7>               
                <CounterName1>
                 <FirstCounterName>Delete</FirstCounterName>
               </CounterName1>
               </Group7>
          
      </CounterData>   </th></tr>                 
  
        <td><tr>
             {counters.map((counter) => (
                <Counter id={counter.id} key={counter.id} name={counter.name} val={counter.val}
                increment={counter.increment} rate={counter.rate} /> 
            ))}
          </tr></td>
            </table> 
            </Divide>
    );
};
export default CounterList;
const Divide = styled.div`
  // width: 100%;
  max-width: 2000px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  top: 50px;
  // left: 30px;
  z-index: 4;
`;

const CounterData = styled.div`
  // width: 100%;
  max-width: 2000px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  top: 20px;
`;

const CounterName1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px 103px;
  box-sizing: border-box;
  background-color: #9a0b0b;
`;

const FirstCounterName = styled.div`
  color: #eeeeee;
  font-size: 32px;
  font-family: MedievalSharp;
  text-align: justify;
  white-space: nowrap;
  text-decoration-line: underline;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  width: 17.99%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;
