import { StyledNavigation } from "../../../styles/Navigation.styled";
import { useState } from "react";

const buttons = ["OVERVIEW", "STRUCTURE", "SURFACE"];

export default function Navigation({ setPlanetPhysics }) {
  const [selectedButton, setSelectedButton] = useState(0);
  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setPlanetPhysics(buttons[index].toLowerCase());
  };
  return (
    <StyledNavigation>
      <div>
        {buttons.map((button, index) => (
          <a
            key={button}
            style={{
              borderBottom:
                selectedButton === index ? "4px solid #6D2ED5" : "none",
              paddingTop: selectedButton === index ? "4px" : "0px",
            }}
            onClick={() => handleButtonClick(index)}
            href="#"
          >
            {button}
          </a>
        ))}
      </div>
    </StyledNavigation>
  );
}
