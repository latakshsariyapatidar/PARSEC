import PropTypes from "prop-types"

const Sponcer = ({ children, title }) => {
  return (
    <>
      <div className="font-bold w-full text-center text-2xl font-hero">
        {title}
      </div>
      <div className="flex flex-wrap justify-around my-4">{children}</div>
    </>
  )
}

Sponcer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default Sponcer
