import PropTypes from "prop-types"

const SponcerCard = ({ imageUrl, width = "max-w-[425px]" }) => {
  return (
    <div className={`flex justify-center items-center p-2 ${width} h-56 rounded-xl bg-[#000006] bg-opacity-40 my-4`}>
      <div className="flex justify-center items-center w-full h-full rounded-xl">
        <img src={imageUrl} alt="Sponsor" className="w-full" />
      </div>
    </div>
  )
}

SponcerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.string
}

export default SponcerCard
