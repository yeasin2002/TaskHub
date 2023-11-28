import { AnimatePresence, motion } from "framer-motion"
import ParticipantsManage from "../../../components/ParticipantsManage"
import formateDate from "../../../utils/formateDate"
import CompletedOrUncompleted from "./CompletedOrUncomplete"
import TodoDeleteOrGoToUpdate from "./TodoDeleteOrGoToUpdate"

/* eslint-disable no-unused-vars */
const TodoHomeTodoCard = ({ todoColor = "bg-dim", todoDetails, id }) => {
  const {
    title = "",
    participants = [],
    startingDate = "",
    _id,
    completed = false,
    description = "",
    createdAt = "",
    endingDate = "",
  } = todoDetails 

  // modify the date
  const startDate = formateDate(startingDate)
  const EndDate = formateDate(endingDate)

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: id * 0.15,
          },
        }}
        exit={{
          opacity: 0,
        }}
        className="group flex rounded-md border border-accent/40 transition-all">
        <div className={`${todoColor} flex-1 rounded-l-md  rounded-r-sm p-4`}>
          <div className=" flex justify-between rounded-l-md">
            <div>
              <div className=" flex items-center gap-2">
                <h2 className="title">{title} </h2>
                <span className="hidden rounded-md bg-Shades px-2 py-1 text-sm text-white">Tag Category</span>
              </div>
              <p>{description}</p>
            </div>
            <div>
              <CompletedOrUncompleted id={_id} completed={completed} />
            </div>
          </div>
          <div className="bg-slate-900/40 my-2 h-[.10rem] w-full"></div>

          <div className="flex justify-between">
            <div>
              {startDate} - {EndDate}
            </div>
            <ParticipantsManage participants={participants} />
          </div>
        </div>
        <TodoDeleteOrGoToUpdate id={_id} todoDetails={todoDetails} />
      </motion.div>
    </AnimatePresence>
  )
}

export default TodoHomeTodoCard
