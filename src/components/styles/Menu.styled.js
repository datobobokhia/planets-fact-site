import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 90%;
  height: 540px;
  margin: auto;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 15px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  h2 {
    position: absolute;
    left: 65px;
    font-family: "League Spartan", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1.36364px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0px;
  }
`;
