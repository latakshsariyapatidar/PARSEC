import Views from "./Views"
import { useEffect, useState } from "react"

function App() {
  const [startMorph, setStartMorph] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    document.title = "Parsec 2025"
    
    // Automatically start the morph after a short delay
    setTimeout(() => {
      setStartMorph(true)
    }, 500)
  }, [])

  const handleMorphComplete = () => {
    // Show all content after morph completes
    setShowContent(true)
  }

  return (
    <>
      <Views startWithRocket={startMorph} onInitialMorphComplete={handleMorphComplete} showContent={showContent} />
    </>
  )
}

export default App