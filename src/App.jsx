/* eslint-disable no-sparse-arrays */
/* eslint-disable no-unused-vars */
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as allRouter from "./lib/RouteTypes";

//  redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//  Global Components / layout
const NotFound = lazy(() => import("./layout/NotFound"));
import Loading from "./layout/Loading";
import PrivetRoues from "./layout/PrivetRoues";

import Root from "./layout/Root";

// Public Pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const About = lazy(() => import("./pages/aboutUs/AboutUs"));
const Contact = lazy(() => import("./pages/aboutUs/AboutUs"));
const SingIn = lazy(() => import("./pages/SingIn/SingIn"));
const LogIn = lazy(() => import("./pages/Login/LogIn"));
const helpAndSupport = lazy(() =>
  import("./pages/helpAndSupport/helpAndSupport")
);

//  TodoHome  Pages and Routes
const TodoIndex = lazy(() => import("./pages/TodoHome/TodoIndex"));
//  subroute of TodoHome
const TodoHome = lazy(() => import("./pages/TodoHome/HomeIndex/TodoHome"));
const Search = lazy(() => import("./pages/TodoHome/Search/Search"));
const Profile = lazy(() => import("./pages/TodoHome/Profile/Profile"));
const Notification = lazy(() =>
  import("./pages/TodoHome/Notification/Notification")
);
// add task or update task subroute of TodoHome
const AddTask = lazy(() => import("./pages/TodoHome/Task/AddTask/AddTask"));
const UpdateTask = lazy(() =>
  import("./pages/TodoHome/Task/UpdateTask/UpdateTask")
);
//  all, complete and incomplete task  subroutes of todoHomeIndex
const AllTask = lazy(() =>
  import("./pages/TodoHome/HomeIndex/AllTask/AllTask")
);
const CompleteTask = lazy(() =>
  import("./pages/TodoHome/HomeIndex/CompleteTask/CompleteTask")
);
const IncompleteTask = lazy(() =>
  import("./pages/TodoHome/HomeIndex/IncompleteTask/IncompleteTask")
);

//  app router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: allRouter.about,
        element: <About />,
      },
      {
        path: allRouter.contact,
        element: <Contact />,
      },
      {
        path: allRouter.helpAndSupport,
        element: <helpAndSupport />,
      },
      {
        path: allRouter.login,
        element: <LogIn />,
      },
      {
        path: allRouter.singIn,
        element: <SingIn />,
      },
      ,
      {
        path: "/",
        element: <PrivetRoues />,
        children: [
          {
            path: allRouter.todoHome,
            element: <TodoIndex />,
            children: [
              {
                index: true,
                element: <TodoHome />,
                children: [
                  {
                    path: allRouter.allTask,
                    element: <AllTask />,
                  },
                  {
                    path: allRouter.completeTask,
                    element: <CompleteTask />,
                  },
                  {
                    path: allRouter.incompleteTask,
                    element: <IncompleteTask />,
                  },
                ],
              },
              {
                path: allRouter.search,
                element: <Search />,
              },
              {
                path: allRouter.profile,
                element: <Profile />,
              },
              {
                path: allRouter.notification,
                element: <Notification />,
              },
              {
                path: allRouter.addTask,
                element: <AddTask />,
              },
              {
                path: allRouter.updateTask,
                element: <UpdateTask />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
}

export default App;
