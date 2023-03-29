import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    /* height: 115vh; */
    background-color: #070724;
    background-image: url("/assets/photo/background-stars.svg");
    /* margin-bottom: 300px; */
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
  
  /* @media (max-width: 600px) {
    body {
      display: block;
    }
 
  } */
`;
