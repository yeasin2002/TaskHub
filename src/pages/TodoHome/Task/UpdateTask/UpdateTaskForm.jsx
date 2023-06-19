import { useForm } from "react-hook-form";
import Btn_Primary from "../../../../components/Btn_Primary";

//  icons
import { AiOutlineTeam } from "react-icons/ai";

import { useCreateTaskMutation } from "../../../../Redux/feature/API/taskApiSlice/taskApiSlice";
// components

const UpdateTaskForm = () => {
  //   const [participants, setParticipants] = useState([]);
  const { handleSubmit, register } = useForm();
  const [createTask, { isLoading }] = useCreateTaskMutation();

  const formHandler = async (data) => {
    console.log(data);

    //   const addTask = await createTask({
    //     title: data.title,
    //     description: data.description,
    //     startingDate: data.StartDate,
    //     endingDate: data.EndDate,
    //     participants: [],
    //     collection: data.collection,
    //   });
  };
  return (
    <form
      onSubmit={handleSubmit(formHandler)}
      className=" px-7 flex flex-col justify-between flex-1 h-screen py-4 mb-20"
    >
      <div>
        <input
          type="text"
          //    daysi ui is conflicting with this  input so i have to add this style
          style={{
            outline: "none",
          }}
          placeholder="Add a title to your task "
          className=" inputHolder"
          required
          {...register("title")}
        />
        {/*  dates */}
        <div className=" gap-x-2 flex items-center">
          <div className=" flex flex-col">
            <p>Start Date</p>
            <input
              type="date"
              name="StartDate"
              id="StartDate"
              {...register("StartDate")}
            />
          </div>
          <div className=" flex flex-col">
            <p>End Date</p>
            <input
              type="date"
              name="EndDate"
              id="EndDate"
              required
              {...register("EndDate")}
            />
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="Description" className="text-blackens ">
            <p>Description</p>
          </label>
          <br />
          <textarea
            className="placeholder:text-Shades ring ring-Shades/10 w-full h-48 border-none rounded-lg"
            name="Description"
            id="Description"
            placeholder="Write a meaningfull  Description"
            {...register("description")}
          ></textarea>
        </div>

        <div className="w-full">
          <label htmlFor="collection" className=" text-xl font-semibold">
            Collection
          </label>
          <br />
          <input
            type="text"
            id="collection"
            className="inputHolder"
            placeholder="Type a collection name"
            {...register("collection")}
          />
        </div>

        <div>
          <p className="text-blackens my-4 text-xl font-semibold">
            Participants
          </p>
          <span className="border-Shades hover:cursor-pointer inline-block p-1 border-2 rounded-md">
            <AiOutlineTeam className="text-3xl text-blue-800" />
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <Btn_Primary type={"submit"}>
          {isLoading ? "Loading..." : "Create Task"}
        </Btn_Primary>
      </div>
    </form>
  );
};
export default UpdateTaskForm;