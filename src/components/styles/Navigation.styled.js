import styled from "styled-components";

export const StyledNavigation = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);

  div {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    font-family: "League Spartan", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
`;
