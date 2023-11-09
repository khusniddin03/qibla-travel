import { ReactElement, lazy } from "react";
import ConfirmPage from "../pages/confirmPage";
const Home = lazy(() => import("../pages/home"));
const Registration = lazy(() => import("../pages/registartion"));

type Path = {
  path: string;
  element: ReactElement;
  private: boolean;
};

type PathType = {
  children?: Path[];
} & Path;

const pathes: PathType[] = [
  {
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    path: "/registration",
    element: <Registration />,
    private: false,
  },
  {
    path: "/confirm",
    element: <ConfirmPage />,
    private: false,
  },
];

export default pathes;