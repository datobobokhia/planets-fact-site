import styled from "styled-components";

export const StyledMobileHeader = styled.header`
  display: none;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 68px;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      cursor: pointer;
    }
    div {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }
    h1 {
      margin: 0px;
      font-family: "Antonio";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -1.05px;
      text-transform: uppercase;
      color: #ffffff;
    }

    img {
      align-self: center;
      opacity: ${(props) => (props.menu ? "0.25" : "1")};
    }
  }
`;
