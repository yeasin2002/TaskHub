import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as allRouter from "./Route/RouteTypes";

//  redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Public Pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const About = lazy(() => import("./pages/aboutUs/AboutUs"));
const Contact = lazy(() => import("./pages/aboutUs/AboutUs"));
const SingIn = lazy(() => import("./pages/SingIn/SingIn"));
const LogIn = lazy(() => import("./pages/Login/LogIn"));
const helpAndSupport = lazy(() =>
  import("./pages/helpAndSupport/helpAndSupport")
);

//  Private Pages
const TodoHome = lazy(() => import("./pages/TodoHome/TodoHome"));

//  Global Components / layout
const NotFound = lazy(() => import("./layout/NotFound"));
import Loading from "./layout/Loading";
import PrivetRoues from "./pages/privet routes/PrivetRoues";

//  app router
const router = createBrowserRouter([
  {
    path: allRouter.LandingPage,
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
        path: "/home",
        element: <TodoHome />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
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
