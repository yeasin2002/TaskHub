import ParticipantsManage from "../../../components/ParticipantsManage";
import formateDate from "../../../utils/formateDate";

/* eslint-disable no-unused-vars */
const TodoHomeTodoCard = ({ todoColor = "bg-dim", todoDetails }) => {
  const {
    title = "",
    participants = [],
    startingDate = "",
    _id,
    completed = "",
    description = "",
    createdAt = "",
    endingDate = "",
  } = todoDetails;

  // modify the date
  const startDate = formateDate(startingDate);
  const EndDate = formateDate(endingDate);
  console.log(todoDetails);

  return (
    <div className={`${todoColor} p-4`}>
      <div className=" flex justify-between">
        <div>
          <div className=" flex items-center gap-2">
            <h2 className="title">{title} </h2>
            <span className="bg-Shades px-2 py-1 text-sm text-white rounded-md">
              Tag Category
            </span>
          </div>
          <p>{description}</p>
        </div>
        <div>
          <input type="checkbox" name="todo" id="todo" defaultChecked />
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
  );
};

export default TodoHomeTodoCard;
