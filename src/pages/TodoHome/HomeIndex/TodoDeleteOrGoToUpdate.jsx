import { Link } from "react-router-dom";
import * as RouteTypes from "../../../lib/RouteTypes";
import loader from "../../../assets/global/loaderIcon.svg";

// icons
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDeleteTaskMutation } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice";

const TodoDeleteOrGoToUpdate = ({ id }) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  return (
    <div className="bg-Shades into-center group-hover:w-1/12 group-hover:flex rounded-r-md flex-col justify-around w-0 h-full overflow-hidden transition-all">
      <div className="hover:bg-dim p-2 transition-all rounded-full cursor-pointer">
        {!isLoading ? (
          <span
            onClick={() => {
              deleteTask(id);
            }}
          >
            <AiOutlineDelete className="text-blackens text-xl font-bold" />
          </span>
        ) : (
          //  delete task while loading
          <span className="inline-block">
            <img
              src={loader}
              className="bg-blackens h-10/12 w-10/12 rounded-full"
              alt="deleting"
            />
          </span>
        )}
      </div>
      <Link
        to={`${RouteTypes.updateTask}/${id}`}
        className="hover:bg-dim p-2 transition-all rounded-full cursor-pointer"
      >
        <BiEdit className="text-blackens text-xl font-bold" />
      </Link>
    </div>
  );
};
export default TodoDeleteOrGoToUpdate;
