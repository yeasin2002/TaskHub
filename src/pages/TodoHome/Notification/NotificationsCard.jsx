import { RiMenu3Fill } from "react-icons/ri"

const NotificationCard = () => {
  let tempIng = "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"
  return (
    <div className="mx-4 flex items-center gap-x-8 rounded-lg bg-Amber px-4 py-2">
      <div>
        <img className="avatar" src={tempIng} alt="Bordered avatar" />
      </div>
      <div className="flex-1">
        <p className="text-lg font-medium">Jon Completed a Task</p>
        <p>5h Ago </p>
      </div>
      <div className="hover:bg-slate-300 cursor-pointer rounded-md p-3 transition-all">
        <RiMenu3Fill />
      </div>
    </div>
  )
}
export default NotificationCard
