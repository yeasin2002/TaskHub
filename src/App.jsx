import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import * as allRouter from "./lib/RouteTypes"

//  redux

import { ToastContainer } from "react-toastify"
import Loading from "./layout/Loading"

//  Global Components / layout
const NotFound = lazy(() => import("./layout/NotFound"))

import { useAuth } from "./hooks/useAuth"

// Public Pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"))
const About = lazy(() => import("./pages/aboutUs/AboutUs"))
const Contact = lazy(() => import("./pages/aboutUs/AboutUs"))
const SingIn = lazy(() => import("./pages/SingIn/SingIn"))
const LogIn = lazy(() => import("./pages/Login/LogIn"))
const HelpAndSupportPage = lazy(() => import("./pages/HelpAndSupportPage/HelpAndSupport"))

//  TodoHome  Pages and Routes
const TodoIndex = lazy(() => import("./pages/TodoHome/TodoIndex"))
//  sub-route of TodoHome
const TodoHome = lazy(() => import("./pages/TodoHome/HomeIndex/TodoHome"))
const Search = lazy(() => import("./pages/TodoHome/Search/Search"))
const Profile = lazy(() => import("./pages/TodoHome/Profile/Profile"))
const Notification = lazy(() => import("./pages/TodoHome/Notification/Notification"))
// add task or update task sub-route of TodoHome
const AddTask = lazy(() => import("./pages/TodoHome/Task/AddTask/AddTask"))
const UpdateTask = lazy(() => import("./pages/TodoHome/Task/UpdateTask/UpdateTask"))

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={allRouter.about} element={<About />} />
        <Route path={allRouter.contact} element={<Contact />} />

        <Route path={allRouter.helpAndSupport} element={<HelpAndSupportPage />} />

        {!isLoggedIn ? (
          <>
            {/* public route for is not logged in */}
            <Route path={allRouter.LandingPage} element={<LandingPage />} />
            <Route path={allRouter.singIn} element={<SingIn />} />
            <Route path={allRouter.login} element={<LogIn />} />
          </>
        ) : (
          <>
            {/*  protected if logged in   */}
            <Route path={allRouter.todoHome} element={<TodoIndex />}>
              <Route index element={<TodoHome />} />
              <Route path={allRouter.search} element={<Search />} />
              <Route path={allRouter.profile} element={<Profile />} />
              <Route path={allRouter.notification} element={<Notification />} />
              <Route path={allRouter.addTask} element={<AddTask />} />
              <Route path={`${allRouter.updateTask}/:id`} element={<UpdateTask />} />
            </Route>
          </>
        )}

        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  )
}

export default App
