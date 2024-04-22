import React, { useState } from "react";
import styled from "styled-components";
import DiceRole from "./DiceRole";
import { Button } from "./styled/Button";
import Rules from "./Rules";
import NumberSelector from "./NumberSelector";
import Totalscore from "./Totalscore";

const Gamepage = () => {
  const [score, Setscore] = useState(0);
  const [Selectedvalue, SetSelectedvalue] = useState();
  const [controlnumber, Setcontrolnumber] = useState(1);
  const [error, Seterror] = useState('');
  const [ShowRules, SetShowRules] = useState(false);

  const resetscore = () => {
    Setscore(0);
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rolldice = () => {
    if (!Selectedvalue) {
      Seterror('you have not selected any number');
      return;
    }
    Seterror('');
    const randum = getRndInteger(1, 6);
    Setcontrolnumber((prev) => randum);
    if (Selectedvalue === randum) {
      Setscore((prev) => prev + randum);
    } else {
      Setscore((prev) => prev - 2);
    }
    SetSelectedvalue(undefined);
  };

  return (
    <TopSection>
      <div className="Main">
        <Totalscore score={score} />
        <NumberSelector Selectedvalue={Selectedvalue} SetSelectedvalue={SetSelectedvalue} error={error} />
      </div>

      <DiceRole controlnumber={controlnumber} rolldice={rolldice} />

      <div className="btns">
        <Button onClick={resetscore}>Reset Score</Button>
        <Button onClick={() => SetShowRules((prev) => !prev)}>{ShowRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {ShowRules && <Rules />}
    </TopSection>
  );
};

export default Gamepage;

const TopSection = styled.div`
  padding-top: 40px;
  .Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .btns {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
