const SingParticipant = ({ imgSrc }) => {
  return (
    <>
      <div>
        <span className="border-Shades hover:cursor-pointer inline-block p-1 border-2 rounded-md">
          <img className="w-8 h-8" src={imgSrc} alt="participant......" />
        </span>
      </div>
    </>
  );
};

export default SingParticipant;
