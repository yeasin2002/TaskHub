import { Link } from "react-router-dom"
import * as RouteTypes from "../../../lib/RouteTypes"

// react Toast
import { toast } from "react-toastify"

// icons
import SvgSpinners90RingWithBg from "../../../components/Icons/SvgSpinners90RingWithBg"
import { BiEdit } from "react-icons/bi"
import { useDeleteTaskMutation } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice"
import { AiFillDelete } from "react-icons/ai"

const TodoDeleteOrGoToUpdate = ({ id, todoDetails }) => {
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
    <div className="into-center h-full w-0 flex-col justify-around overflow-hidden rounded-r-md bg-Shades transition-all group-hover:flex group-hover:w-1/12">
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
