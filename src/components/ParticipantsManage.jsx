const ParticipantsManage = ({ participants = [] }) => {
  let tempImg = "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0"
  return (
    <div className="flex -space-x-4">
      {participants.length >= 2 &&
        participants?.slice(0, 2).map((singParticipant, index) => {
          return (
            <img
              key={index}
              className=" h-10 w-10 rounded-full border-2 border-white"
              src={singParticipant?.user?.avatar || tempImg}
              alt=""
            />
          )
        })}
      {participants.length > 2 && (
        <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600">
          +{participants.length - 2}
        </p>
      )}
    </div>
  )
}

export default ParticipantsManage
