import { BsFillSunFill } from "react-icons/bs";
import { useGetAllUserQuery } from "../../../Redux//feature/API/userApiSlice/userApiSlice";
import { motion } from "framer-motion";
const topAreaItems = [
  {
    title: "all",
  },
  {
    title: "complete",
  },
  {
    title: "incomplete",
  },
];

const TodoTopArea = ({ TodoStage, setTodoStage }) => {
  const { data } = useGetAllUserQuery();

  //  avatar, email, name , username,id
  let tempIng =
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1";
  return (
    <>
      <div className="bg-dim z-50 w-full pt-6">
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
              <h4 className="text-Shades text-xl font-bold">
                {data?.data?.user?.name}
              </h4>
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
          <div className=" grid w-full grid-cols-3">
            {topAreaItems.map((val) => {
              return (
                <div key={val.title} className="flex flex-col items-center">
                  <button onClick={() => setTodoStage(val.title)}>
                    {val.title}
                  </button>
                  {TodoStage === val.title && (
                    <motion.span
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      layoutId="active-pill"
                      className="navActive"
                    ></motion.span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTopArea;
