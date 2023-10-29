import { ReactComponent as LoadingImg } from "./../assets/global/loaderIcon.svg";

const Loading = () => {
  return (
    <div className="bg-dim absolute top-0 left-0 w-full h-full">
      <div className=" bg-screens into-center h-screen">
        <LoadingImg className=" w-64 h-64" />
      </div>
    </div>
  );
};

export default Loading;
