import { BsFillSunFill } from "react-icons/bs";
const TodoHomeDrawer_temp = () => {
  let tempIng =
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1";
  return (
    <>
      <div className="bg-dim pt-6">
        <div className="topAre md:hidden flex items-center justify-between px-10 pb-5">
          <div className="into-center gap-x-2">
            <div>
              <img
                className="ring-2 ring-Shades w-10 h-10 rounded-full"
                src={tempIng}
                alt="Bordered avatar"
              />
            </div>
            <div>
              <p className="text-slate-600 font-semibold">Good Morning</p>
              <h4 className="text-Shades text-xl font-bold">Jon Doe</h4>
            </div>
          </div>

          <div>
            <div className="bg-Shades/70 hover:bg-Shades w-full h-full p-4 rounded-full">
              <BsFillSunFill className=" text-dim w-full h-full" />
            </div>
          </div>
        </div>

        {/*  navigation are */}
        <div className="bg-dim md:pt-2 h-10 pt-4">
          <div className=" flex justify-around w-full">
            <button>All</button>
            <button>complete</button>
            <button>incomplete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoHomeDrawer_temp;
