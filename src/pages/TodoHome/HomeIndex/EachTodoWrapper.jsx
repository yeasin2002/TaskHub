import { cn } from "../../../utils/cn"
import formateDate from "../../../utils/formateDate"
const EachTodoWrapper = ({ tasks, todoType }) => {
  return (
    <div className="grid gap-2 p-8 " key={todoType}>
      {tasks.map((task) => {
        const startDate = formateDate(task?.startingDate)
        const endDate = formateDate(task?.endingDate)

        return (
          <div key={task._id}>
            <div
              className={cn("max-w-2xl rounded-lg px-4 py-2   shadow-md ", {
                "bg-blue-600": todoType === "all",
                "bg-green-600": todoType === "complete",
                "bg-red-600": todoType === "incomplete",
              })}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="text-sm font-light text-gray-200">{startDate} -</p>
                  <p className="text-sm font-light text-gray-200">{endDate}</p>
                </div>

                <p
                  className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 hover:bg-gray-500"
                  tabIndex="0"
                  role="button">
                  {task.completed ? "completed" : "incomplete"}
                </p>
              </div>

              <div className="mt-2">
                <a
                  href="#"
                  className="text-xl font-bold text-gray-100 hover:text-gray-600 hover:underline "
                  tabIndex="0"
                  role="link">
                  {task?.title}
                </a>
                <p className="mt-2 text-gray-200 ">{task?.description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-200">{task?.owner?.name}</p>
                  <p className="text-gray-300">@{task?.owner?.username}</p>
                </div>
                <div>delete</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default EachTodoWrapper

/*
{
    "_id": "6565ed80ca0b6f0e02e446c5",
    "title": "React ",
    "description": "test ",
    "owner": {
        "_id": "65635a685a9c00e46dda7ca0",
        "name": "Mohammad Yeasin",
        "username": "yesin2023"
    },
    "completed": false,
    "startingDate": "2023-11-29T00:00:00.000Z",
    "endingDate": "2023-11-29T00:00:00.000Z",
    "createdAt": "2023-11-28T13:39:12.838Z",
    "participants": []
}
*/
