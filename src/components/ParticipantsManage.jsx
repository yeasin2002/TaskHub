const ParticipantsManage = ({ participants = [] }) => {
  let tempImg =
    "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0";
  return (
    <div className="flex -space-x-4">
      {participants.length >= 2 &&
        participants?.slice(0, 2).map((singParticipant, index) => {
          return (
            <img
              key={index}
              className=" w-10 h-10 border-2 border-white rounded-full"
              src={singParticipant?.user?.avatar || tempImg}
              alt=""
            />
          );
        })}
      {participants.length > 2 && (
        <p className="hover:bg-gray-600 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full">
          +{participants.length - 2}
        </p>
      )}
    </div>
  );
};

export default ParticipantsManage;
