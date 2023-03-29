import Navigation from "./Navigation";
import PlanetVisualSection from "./PlanetVisualSection";
import PlanetDescriptionSection from "./PlanetDescriptionSection";
import PlanetDataSection from "./PlanetDataSection";
import { useState } from "react";

export default function Main() {
  const [planetPhysics, setPlanetPhysics] = useState("overview");
  console.log(planetPhysics);
  return (
    <>
      <Navigation setPlanetPhysics={setPlanetPhysics} />
      <PlanetVisualSection planetPhysics={planetPhysics} />
      <PlanetDescriptionSection planetPhysics={planetPhysics} />
      <PlanetDataSection />
    </>
  );
}
