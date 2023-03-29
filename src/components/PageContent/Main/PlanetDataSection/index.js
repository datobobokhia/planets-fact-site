import { StyledPlanetDataSection } from "../../../styles/PlanetDataSection.styled";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../../../App";

export default function PlanetDataSection() {
  const location = useLocation();
  const data = useContext(myContext);
  return (
    <>
      {location.pathname !== "/" ? (
        data.map((item, index) =>
          location.pathname === `/${item.name.toLowerCase()}` ? (
            <StyledPlanetDataSection key={index}>
              <div>
                <p>ROTATION TIME</p>
                <h3>{item.rotation}</h3>
              </div>

              <div>
                <p>REVOLUTION TIME</p>
                <h3>{item.revolution}</h3>
              </div>

              <div>
                <p>radius</p>
                <h3>{item.radius}</h3>
              </div>

              <div>
                <p>AVERAGE TEMP.</p>
                <h3>{item.temperature}</h3>
              </div>
            </StyledPlanetDataSection>
          ) : null
        )
      ) : data.length > 0 ? (
        <StyledPlanetDataSection>
          <div>
            <p>ROTATION TIME</p>
            <h3>{data[0].rotation}</h3>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h3>{data[0].revolution}</h3>
          </div>

          <div>
            <p>radius</p>
            <h3>{data[0].radius}</h3>
          </div>

          <div>
            <p>AVERAGE TEMP.</p>
            <h3>{data[0].temperature}</h3>
          </div>
        </StyledPlanetDataSection>
      ) : null}
    </>
  );
}
