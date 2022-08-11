import { matchPath } from "react-router";

const AuthedRoutes = [
  {
    url: "/",
    page: () => import("../page/main/ListPage"),
  },
  {
    url: "test",
    page: () => import("../page/unauthed/RedirectPage"),
  },
];

const UnauthedRoutes = [
  {
    url: "redirect",
    page: () => import("../page/unauthed/RedirectPage"),
  },
];

const findMenuUrl = (pathname) => {
  const selectedRoutes = AuthedRoutes.filter((item) => {
    const mPath = matchPath(pathname, { path: item?.url, exact: true });
    return !!mPath;
  });
  if (selectedRoutes?.length)
    return (
      selectedRoutes[0]?.props?.menuURL ||
      selectedRoutes[0]?.props?.baseURL ||
      selectedRoutes[0]?.url
    );
  return pathname;
};

export { AuthedRoutes, UnauthedRoutes, findMenuUrl };
