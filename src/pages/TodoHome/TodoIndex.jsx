import { Outlet } from "react-router-dom"

//  components
import TodoHomeBottomMobileNav from "./TodoHomeBottomMobileNav"
import TodoHomeSidebar from "./TodoHomeSidebar"

const HomeIndex = () => {
  return (
    <main>
      <div className=" h-screen flex-col justify-between">
        <div className="flex  ">
          <TodoHomeSidebar />
          <div className=" flex-1 overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>

      {/*  bottom area mobile nav  */}
      <TodoHomeBottomMobileNav />
    </main>
  )
}

export default HomeIndex
