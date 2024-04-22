import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking on dice, if the selected number is equal to the dice number, you will get the same points as the dice.</p>
        <p>If you get the wrong guess, then 2 points will be deducted.</p>
      </div>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #f5f1b7;

  h2 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  .text {
    font-size: 17px;
  }
`;
