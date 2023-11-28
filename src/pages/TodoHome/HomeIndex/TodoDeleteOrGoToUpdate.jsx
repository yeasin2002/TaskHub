import { Link } from "react-router-dom"
import * as RouteTypes from "../../../lib/RouteTypes"

// react Toast
import { toast } from "react-toastify"

// icons
import { AiFillDelete } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"
import { useDeleteTaskMutation } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice"
import SvgSpinners90RingWithBg from "../../../components/Icons/SvgSpinners90RingWithBg"
import CompletedOrUncompleted from "./CompletedOrUncomplete"

const TodoDeleteOrGoToUpdate = ({ id, todoDetails, completed }) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation()

  const deleteHandler = async () => {
    try {
      const deleteIt = await deleteTask(id)

      if (deleteIt?.error?.data?.status == "fail") {
        await toast.error("Task delete Failed")
      }
      if (deleteIt.data === null) {
        await toast.success("Task delete Successfully")
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  return (
    <div className="into-center h-full  justify-around  rounded-r-md  transition-all ">
      {/* <input type="checkbox" id="updateTodoCompleteOrUncompleted" className="mx-3 cursor-pointer " /> */}
      <CompletedOrUncompleted id={id} completed={completed} />
      <div className="cursor-pointer rounded-full p-2 transition-all hover:bg-dim">
        {!isLoading ? (
          <span onClick={deleteHandler}>
            <AiFillDelete />
          </span>
        ) : (
          <SvgSpinners90RingWithBg />
        )}
      </div>
      <Link
        state={todoDetails}
        to={`/${RouteTypes.updateTask}/${id}`}
        className="cursor-pointer rounded-full p-2 transition-all hover:bg-dim">
        <BiEdit className="text-xl font-bold text-blackens" />
      </Link>
    </div>
  )
}
export default TodoDeleteOrGoToUpdate
