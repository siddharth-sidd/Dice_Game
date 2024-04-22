import styled from "styled-components";


 export const Button= styled.button`
     background-color: #000000;
     color: white;
     border-radius: 5px;
     padding: 17px;
     min-width: 220px;
    
     &:hover {
        background-color: #484646; /* Change background color on hover */
        cursor: pointer; /* Show pointer cursor on hover */
    }

    @media (max-width: 768px) { /* Apply styles for screens narrower than 768px */
        min-width: auto; /* Allow button to shrink on smaller screens */
    }
`;  
