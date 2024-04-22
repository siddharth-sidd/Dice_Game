import React from 'react';
import styled from 'styled-components';

const Totalscore = ({ score }) => {
  return (
    <ScoreContent>
      <div>
        <h1>{score}</h1>
        <p>Total score</p>
      </div>
    </ScoreContent>
  );
};

export default Totalscore;

const ScoreContent = styled.div`
  max-width: 200px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 150px;
  }

  h1 {
    font-size: 90px;
    line-height: 100px;

    @media (max-width: 768px) {
      font-size: 70px;
      line-height: 80px;
    }
  }

  p {
    font-size: 15px;
    font-weight: 500px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;


 
