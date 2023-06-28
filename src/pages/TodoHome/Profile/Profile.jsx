const Profile = () => {
  let tempImg =
    "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0";
  return (
    <section
      className="bg-[#ECF0F8] w-full h-full flex justify-center py-10"
      id="profile"
    >
      <div>
        <div className="img are">
          <img src={tempImg} className="avatar" alt="Profile Picture " />
        </div>

        <div>
          <p>Full Name </p>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="form-input"
          />
          <button className="btn btn-primary">save</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
