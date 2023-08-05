import { Link } from "react-router-dom";
import * as RouteTypes from "../../../lib/RouteTypes";

// react Toast
import { toast } from "react-toastify";

// icons
import SvgSpinners90RingWithBg from "../../../components/Icons/SvgSpinners90RingWithBg";
import { BiEdit } from "react-icons/bi";
import { useDeleteTaskMutation } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice";
import { AiFillDelete } from "react-icons/ai";

const TodoDeleteOrGoToUpdate = ({ id, todoDetails }) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  const deleteHandler = async () => {
    try {
      const deleteIt = await deleteTask(id);

      if (deleteIt?.error?.data?.status == "fail") {
        await toast.error("Task delete Failed");
      }
      if (deleteIt.data === null) {
        await toast.success("Task delete Successfully");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="bg-Shades into-center group-hover:w-1/12 group-hover:flex rounded-r-md flex-col justify-around w-0 h-full overflow-hidden transition-all">
      <div className="hover:bg-dim p-2 transition-all rounded-full cursor-pointer">
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
        className="hover:bg-dim p-2 transition-all rounded-full cursor-pointer"
      >
        <BiEdit className="text-blackens text-xl font-bold" />
      </Link>
    </div>
  );
};
export default TodoDeleteOrGoToUpdate;
