import Experience from "../Experience/Experience"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Appbar from "../Components/Appbar/Appbar"
import Footer from "../Components/Footer/Footer"
import useLenis from "../Helpers/lenis"
import PropTypes from "prop-types"

function Layout({ startWithRocket, onInitialMorphComplete, showContent }) {
  const location = useLocation()

  // Get the name of the active route's component
  const getRouteName = () => {
    const pathname = location.pathname
    const segments = pathname.split("/")
    return segments[segments.length - 1]
  }
  const route = getRouteName()
  useLenis(route)
  return (
    <>
      <div className="experience">
        <Experience 
          current={getRouteName()} 
          startWithRocket={startWithRocket}
          onInitialMorphComplete={onInitialMorphComplete}
        />
      </div>
      <div 
        id="main-content"
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Appbar current={getRouteName()} />
        <div>
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  startWithRocket: PropTypes.bool,
  onInitialMorphComplete: PropTypes.func,
  showContent: PropTypes.bool,
}

export default Layout
