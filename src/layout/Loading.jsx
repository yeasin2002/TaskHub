import { ReactComponent as LoadingImg } from "./../assets/global/loaderIcon.svg"

const Loading = () => {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-dim">
      <div className=" bg-screens into-center h-screen">
        <LoadingImg className=" h-64 w-64" />
      </div>
    </div>
  )
}

export default Loading
