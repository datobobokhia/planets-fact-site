import { StyledPlanetDescriptionSection } from "../../../styles/PlanetDescriptionSection.styled";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../../../App";

export default function PlanetDescriptionSection({ planetPhysics }) {
  const location = useLocation();
  const data = useContext(myContext);

  return (
    <StyledPlanetDescriptionSection>
      <div>
        {location.pathname !== "/" ? (
          data.map((item, index) =>
            location.pathname === `/${item.name.toLowerCase()}` ? (
              <div key={index}>
                <h2>{item.name}</h2>
                <p>{item[planetPhysics].content}</p>
                <a href={item[planetPhysics].source}>
                  <h4>Source : Wikipedia</h4>
                </a>
              </div>
            ) : null
          )
        ) : data.length > 0 ? (
          <div>
            <h2>{data[0].name}</h2>
            <p>{data[0][planetPhysics].content}</p>
            <a href={data[0][planetPhysics].source}>
              <h4>Source : Wikipedia</h4>
            </a>
          </div>
        ) : null}
      </div>
    </StyledPlanetDescriptionSection>
  );
}
