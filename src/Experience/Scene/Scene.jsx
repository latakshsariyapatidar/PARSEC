import StaticParticlesV2 from "../StaticParticles/StaticParticlesV2.jsx"
import HomePageScene from "./HomePageScene.jsx"
import PropTypes from "prop-types"

export default function Scene({ currentMesh, startWithRocket, onInitialMorphComplete }) {
  let componentToRender
  switch (currentMesh) {
    case "home":
      componentToRender = <HomePageScene 
        startWithRocket={startWithRocket}
        onInitialMorphComplete={onInitialMorphComplete}
      />
      break
    default:
      componentToRender = <group />
      break
  }
  return (
    <>
      {/* <Perf position="bottom-left" /> */}
      {/* <StaticParticles /> */}
      <StaticParticlesV2 />
      {componentToRender}
    </>
  )
}

Scene.propTypes = {
  currentMesh: PropTypes.string,
  startWithRocket: PropTypes.bool,
  onInitialMorphComplete: PropTypes.func,
}
