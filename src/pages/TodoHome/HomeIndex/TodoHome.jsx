import { useState } from "react"
import TodoTopArea from "./TodoTopArea"
import TodoHomeTodoRender from "./TodoHomeTodoRender"

const TodoHome = () => {
  const [TodoStage, setTodoStage] = useState("all")
  return (
    <div
      className=" h-full w-full flex-1"
      style={{
        backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 27%, rgba(217,226,242,1) 37%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
      }}>
      <TodoTopArea setTodoStage={setTodoStage} TodoStage={TodoStage} />
      <TodoHomeTodoRender setTodoStage={setTodoStage} TodoStage={TodoStage} />
    </div>
  )
}

export default TodoHome
