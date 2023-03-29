import styled from "styled-components";

export const StyledPlanetDataSection = styled.section`
  height: 245px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  div {
    width: 90%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    mix-blend-mode: normal;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  p {
    font-family: "League Spartan", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.727273px;
    text-transform: uppercase;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0px;
  }

  h3 {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: right;
    letter-spacing: -0.75px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0px;
  }
`;
