import { StyledMobileHeader } from "../../../styles/MobileHeader.styled";

export default function MobileHeader({ menu, setMenu }) {
  return (
    <StyledMobileHeader menu={menu}>
      <div>
        <a href="/">
          <h1>THE PLANETS</h1>
        </a>

        <img
          src="/assets/photo/icon-hamburger.svg"
          alt="hamburger"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>
    </StyledMobileHeader>
  );
}
