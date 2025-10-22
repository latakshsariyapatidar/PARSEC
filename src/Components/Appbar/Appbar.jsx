import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import NavButton from "../NavButton/NavButton"
import NavTile from "../NavTile/NavTile"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { HiOutlineChevronDown } from "react-icons/hi"
import PropTypes from "prop-types"
import navigationData from "../../data/navigation.json"

GSAP.registerPlugin(ScrollTrigger)
function Appbar({ current }) {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const scrollContainer = document.getElementById("main-content")
  const scrollProgress = useRef()

  useEffect(() => {
    if (!scrollContainer && !scrollProgress.current) return
    const ctx = GSAP.context(() => {
      const progressTimeLine = GSAP.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      progressTimeLine.from(scrollProgress.current, {
        scaleX: 0,
      })
    })

    return () => ctx.revert()
  }, [current, scrollContainer])

  const { navigation, mobileCulturalLabel } = navigationData;

  return (
    <>
      <div
        className="container fixed top-0 left-0 max-w-full backdrop-blur-sm bg-black bg-opacity-10"
        style={{ zIndex: 100 }}
      >
        <div className="mx-auto max-w-page_lg flex items-center justify-between px-4 h-20"> 
          <div className="md:w-1/4 flex items-center space-x-4">
            <a href="https://iitdh.ac.in">
            <img
              src="/IIT dh logo.png"
              alt="parsec logo"
              className="sm:w-[69.6px] sm:h-[60px] w-[52.3px] h-[45.03px]"
            />
            </a>
            <div className="w-[2px] h-[36px] bg-white"></div>
            <a href="/home">
            <img
              src="/Images/parsec-logo.png"
              alt="parsec logo"
              className="sm:w-[auto] sm:h-[36px] w-[auto] h-[27px]"
            />
            </a>
          </div>
          <div className="nav-options-desktop flex items-center justify-end md:w-3/4 max-[768px]:hidden">
            {navigation.map((item) => (
              <div key={item.id} className="ml-4">
                <Link to={item.path}>
                  <NavButton content={item.label} isActive={current === item.id} />
                </Link>
              </div>
            ))}
          </div>
          <div className="nav-mobile md:hidden">
            <button
              onClick={() => setMobileNavActive(!mobileNavActive)}
              className={`rounded-full mr-4 text-4xl ${
                mobileNavActive && "rotate-180"
              } ease-in-out duration-300`}
            >
              <HiOutlineChevronDown />
            </button>
          </div>
        </div>
        <div
          className={`nav-mobile-options h-100 overflow-hidden md:hidden ${
            !mobileNavActive && "h-0"
          } ease-in-out duration-300`}
          style={{ transformOrigin: "left top" }}
        >
          {navigation.map((item) => (
            <div key={item.id}>
              <Link to={item.path}>
                <NavTile
                  onClick={() => setMobileNavActive(false)}
                  content={item.id === "cultural" ? mobileCulturalLabel : item.label}
                  isActive={current === item.id}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full" style={{ height: "2px" }}>
          <div
            className="h-full w-full bg-blue-500"
            style={{ transformOrigin: "left top" }}
            ref={scrollProgress}
          ></div>
        </div>
      </div>
    </>
  )
}

Appbar.propTypes = {
  current: PropTypes.string
}

export default Appbar