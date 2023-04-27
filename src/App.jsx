import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as allRouter from "./utils/RouteTypes";

//  Pages Components
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const About = lazy(() => import("./pages/aboutUs/AboutUs"));
const Contact = lazy(() => import("./pages/aboutUs/AboutUs"));

// eslint-disable-next-line no-unused-vars
const helpAndSupport = lazy(() =>
  import("./pages/helpAndSupport/helpAndSupport")
);

// eslint-disable-next-line no-unused-vars
const TodoHome = lazy(() => import("./pages/TodoHome/TodoHome"));
const SingIn = lazy(() => import("./pages/SingIn/SingIn"));
const LogIn = lazy(() => import("./pages/Login/LogIn"));

//  Global Components / layout
const NotFound = lazy(() => import("./layout/NotFound"));
import Loading from "./layout/Loading";

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
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
