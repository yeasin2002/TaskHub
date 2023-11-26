import { BsFillSunFill } from "react-icons/bs"
import { useGetAllUserQuery } from "../../../Redux//feature/API/userApiSlice/userApiSlice"
import { motion } from "framer-motion"
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
]

const TodoTopArea = ({ TodoStage, setTodoStage }) => {
  const { data } = useGetAllUserQuery()

  //  avatar, email, name , username,id
  let tempIng = "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"
  return (
    <>
      <div className="z-50 w-full bg-dim pt-6">
        <div className="topAre flex items-center justify-between px-10 pb-5 md:hidden">
          <div className="into-center gap-x-2">
            <div>
              <img className="h-10 w-10 rounded-full ring-2 ring-Shades" src={tempIng} alt="Bordered avatar" />
            </div>
            <div>
              <p className="text-slate-600 font-semibold">Good Morning</p>
              <h4 className="text-xl font-bold text-Shades">{data?.data?.user?.name}</h4>
            </div>
          </div>

          <div>
            <div className="h-full w-full rounded-full bg-Shades/70 p-4 hover:bg-Shades">
              <BsFillSunFill className=" h-full w-full text-dim" />
            </div>
          </div>
        </div>

        {/*  navigation are */}
        <div className="h-10 bg-dim pt-4 md:pt-2">
          <div className=" grid w-full grid-cols-3">
            {topAreaItems.map((val) => {
              return (
                <div key={val.title} className="flex flex-col items-center">
                  <button onClick={() => setTodoStage(val.title)}>{val.title}</button>
                  {TodoStage === val.title && (
                    <motion.span
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      layoutId="active-pill"
                      className="navActive"></motion.span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoTopArea
