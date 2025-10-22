import { useState } from "react"
import PropTypes from "prop-types"
import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { R3FPointsFX } from "r3f-points-fx"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef, useMemo, useEffect } from "react"
import GSAP from "gsap"
import vertFunctions from "../../Experience/MorphParticles/shaders/morphVertFunctions.glsl"
import fragFunctions from "../../Experience/MorphParticles/shaders/morphFragFunctions.glsl"

function RocketLoader({ onMorphComplete, startMorph }) {
  const rocketMesh = useGLTF("/Models/rocket.glb").nodes["Rocket"]
  const earthMesh = useGLTF("/Models/earth.glb").nodes["earth"]
  const meshes = [rocketMesh, earthMesh]
  const morphRef = useRef()
  const groupRef = useRef()
  const [isMorphing, setIsMorphing] = useState(false)

  // Start morphing when triggered
  useEffect(() => {
    if (startMorph && morphRef.current && !isMorphing) {
      setIsMorphing(true)
      morphRef.current.setModelB(1) // Set target model to earth
      
      // Animate the morph progress with expansion
      GSAP.to({ progress: 0 }, {
        progress: 1,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function() {
          if (morphRef.current) {
            morphRef.current.updateProgress(this.targets()[0].progress)
          }
        },
        onComplete: () => {
          if (morphRef.current) {
            morphRef.current.setModelA(1) // Set current model to earth
          }
          // Delay completion slightly to ensure smooth transition
          setTimeout(() => {
            onMorphComplete()
          }, 200)
        }
      })
      
      // Expand and scatter effect
      GSAP.to(groupRef.current.scale, {
        x: 1.8,
        y: 1.8,
        z: 1.8,
        duration: 1,
        ease: "power2.out"
      })
      
      GSAP.to(groupRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1,
        delay: 1,
        ease: "power2.in"
      })
    }
  }, [startMorph, isMorphing, onMorphComplete])

  // Generate random array for particle effects
  const generateRandomnArray = (size) => {
    const length = size * size * 3
    const data = new Float32Array(length)

    for (let i = 0; i < length; i++) {
      const stride = i * 3
      data[stride] = Math.random() * 3 - 1
      data[stride + 1] = Math.random() * 3 - 1
      data[stride + 2] = Math.random() * 3 - 1
    }
    return data
  }

  const randomArray = useMemo(() => {
    return generateRandomnArray(128)
  }, [])

  useFrame((state) => {
    if (morphRef.current && groupRef.current) {
      morphRef.current.updateTime(state.clock.elapsedTime)
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      // Gentle rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <R3FPointsFX
        modelsArray={meshes}
        baseColor="#3b82f6"
        modelA={0}
        modelB={0}
        ref={morphRef}
        uniforms={{
          uColor1: new THREE.Color("#3b82f6"),
          uColor2: new THREE.Color("#6366f1"),
          uColor3: new THREE.Color("#06b6d4"),
          uColor4: new THREE.Color("#0ea5e9"),
        }}
        attributes={[
          {
            name: "aRandom",
            array: randomArray,
            itemSize: 3,
          },
        ]}
        pointsFragFunctions={fragFunctions}
        pointsVertFunctions={vertFunctions}
        scale={[2, 2, 2]}
        pointSize={10}
        pointsCount={100}
        alpha={1.2}
      />
    </group>
  )
}

RocketLoader.propTypes = {
  onMorphComplete: PropTypes.func.isRequired,
  startMorph: PropTypes.bool.isRequired,
}

function Loader({ onLoadComplete }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [startMorph, setStartMorph] = useState(false)

  const handleClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setStartMorph(true)
  }

  const handleMorphComplete = () => {
    // Complete immediately - the morph itself is the transition
    onLoadComplete()
  }

  return (
    <>
      {/* Loader overlay that disappears after morph */}
      <div
        className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${
          isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{
          background: "black"
        }}
      >
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{
              alpha: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
            }}
            dpr={[1, 2]}
          >
            <color args={["#000006"]} attach="background" />
            <RocketLoader onMorphComplete={handleMorphComplete} startMorph={startMorph} />
          </Canvas>
        </div>

        {/* Click to enter text - fades out when clicked */}
        <div 
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-hero font-bold gradient-text-blue-sky">
              PARSEC 2025
            </h1>
            <button
              onClick={handleClick}
              disabled={isAnimating}
              className="pointer-events-auto px-8 py-4 text-xl font-hero font-semibold 
                bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full
                hover:shadow-blue-glow transition-all duration-300
                disabled:cursor-not-allowed"
            >
              Enter Experience
            </button>
            <p className="text-gray-400 text-sm animate-pulse">
              Click to explore
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

Loader.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
}

// Preload the rocket and earth models
useGLTF.preload("/Models/rocket.glb")
useGLTF.preload("/Models/earth.glb")

export default Loader
