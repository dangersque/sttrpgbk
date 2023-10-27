import React from "react";
import styled from "styled-components";
const Title = () => {

    
    return (
        <Bookkeeper>
        Simple <SimpleTTRPGBookkeeper>TTRPG</SimpleTTRPGBookkeeper>
        <SimpleTTRPGBookkeeper1> Bookkeeper</SimpleTTRPGBookkeeper1>
      </Bookkeeper>
    );
};
export default Title;

const Bookkeeper = styled.div`
  // width: 100%;
  // height: 4.66%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  // margin: 0px 0px 109px 0px;
  color: #d9d9d9;
  font-size: 96px;
  font-family: Bigshot One;
  // line-height: 100px;
  -webkit-text-stroke-color: #be1111;
  -webkit-text-stroke-width: 1px;
  text-align: center;
  letter-spacing: 48px;
  text-transform: uppercase;
  text-decoration-line: underline;
  // box-sizing: border-box;
  top: 176px;
  z-index: 1;
`;
const SimpleTTRPGBookkeeper1 = styled.div`
  display: contents;
  color: #d9d9d9;
  font-size: 96px;
  font-family: Bigshot One;
  line-height: 100px;
  letter-spacing: 48px;
  text-transform: uppercase;
  text-decoration-line: underline;
`;
const SimpleTTRPGBookkeeper = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 96px;
  font-family: Bigshot One;
  line-height: 100px;
  letter-spacing: 48px;
  text-transform: uppercase;
  text-decoration-line: underline;
`;