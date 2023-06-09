import { RiMenu3Fill } from "react-icons/ri";

const NotificationCard = () => {
  let tempIng =
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1";
  return (
    <div className="bg-Amber gap-x-8 flex items-center px-4 py-2 rounded-lg">
      <div>
        <img className="avatar" src={tempIng} alt="Bordered avatar" />
      </div>
      <div className="flex-1">
        <p className="text-lg font-medium">Jon Completed a Task</p>
        <p>5h Ago </p>
      </div>
      <div className="hover:bg-slate-300 p-3 transition-all rounded-md cursor-pointer">
        <RiMenu3Fill />
      </div>
    </div>
  );
};
export default NotificationCard;
