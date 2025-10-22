import PropTypes from "prop-types"

function NavButton({ content, isActive }) {
  return (
    <button
      type="button"
      className={`py-2 px-4 font-medium font-hero rounded-full hover:bg-blue-600 hover:bg-opacity-10 ${
        isActive && "text-blue-600"
      }`}
    >
      {content}
    </button>
  )
}

NavButton.propTypes = {
  content: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}

export default NavButton
