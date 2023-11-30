import { Spinner } from "@material-tailwind/react"
import { useForm } from "react-hook-form"
import { AiOutlineTeam } from "react-icons/ai"
import { toast } from "react-toastify"
import { useCreateTaskMutation } from "../../../../Redux/feature/API/taskApiSlice/taskApiSlice"

const AddTask_Form = () => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      StartDate: new Date().toISOString().substring(0, 10),
      EndDate: new Date().toISOString().substring(0, 10),
    },
  })
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
        reset()
      } else {
        toast.error("Task not created")
      }
    } catch (error) {
      toast.error("Something went wrong")
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

          <button className="btn-primary my-2 w-full" type={"submit"}>
            {isLoading ? (
              <span className="inline-flex items-center justify-center gap-x-2">
                <Spinner width={15} height={15} />
                Creating Task......
              </span>
            ) : (
              "Create Task"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddTask_Form
