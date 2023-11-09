import { useLocation, useRoutes } from "react-router-dom";
import pathes from "./path";
import { languageDetected } from "../helpers/languageDetected";

const Routes = () => {
  const { pathname } = useLocation();
  const lang = languageDetected(pathname);

  return useRoutes(
    [...pathes.map(({ path, element, children }) => {
      return {
        path: '/' + lang + path,
        element,
        children: children?.map((child) => ({
          path: child.path,
          element: child.element,
        })),
      };
    }),
    {
      path: '/',
      element: ''
    }
  ]
  );
};

export default Routes;