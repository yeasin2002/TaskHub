import ParticipantsManage from "../../../components/ParticipantsManage";
import formateDate from "../../../utils/formateDate";
import CompletedOrUncompleted from "./CompletedOrUncomplete";
import TodoDeleteOrGoToUpdate from "./TodoDeleteOrGoToUpdate";

/* eslint-disable no-unused-vars */
const TodoHomeTodoCard = ({ todoColor = "bg-dim", todoDetails }) => {
  const {
    title = "",
    participants = [],
    startingDate = "",
    _id,
    completed = false,
    description = "",
    createdAt = "",
    endingDate = "",
  } = todoDetails;

  // modify the date
  const startDate = formateDate(startingDate);
  const EndDate = formateDate(endingDate);

  return (
    <div className="group flex transition-all">
      <div className={`${todoColor} flex-1 p-4  rounded-l-md rounded-r-sm`}>
        <div className=" rounded-l-md flex justify-between">
          <div>
            <div className=" flex items-center gap-2">
              <h2 className="title">{title} </h2>
              <span className="bg-Shades hidden px-2 py-1 text-sm text-white rounded-md">
                Tag Category
              </span>
            </div>
            <p>{description}</p>
          </div>
          <div>
            <CompletedOrUncompleted id={_id} completed={completed} />
          </div>
        </div>
        <div className="bg-slate-900/40 my-2 w-full h-[.10rem]"></div>

        <div className="flex justify-between">
          <div>
            {startDate} - {EndDate}
          </div>
          <ParticipantsManage participants={participants} />
        </div>
      </div>
      <TodoDeleteOrGoToUpdate id={_id} todoDetails={todoDetails} />
    </div>
  );
};

export default TodoHomeTodoCard;
