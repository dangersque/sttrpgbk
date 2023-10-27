import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styled from "styled-components";

const TimeKeeper = (props) => {
const { dispatch,turn,minute,hour,day  } = useContext(AppContext);
  //Changes the values on the counters based on how much time was selected to pass 
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
        <Countdown>
          <Align>
        <Group2>
        <UnitElapsedTime>
            <HoursToAdd>{day}</HoursToAdd>
            <DaysElapsed>Days</DaysElapsed>
        </UnitElapsedTime>            
        <AddDays1 onClick={() => accountTime(7, 'Per Day')}>+7</AddDays1>
        <AddDays2 onClick={() => accountTime(2, 'Per Day')}>+2</AddDays2>
        <AddDays3 onClick={() => accountTime(1, 'Per Day')}>+1</AddDays3>
        <AddDays4 onClick={() => accountTime(-1, 'Per Day')}>-1</AddDays4>
        </Group2>
        <Group3>
        <UnitElapsedTime1>
            <HoursElapsed>Hours</HoursElapsed>
            <HoursToAdd>{hour}</HoursToAdd>
        </UnitElapsedTime1>
        <AddDays1 onClick={() => accountTime(7, 'Per Hour')}>+7</AddDays1>
        <AddDays2 onClick={() => accountTime(2, 'Per Hour')}>+2</AddDays2>
        <AddDays3 onClick={() => accountTime(1, 'Per Hour')}>+1</AddDays3>
        <AddDays4 onClick={() => accountTime(-1, 'Per Hour')}>-1</AddDays4>
        </Group3>
        <Group4>
        <UnitElapsedTime2>
            <MinutesElapsed>Minutes</MinutesElapsed>
            <HoursToAdd>{minute}</HoursToAdd>
        </UnitElapsedTime2>
        <AddDays1 onClick={() => accountTime(7, 'Per Minute')}>+7</AddDays1>
        <AddDays2 onClick={() => accountTime(2, 'Per Minute')}>+2</AddDays2>
        <AddDays3 onClick={() => accountTime(1, 'Per Minute')}>+1</AddDays3>
        <AddDays4 onClick={() => accountTime(-1, 'Per Minute')}>-1</AddDays4>
        </Group4>
        <Group5>
        <UnitElapsedTime3>
            <TurnsElapsed>Turns</TurnsElapsed>
            <HoursToAdd>{turn}</HoursToAdd>
        </UnitElapsedTime3>
        <AddDays1 onClick={() => accountTime(7, 'Per Turn')}>+7</AddDays1>
        <AddDays2 onClick={() => accountTime(2, 'Per Turn')}>+2</AddDays2>
        <AddDays3 onClick={() => accountTime(1, 'Per Turn')}>+1</AddDays3>
        <AddDays4 onClick={() => accountTime(-1, 'Per Turn')}>-1</AddDays4>
        </Group5><Resetall><button class="resetall" onClick={()=> resetTime()}>Reset All</button>   
            </Resetall></Align>
        </Countdown>
          
    )
}

export default TimeKeeper;

const TurnsElapsed = styled.div`
  width: 104px;
  height: 45px;
  left: 42.7344970703125px;
  top: 119.66917419433594px;
  position: absolute;
  font-size: 40px;
  font-family: MedievalSharp;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 2px;
  text-align: center;
  white-space: nowrap;
  text-decoration-line: underline;
  -webkit-background-clip: text;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, #000000 0%, #000000 100%);
`;


const AddDays1 = styled.div`
  width: 100px;
  font-size: 24px;
  color: black;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  opacity: 50;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 35.4px 34.9px 43.6px 34.9px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/bWIjzh8wDr6AuAbDe3yf.svg");

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 100px;
    padding: 35.4px 34.9px 43.6px 34.9px;
    border-radius: 50%;
  }

  &:active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    border-radius: 50%;
  }
`;

const AddDays2 = styled.div`
  width: 100px; 
  font-size: 24px;
  color: black;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  padding: 35.4px 34.9px 43.6px 34.9px;
  background-image: url("https://file.rendit.io/n/bWIjzh8wDr6AuAbDe3yf.svg");
  position: relative;
  left: 60px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 100px;
    padding: 35.4px 34.9px 43.6px 34.9px;
    border-radius: 50%;
  }

  &:active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    border-radius: 50%;
  }
`;

const AddDays3 = styled.div`
  width: 100px; 
  font-size: 24px;
  color: black;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  padding: 35.4px 34.9px 43.6px 34.9px;
  background-image: url("https://file.rendit.io/n/bWIjzh8wDr6AuAbDe3yf.svg");
  position: relative;
  left: 200px;
  bottom: 105px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 100px;
    padding: 35.4px 34.9px 43.6px 34.9px;
    border-radius: 50%;
  }

  &:active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    border-radius: 50%;
  }
`;

const AddDays4 = styled.div`
  width: 100px; 
  font-size: 24px;
  color: black;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  padding: 35.4px 34.9px 43.6px 34.9px;
  background-image: url("https://file.rendit.io/n/bWIjzh8wDr6AuAbDe3yf.svg");
  position: relative;
  left: 255px;
  bottom: 325px;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 100px;
    padding: 35.4px 34.9px 43.6px 34.9px;
    border-radius: 50%;
  }

  &:active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    border-radius: 50%;
  }
  
`;

const HoursToAdd = styled.div`
  position: relative;
  font-size: 96px;
  font-weight: 700;
  font-family: Inter;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Countdown = styled.div`
  width: 100%;
  height: 21.2%;
  // top: 400px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 1;
  // box-sizing: border-box;
  background-position: 40% 40%;
  // background-size: cover;
  // background-blend-mode: ;
  // background-image: ;
  // box-shadow: inset 0px 6px 0px 0px #000000, inset -6px 0px 0px 0px #000000;
  top: 230px;
  z-index: 2;
`;

const Align = styled.div`
  width: 93%;
  left: 50px;
  height: 21.2%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  // box-sizing: border-box;
  background-position: 40% 40%;
  // background-size: cover;
  // background-blend-mode: ;
  // background-image: ;
  // box-shadow: inset 0px 6px 0px 0px #000000, inset -6px 0px 0px 0px #000000;
`;

const Group2 = styled.div`
  width: 33.51%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0.11px 0px -10px;
  padding: 97.7px 10px 10px 10px;
  box-sizing: border-box;
`;

const UnitElapsedTime = styled.div`
  width: 183px;
  left: 89.96261596679688px;
  top: 0px;
  position: absolute;
  gap: 3.74px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5.83px 39px 30.6px 39px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/YdlfA8pJ127tQxBWERGJ.svg");
`;

const DaysElapsed = styled.div`
  font-size: 40px;
  font-family: MedievalSharp;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 2px;
  text-align: center;
  white-space: nowrap;
  text-decoration-line: underline;
  -webkit-background-clip: text;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, #000000 0%, #000000 100%);
`;

const Group3 = styled.div`
  width: 33.51%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 98.4px 0px 0px 0px;
  box-sizing: border-box;
`;

const UnitElapsedTime1 = styled.div`
  width: 183px;
  left: 89.96260070800781px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 13.5px 67.3px 70.9px 67.3px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/9fsXFjijt2VrniozhFsv.svg");
`;
const HoursElapsed = styled.div`
  width: 108px;
  height: 45px;
  left: 35.23442077636719px;
  top: 126.64661407470703px;
  position: absolute;
  font-size: 40px;
  font-family: MedievalSharp;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 2px;
  text-align: center;
  white-space: nowrap;
  text-decoration-line: underline;
  -webkit-background-clip: text;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, #000000 0%, #000000 100%);
`;

const Group4 = styled.div`
  width: 33.51%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0.11px 0px 0px;
  padding: 97.7px 0px 0px 0px;
  box-sizing: border-box;
`;
const UnitElapsedTime2 = styled.div`
  width: 183px;
  left: 89.96261596679688px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 12.3px 67.3px 72.8px 67.3px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/OhQl9cfANq98s2ThPRV1.svg");
`;
const MinutesElapsed = styled.div`
  width: 143px;
  height: 45px;
  left: 19.53753662109375px;
  top: 123.51881408691406px;
  position: absolute;
  font-size: 40px;
  font-family: MedievalSharp;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 2px;
  text-align: center;
  white-space: nowrap;
  text-decoration-line: underline;
  -webkit-background-clip: text;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, #000000 0%, #000000 100%);
`;

const Group5 = styled.div`
  width: 33.51%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 97.7px 0px 0px 0px;
  box-sizing: border-box;
`;
const UnitElapsedTime3 = styled.div`
  width: 183px;
  left: 89.962646484375px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 12.5px 67.3px 72.7px 67.3px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/7vPx1bF5quny32o7AZNp.svg");
`;


const Resetall = styled.div`
  // width: 100px; 
  display: flex-end;
  flex-direction: column;
  align-self: center;
  align-items: flex-end;
  // bottom: 1000px;
`;