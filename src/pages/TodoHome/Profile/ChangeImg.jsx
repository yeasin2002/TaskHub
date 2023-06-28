const ChangeImg = () => {
  let tempImg =
    "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0";
  return (
    <div className="into-center">
      <img src={tempImg} className="avatar w-20 h-20" alt="Profile Picture " />
    </div>
  );
};

export default ChangeImg;
