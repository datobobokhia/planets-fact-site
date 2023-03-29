import { useContext } from "react";
import { StyledMenu } from "../../../styles/Menu.styled";
import { Link } from "react-router-dom";
import { myContext } from "../../../../App";

export default function Menu({ setMenu }) {
  const data = useContext(myContext);

  const handleLinkClick = () => {
    setMenu(false);
  };
  return (
    <StyledMenu>
      {data.map((item, index) => (
        <Link
          to={`/${item.name.toLowerCase()}`}
          onClick={handleLinkClick}
          key={index}
        >
          <div>
            <img
              src={`/assets/photo/planet-${item.name}-overview.svg`}
              alt="arrow"
            />
            <h2>{item.name}</h2>
            <img
              src="/assets/photo/icon-chevron.svg"
              style={{ width: "auto", height: "auto" }}
              alt="planet-icon"
            />
          </div>
        </Link>
      ))}
    </StyledMenu>
  );
}
