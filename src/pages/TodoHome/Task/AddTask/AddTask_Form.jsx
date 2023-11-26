import { useForm } from "react-hook-form"
import Btn_Primary from "../../../../components/Btn_Primary"

//   react toast message
import { toast } from "react-toastify"

//  icons
import { AiOutlineTeam } from "react-icons/ai"
import { useCreateTaskMutation } from "../../../../Redux/feature/API/taskApiSlice/taskApiSlice"

// import UploadLoop from "../../../../components/Icons/UploadLoop";

const AddTask_Form = () => {
  const { handleSubmit, register } = useForm()
  const [createTask, { isLoading }] = useCreateTaskMutation()

  const formHandler = async (data) => {
    try {
      const addTask = await createTask({
        title: data.title,
        description: data.description,
        startingDate: data.StartDate,
        endingDate: data.EndDate,
        participants: [],
        collection: data.collection,
      })
      if (addTask?.data?.status === "success") {
        toast.success("Task created successfully")
        console.log("task created successfully")
      } else {
        console.log("task not created")
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(formHandler)}
        className=" mb-20 flex h-screen flex-1 flex-col justify-between px-7 py-4">
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
          <div className=" flex items-center gap-x-2">
            <div className=" flex flex-col">
              <p>Start Date</p>
              <input
                type="date"
                name="StartDate"
                id="StartDate"
                {...register("StartDate", {
                  defaultValue: new Date(),
                })}
                // how to provide a default value to  input:date in react-hook-form
              />
            </div>
            <div className=" flex flex-col">
              <p>End Date</p>
              <input type="date" name="EndDate" id="EndDate" required {...register("EndDate")} />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="Description" className="text-blackens ">
              <p>Description</p>
            </label>
            <br />
            <textarea
              className="h-48 w-full rounded-lg border-none ring ring-Shades/10 placeholder:text-Shades"
              name="Description"
              id="Description"
              placeholder="Write a meaningfull  Description"
              {...register("description")}></textarea>
          </div>

          <div className="hidden w-full">
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
            <p className="my-4 text-xl font-semibold text-blackens">Participants</p>
            <span className="inline-block rounded-md border-2 border-Shades p-1 hover:cursor-pointer">
              <AiOutlineTeam className="text-3xl text-blue-800" />
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <Btn_Primary type={"submit"}>
            {/* <UploadLoop className={"w-full "} /> */}
            {isLoading ? "loading" : "Create Task"}
          </Btn_Primary>
        </div>
      </form>
    </div>
  )
}
export default AddTask_Form
