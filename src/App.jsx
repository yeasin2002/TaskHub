import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import * as allRouter from "./lib/RouteTypes";

//  redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//  Global Components / layout
const NotFound = lazy(() => import("./layout/NotFound"));
import Loading from "./layout/Loading";
// import PrivetRoues from "./layout/PrivetRoues";
// import PublicRoute from "./layout/PublicRoute";

import { getJWT } from "./lib/usetJWT_Handler";
import { ToastContainer } from "react-toastify";

// Public Pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const About = lazy(() => import("./pages/aboutUs/AboutUs"));
const Contact = lazy(() => import("./pages/aboutUs/AboutUs"));
const SingIn = lazy(() => import("./pages/SingIn/SingIn"));
const LogIn = lazy(() => import("./pages/Login/LogIn"));
const GetApps = lazy(() => import("./pages/getApp/GetApps"));
const HelpAndSupportPage = lazy(() =>
  import("./pages/HelpAndSupportPage/HelpAndSupport")
);

//  TodoHome  Pages and Routes
const TodoIndex = lazy(() => import("./pages/TodoHome/TodoIndex"));
//  sub-route of TodoHome
const TodoHome = lazy(() => import("./pages/TodoHome/HomeIndex/TodoHome"));
const Search = lazy(() => import("./pages/TodoHome/Search/Search"));
const Profile = lazy(() => import("./pages/TodoHome/Profile/Profile"));
const Notification = lazy(() =>
  import("./pages/TodoHome/Notification/Notification")
);
// add task or update task sub-route of TodoHome
const AddTask = lazy(() => import("./pages/TodoHome/Task/AddTask/AddTask"));
const UpdateTask = lazy(() =>
  import("./pages/TodoHome/Task/UpdateTask/UpdateTask")
);
const isJWT = getJWT();

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Routes>
          <Route path={allRouter.about} element={<About />} />
          <Route path={allRouter.contact} element={<Contact />} />
          <Route path={allRouter.getApps} element={<GetApps />} />
          <Route
            path={allRouter.helpAndSupport}
            element={<HelpAndSupportPage />}
          />

          {!isJWT ? (
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
                <Route
                  path={allRouter.notification}
                  element={<Notification />}
                />
                <Route
                  path={`${allRouter.updateTask}/:id`}
                  element={<AddTask />}
                />
                <Route
                  path={`${allRouter.updateTask}/:id`}
                  element={<UpdateTask />}
                />
              </Route>
            </>
          )}

          <Route path={"*"} element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Provider>
    </Suspense>
  );
}

export default App;
