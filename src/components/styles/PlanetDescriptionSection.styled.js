import styled from "styled-components";

export const StyledPlanetDescriptionSection = styled.section`
  width: 100%;
  height: 235px;
  display: flex;

  div {
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin: 0px;
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    margin: 0px;
    font-family: "League Spartan", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    margin: 0px;
    font-family: "League Spartan", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
