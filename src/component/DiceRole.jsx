import React from "react";
import styled from "styled-components";

const DiceRole = ({ controlnumber, rolldice }) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img onClick={rolldice} src={`./Dicepick/dice_${controlnumber}.png`} alt="dice_1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default DiceRole;

const DiceContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    text-align: center;
  }
`;
