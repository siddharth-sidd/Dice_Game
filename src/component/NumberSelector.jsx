import React from "react";
import styled from "styled-components";

const NumberSelector = ({ error, Selectedvalue, SetSelectedvalue }) => {
  const arrayNumebr = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <p style={{ color: 'red' }}>{error}</p>
      <div className="flex">
        {arrayNumebr.map((value, i) => (
          <Box
            isselected={value === Selectedvalue}
            onClick={() => SetSelectedvalue(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 25px;
    font-weight: bold;
  }
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (!props.isselected ? "lightgray" : "black")};
    color: ${(props) => (!props.isselected ? "black" : "white")};
  }
`;
