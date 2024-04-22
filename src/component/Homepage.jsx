import styled from "styled-components"
import { Button } from "./styled/Button";

const Homepage = ({toggel }) => {
  return (
     <Container>
        <img src='./image/dices.jpg' alt="Dice Image" />
       <div>
          <h1>DICE GAME</h1>
          <Button onClick={toggel}>Play Now</Button>
       </div>
     </Container>
  )
}

export default Homepage

const Container = styled.div`
    max-width: 100%; /* Adjusts to the full width of the viewport */
    padding: 0 20px; /* Adds some padding to the sides */
    box-sizing: border-box; /* Ensures padding is included in the width */
    display: flex;
    flex-direction: column; /* Stack items vertically on small screens */

    @media (min-width: 768px) { /* Apply styles for screens wider than 768px */
        flex-direction: row; /* Align items horizontally on larger screens */
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }
 
    img {
        max-width: 100%; /* Make the image responsive */
        height: auto; /* Maintain aspect ratio */
        margin-bottom: 20px; /* Add some space below the image */
    }
`;


