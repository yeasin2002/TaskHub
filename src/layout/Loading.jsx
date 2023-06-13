import loadingImg from "./../assets/global/loaderIcon.svg";

const Loading = () => {
  return (
    <div className="bg-dim absolute top-0 left-0 w-screen h-screen">
      <div className=" bg-screens into-center h-screen">
        <img
          src={loadingImg}
          alt="Loading............."
          className=" w-64 h-64"
        />
      </div>
    </div>
  );
};

export default Loading;
