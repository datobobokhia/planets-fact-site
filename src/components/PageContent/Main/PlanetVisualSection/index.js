import { StyledPlanetVisualSection } from "../../../styles/PlanetVisualSection.styled";
import { useLocation } from "react-router-dom";

export default function PlanetVisualSection({ planetPhysics }) {
  const location = useLocation();
  const currentPathname = location.pathname.substring(1);

  const getPlanetImageUrl = () => {
    const planetName = currentPathname !== "" ? currentPathname : "mercury";
    const changePhysics =
      planetPhysics === "surface" ? "overview" : planetPhysics;
    return `/assets/photo/planet-${planetName}-${changePhysics}.svg`;
  };

  const renderSurfaceImage = () => {
    const planetName = currentPathname !== "" ? currentPathname : "mercury";
    if (planetPhysics === "surface") {
      return (
        <img
          src={`/assets/photo/planet-${planetName}-surface.png`}
          style={{
            width: 100,
            height: "auto",
            position: "absolute",
            zIndex: 1,
            top: "75%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          alt="surface"
        />
      );
    }
    return null;
  };

  return (
    <StyledPlanetVisualSection>
      <div style={{ position: "relative" }}>
        <img src={getPlanetImageUrl()} alt="planet" />
        {renderSurfaceImage()}
      </div>
    </StyledPlanetVisualSection>
  );
}
