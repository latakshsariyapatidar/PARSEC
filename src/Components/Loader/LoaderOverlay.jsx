import { useState } from "react"
import PropTypes from "prop-types"

function LoaderOverlay({ onStart, isStarted }) {
  const handleClick = () => {
    onStart()
  }

  if (isStarted) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-hero font-bold gradient-text-blue-sky">
          PARSEC 2025
        </h1>
        <button
          onClick={handleClick}
          className="px-8 py-4 text-xl font-hero font-semibold 
            bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full
            hover:shadow-blue-glow transition-all duration-300"
        >
          Enter Experience
        </button>
        <p className="text-gray-400 text-sm animate-pulse">
          Click to explore
        </p>
      </div>
    </div>
  )
}

LoaderOverlay.propTypes = {
  onStart: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
}

export default LoaderOverlay
