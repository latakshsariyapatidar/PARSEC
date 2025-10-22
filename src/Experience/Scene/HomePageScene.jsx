import Morph from "../MorphParticles/Morph"
import PropTypes from "prop-types"

const HomePageScene = ({ startWithRocket, onInitialMorphComplete }) => {
  return (
    <>
      <Morph 
        startWithRocket={startWithRocket} 
        onInitialMorphComplete={onInitialMorphComplete}
      />
    </>
  )
}

HomePageScene.propTypes = {
  startWithRocket: PropTypes.bool,
  onInitialMorphComplete: PropTypes.func,
}

export default HomePageScene
