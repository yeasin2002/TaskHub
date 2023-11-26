const SingParticipant = ({ imgSrc }) => {
  return (
    <>
      <div>
        <span className="inline-block rounded-md border-2 border-Shades p-1 hover:cursor-pointer">
          <img className="h-8 w-8" src={imgSrc} alt="participant......" />
        </span>
      </div>
    </>
  )
}

export default SingParticipant
