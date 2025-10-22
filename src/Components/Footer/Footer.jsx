import { Link } from "react-router-dom"
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs"
const Footer = () => {
  return (
    <div
      className="container max-w-full bg-black/70 relative pt-16 pb-16 lg:pt-32 lg:pb-32"
      style={{ zIndex: 100 }}
    >
      <div className="mx-auto max-w-page_lg grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-32 footer">
        <div>
          <div className="flex items-center justify-center lg:justify-start my-4 lg:pl-10">
            <div>
              <img className="w-[100px]" src="/Images/parsec-logo.png" />
            </div>
          </div>
          <div className="text-xs flex flex-col items-center lg:items-start">
            <div>PARSEC</div>
            <div>IIT Dharwad - Permanent Campus, Karnataka</div>
            <div>PIN - 580011</div>
          </div>
        </div>

        <div className="flex flex-col items-center  my-4 justify-center font-hero">
          <div className="text-white">
            <Link to="/home">Home</Link>
          </div>
          <div className="mt-2">
            <Link to="/events">Events</Link>
          </div>
          <div className="mt-2">
            <Link to="/team">Team</Link>
          </div>
        </div>

        <div className="my-4 flex flex-col items-center justify-center">
          <div className="font-semibold text-xl">Support</div>
          <div className="mt-2">
            <a href="mailto:outreach.parsec@iitdh.ac.in">Sponsor Parsec 6.0</a>
          </div>
          {/* <div className="mt-2">
            <a href="mailto:gstech@iitdh.ac.in">gstech@iitdh.ac.in</a>
          </div> */}
        </div>
        <div className="my-4 flex flex-col items-center lg:items-end justify-center">
          <div className="font-semibold text-xl">Social</div>
          <div className="flex mt-4">
            <a
              target="_blank"
              className=" text-xl"
              href="https://www.facebook.com/parsec.iitdh"
              rel="noreferrer"
            >
              <span className="text-white cursor-pointer">
                <BsFacebook />
              </span>
            </a>
            <a
              target="_blank"
              className="ml-4 text-xl"
              href="https://www.linkedin.com/company/parsec-iit-dharwad/"
              rel="noreferrer"
            >
              <span className="text-white cursor-pointer">
                <BsLinkedin />
              </span>
            </a>
            <a
              className="ml-4 text-xl"
              target="_blank"
              href="https://www.instagram.com/technical.council_iitdh/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              rel="noreferrer"
            >
              <span className="text-white cursor-pointer">
                <BsInstagram />
              </span>
            </a>
          </div>
          <div className="mt-8 lg:text-right text-xs">
            © Copyright - 2026 Parsec 6.0 all rights reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
