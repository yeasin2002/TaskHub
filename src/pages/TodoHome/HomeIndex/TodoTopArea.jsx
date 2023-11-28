import { motion } from "framer-motion"
import { useGetAllUserQuery } from "../../../Redux//feature/API/userApiSlice/userApiSlice"
import userImg from "../../../assets/global/user.jpg"

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

  return (
    <>
      <div className="z-50 w-full bg-dim pt-6">
        <div className="topAre flex items-center justify-between px-10 pb-5 md:hidden">
          <div className="into-center gap-x-2">
            <div>
              <img className="h-10 w-10 rounded-full ring-2 ring-Shades" src={userImg} alt="Bordered avatar" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">{data?.data?.user?.name}</h4>
              <p className="font-semibold text-gray-700">@{data?.data?.user?.username}</p>
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
