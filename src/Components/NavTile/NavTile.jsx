import PropTypes from "prop-types"

function NavTile({ content, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-4 px-6 w-full font-medium font-hero  hover:bg-blue-600 hover:bg-opacity-10 ${
        isActive && "text-blue-600"
      } text-left`}
    >
      {content}
    </button>
  )
}

NavTile.propTypes = {
  content: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default NavTile
